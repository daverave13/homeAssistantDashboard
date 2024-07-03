import {
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from "react";
import {
  createConnection,
  subscribeEntities,
  callService,
  Connection,
  HassEntities,
} from "home-assistant-js-websocket";
import { AuthContext } from "./AuthContext";

interface HomeAssistantContextProps {
  children: ReactNode;
}

interface HomeAssistantContext {
  connection: Connection | null;
  entities: HassEntities | null;
  setEntities: Dispatch<SetStateAction<HassEntities | null>>;
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
  const { auth } = useContext(AuthContext);

  const connect = async (auth: any) => {
    console.log("connecting");

    if (auth.data.access_token) {
      console.log(auth.data.access_token);
      const connection = await createConnection({ auth });
      subscribeEntities(connection, (ent) => setEntities(ent));
      setConnection(connection);
    }
  };

  const toggleSwitch = async (entityId: string) => {
    if (connection)
      callService(connection, "homeassistant", "toggle", {
        entity_id: entityId,
      });
  };

  useEffect(() => {
    if (auth?.data.access_token) connect(auth);
  }, [auth]);

  return (
    <HomeAssistantContext.Provider
      value={{ connection, entities, setEntities, toggleSwitch }}
    >
      {children}
    </HomeAssistantContext.Provider>
  );
};
