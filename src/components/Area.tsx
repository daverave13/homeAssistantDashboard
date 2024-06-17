import Toggle from "../components/Toggle";

interface AreaProps {
  name: string;
  entityIds: string[];
}

export default ({ entityIds, name }: AreaProps) => {
  return (
    <div className="border-solid rounded-md border-2 p-3">
      <h2 className="text-2xl dark:text-dark-tremor-content-strong">{name}</h2>
      <div className="flex flex-wrap justify-start my-4 ">
        {entityIds.sort((a:string,b:string) => b.localeCompare(a)).map((entityId) => (
          <Toggle key={entityId} entityId={entityId} />
        ))}
      </div>
    </div>
  );
};
