import { useState, useContext, useEffect } from "react";
import { HomeAssistantContext } from "../contexts/HomeAssistantContext";
import { Card } from "@tremor/react";

interface ToggleProps {
  entityId: string;
}

export default ({ entityId }: ToggleProps) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [name, setName] = useState("");
  const { toggleSwitch, entities } = useContext(HomeAssistantContext);

  useEffect(() => {
    if (entities) {
      console.log(entities);
      const entity = entities[entityId];
      setName(entity.attributes.friendly_name || "Name not found");
      setIsSwitchOn(entity.state === "on");
    }
  }, [entities]);

  return (
    <Card
      className={`mx-2 w-48 py-2 flex flex-column justify-around align-middle ${name.length > 0 ? '' : 'animate-pulse'} ${
        isSwitchOn ? "dark:bg-yellow-400" : ""
      }`}
      onClick={() => toggleSwitch(entityId)}
    >
      {" "}
      <p
        className={`text-s md:text-l self-center ${
          isSwitchOn
            ? "text-tremor-content-strong"
            : "dark:text-dark-tremor-content-strong"
        }  `}
      >
        {name}
      </p>
    </Card>
  );
};
