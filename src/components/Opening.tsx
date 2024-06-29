import { useContext } from "react";
import { HomeAssistantContext } from "../contexts/HomeAssistantContext";

interface OpeningProps {
  name: string;
  entityId: string;
}

const Opening = ({ name, entityId }: OpeningProps) => {
  const { entities } = useContext(HomeAssistantContext);

  return (
    <div>
      <h1>{name}</h1>
      <p>{entityId}</p>
    </div>
  );
};

export default Opening;
