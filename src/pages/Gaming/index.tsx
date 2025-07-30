import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import { useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

import { GamingFlexContainer } from "./styledComponents";
import SuccessView from "./components/successView";
import gameStore from "./stores/gameStore";

import FailureView from "../../components/FailureView";
import Sidebar from "../../components/Sidebar";
import ROUTES from "../../routes/route";

const Gaming: React.FunctionComponent = observer(():ReactNode => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");

  useEffect(() => {
    if (jwtToken === undefined) {
      navigate(ROUTES.LOGIN, { replace: true });
    } else {
      gameStore.fetchVideos();
    }
  }, []);

  return (
    <>
      <GamingFlexContainer>
        <Sidebar />
        {gameStore.showSuccessView ? <SuccessView /> : <FailureView />}
      </GamingFlexContainer>
    </>
  );
});

export default Gaming;
