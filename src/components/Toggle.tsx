import { useState, useContext, useEffect } from "react";
import { HomeAssistantContext } from "../contexts/HomeAssistantContext";
import { Card, Switch } from "@tremor/react";

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
      className={`mx-2 w-76 flex justify-around  ${
        isSwitchOn ? "dark:bg-yellow-400" : ""
      }`}
      onClick={() => toggleSwitch(entityId)}
    >
      {" "}
      <p
        className={`text-xl ${
          isSwitchOn
            ? "text-tremor-content-strong"
            : "dark:text-dark-tremor-content-strong"
        }  `}
      >
        {name}
      </p>{" "}
      <Switch
        className="ms-4 mt-1"
        id="switch"
        name="switch"
        checked={isSwitchOn}
      />
    </Card>
  );
};
