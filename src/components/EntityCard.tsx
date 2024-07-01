import { useContext } from "react";
import { HomeAssistantContext } from "../contexts/HomeAssistantContext";
import Details from "./Details";
import { HassEntity } from "home-assistant-js-websocket";
import { Card, Icon } from "@tremor/react";
import { RiInformationLine } from "@remixicon/react";

interface EntityCardProps {
  entity: HassEntity;
}

const EntityCard = ({ entity }: EntityCardProps) => {
  const { toggleSwitch } = useContext(HomeAssistantContext);
  const name = entity.attributes.friendly_name || "Name not found";
  const deviceClass = entity.attributes.device_class || "switch";
  const isEntityOn = entity.state === "on";

  const activeColorMap = new Map([
    ["switch", "bg-amber-300 dark:bg-amber-300"],
    ["opening", "bg-cyan-500 dark:bg-cyan-500 animate-pulse"],
  ]);

  return (
    <div
      className="w-64 h-fit space-y-2 bg-slate-700 m-4 p-2 rounded-xl"
      key={entity.entity_id}
    >
      <Card
        className={`py-2 flex flex-column justify-around align-middle cursor-pointer ${
          name.length > 0 ? "" : "animate-pulse"
        } ${
          isEntityOn
            ? activeColorMap.get(deviceClass)
            : "bg-slate-800 dark:bg-slate-800"
        }`}
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
      <div className="flex justify-end align-bottom w-100">
        <Icon
          icon={RiInformationLine}
          tooltip={JSON.stringify(entity.attributes)}
        />
      </div>
    </div>
  );
};

export default EntityCard;
