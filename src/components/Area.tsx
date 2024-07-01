import { useContext } from "react";
// import Toggle from "../components/Toggle";
// import Opening from "../components/Opening";
import EntityCard from "./EntityCard";
import { HomeAssistantContext } from "../contexts/HomeAssistantContext";

interface AreaProps {
  name: string;
  toggleIds?: string[];
  openingIds?: string[];
}

export default ({ toggleIds, openingIds, name }: AreaProps) => {
  const { entities } = useContext(HomeAssistantContext);

  return (
    <div className=" border-t-2 w-100 pt-4 ">
      <h2 className="text-2xl dark:text-dark-tremor-content-strong ml-10">
        {name}
      </h2>
      <div className="flex justify-center">
        <div className="my-4">
          {entities &&
            toggleIds &&
            toggleIds
              .sort((a: string, b: string) => b.localeCompare(a))
              .map((entityId) => <EntityCard entity={entities[entityId]} />)}
          {entities &&
            openingIds &&
            openingIds
              .sort((a: string, b: string) => b.localeCompare(a))
              .map((entityId) => <EntityCard entity={entities[entityId]} />)}
        </div>
      </div>
    </div>
  );
};
