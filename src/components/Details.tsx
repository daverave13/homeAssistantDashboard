import { HassEntity } from "home-assistant-js-websocket";

interface DetailsProps {
  entity: HassEntity;
}

const Details = ({ entity }: DetailsProps) => {
  return (
    <div>
      {entity.attributes.Summary ? (
        <p className="text-xs text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {entity.attributes.Summary.replace("(PDT)", "")}
        </p>
      ) : (
        <p className="text-xs text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {entity.last_changed
            ? `Turned ${entity.state} at ${new Date(
                entity.last_changed
              ).toLocaleTimeString()}`
            : "No data available"}
        </p>
      )}
    </div>
  );
};

export default Details;
