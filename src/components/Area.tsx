import Toggle from "../components/Toggle";

interface AreaProps {
  name: string;
  entityIds: string[];
}

export default ({ entityIds, name }: AreaProps) => {
  return (
    <div className="border-solid rounded-md border-2 m-8 p-8 w-1/2">
      <h2 className="text-4xl dark:text-dark-tremor-content-strong">{name}</h2>
      <div className="flex flex-wrap justify-between mt-6 px-4">
        {entityIds.map((entityId) => (
          <Toggle key={entityId} entityId={entityId} />
        ))}
      </div>
    </div>
  );
};
