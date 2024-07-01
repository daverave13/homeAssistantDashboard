import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const CallBack = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    setIsLoggedIn(true);
    navigate("/homeControl");
  }, []);

  return <div>Callback</div>;
};

export default CallBack;
