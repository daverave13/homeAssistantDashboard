import { useContext } from "react";
import { HomeAssistantContext } from "../contexts/HomeAssistantContext";
import { Card } from "@tremor/react";
import { HassEntity } from "home-assistant-js-websocket";
import Details from "./Details";

interface ToggleProps {
  entity: HassEntity;
}

export default ({ entity }: ToggleProps) => {
  const { toggleSwitch } = useContext(HomeAssistantContext);
  const name = entity.attributes.friendly_name || "Name not found";
  const isEntityOn = entity.state === "on";

  return (
    <div className="w-48 m-4 space-y-2" key={entity.entity_id}>
      <Card
        className={`w-48 py-2 flex flex-column justify-around align-middle ${
          name.length > 0 ? "" : "animate-pulse"
        } ${isEntityOn ? "dark:bg-yellow-400" : ""}`}
        onClick={() => toggleSwitch(entity.entity_id)}
      >
        {" "}
        <p
          className={`text-s md:text-l self-center ${
            isEntityOn
              ? "text-tremor-content-strong"
              : "dark:text-dark-tremor-content-strong"
          }  `}
        >
          {name}
        </p>
      </Card>
      <Details entity={entity} />
    </div>
  );
};
