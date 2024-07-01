import { HassEntity } from "home-assistant-js-websocket";

interface DetailsProps {
  entity: HassEntity;
}

const Details = ({ entity }: DetailsProps) => {
  console.log(entity);

  return (
    <div className="px-5 pt-5">
      {entity.attributes.Summary ? (
        <li className="text-xs text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {entity.attributes.Summary.replace("(PDT)", "")}
        </li>
      ) : (
        <li className="text-xs text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {entity.last_changed
            ? `Turned ${entity.state} at ${new Date(
                entity.last_changed
              ).toLocaleTimeString()}`
            : "No data available"}
        </li>
      )}
    </div>
  );
};

export default Details;
