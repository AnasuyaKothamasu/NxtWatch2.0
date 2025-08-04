import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { ReactElement } from "react";

import SuccessView from "../../components/HomeSuccessView";
import homeStore from "../../stores/HomeStore";
import { Flex } from "./styledComponents";

import FailureView from "../../components/FailureView";
import Sidebar from "../../components/Sidebar";
import ROUTES from "../../constants/RouteConstants";

const Home: React.FunctionComponent = observer((): ReactElement => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");

  useEffect(() => {
    if (jwtToken === undefined) {
      navigate(ROUTES.LOGIN, { replace: true });
    } else {
      homeStore.fetchVideos();
    }
  }, []);

  return (
    <>
      <Flex>
        <Sidebar />
        {homeStore.showSuccessView ? <SuccessView /> : <FailureView />}
      </Flex>
    </>
  );
});

export default Home;
