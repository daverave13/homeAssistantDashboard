import {
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
} from "react";
import {
  getAuth,
  createLongLivedTokenAuth,
  createConnection,
  subscribeEntities,
  callService,
  Connection,
  HassEntities,
  AuthData,
} from "home-assistant-js-websocket";

interface HomeAssistantContextProps {
  children: ReactNode;
}

interface HomeAssistantContext {
  connection: Connection | null;
  entities: HassEntities | null;
  setEntities: Dispatch<SetStateAction<HassEntities | null>>;
  connect: () => any;
  toggleSwitch: (entityId: string) => any;
}

export const HomeAssistantContext = createContext<HomeAssistantContext>(
  {} as HomeAssistantContext
);

export const HomeAssistantProvider = ({
  children,
}: HomeAssistantContextProps) => {
  const [connection, setConnection] = useState<Connection | null>(null);
  const [entities, setEntities] = useState<HassEntities | null>(null);

  const connect = async () => {
    const storedTokens = JSON.parse(
      localStorage.getItem("hassTokens") || "{}"
    ) as AuthData;
    const isExpired = storedTokens.expires_in < Date.now();
    let auth;
    const hassUrl = import.meta.env.VITE_HASS_URL as string;
    if (storedTokens && !isExpired) {
      auth = createLongLivedTokenAuth(hassUrl, storedTokens.access_token);
    } else {
      //   window.location.href = window.location.origin;
      try {
        // Try to pick up authentication after user logs in
        auth = await getAuth({
          hassUrl,
          redirectUrl: `${window.location.origin}/homeControl`,
          saveTokens: (tokens) => {
            localStorage.setItem("hassTokens", JSON.stringify(tokens));
          },
        });
      } catch (err) {
        console.log(err);
        return;
      }
    }
    const connection = await createConnection({ auth });

    subscribeEntities(connection, (ent) => setEntities(ent));
    setConnection(connection);
  };

  const toggleSwitch = async (entityId: string) => {
    if (connection)
      callService(connection, "homeassistant", "toggle", {
        entity_id: entityId,
      });
  };

  useEffect(() => {
    connect();
  }, []);

  return (
    <HomeAssistantContext.Provider
      value={{ connection, entities, setEntities, connect, toggleSwitch }}
    >
      {children}
    </HomeAssistantContext.Provider>
  );
};
