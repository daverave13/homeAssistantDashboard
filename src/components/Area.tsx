import { useContext } from "react";
import Toggle from "../components/Toggle";
import Opening from "../components/Opening";
import { HomeAssistantContext } from "../contexts/HomeAssistantContext";

interface AreaProps {
  name: string;
  toggleIds?: string[];
  openingIds?: string[];
}

export default ({ toggleIds, openingIds, name }: AreaProps) => {
  const { entities } = useContext(HomeAssistantContext);

  return (
    <div className="border-solid rounded-md border-2 p-3">
      <h2 className="text-2xl dark:text-dark-tremor-content-strong">{name}</h2>
      <div className="flex flex-wrap justify-start my-4 ">
        {entities &&
          toggleIds &&
          toggleIds
            .sort((a: string, b: string) => b.localeCompare(a))
            .map((entityId) => <Toggle entity={entities[entityId]} />)}
        {entities &&
          openingIds &&
          openingIds
            .sort((a: string, b: string) => b.localeCompare(a))
            .map((entityId) => <Opening name={name} entityId={entityId} />)}
      </div>
    </div>
  );
};
