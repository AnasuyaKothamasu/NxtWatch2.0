import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import { useEffect, ReactElement } from "react";
import Cookies from "js-cookie";

import { TrendingFlexContainer } from "./styledComponents";

import SuccessView from "../../components/TrendingSuccessView";
import trendStore from "../../stores/TrendingStore";

import FailureView from "../../components/FailureView";
import Sidebar from "../../components/Sidebar";
import ROUTES from "../../constants/RouteConstants";

const Trending: React.FunctionComponent = observer((): ReactElement => {
  const navigate = useNavigate();

  const jwtToken = Cookies.get("jwt_token");

  useEffect(() => {
    if (jwtToken === undefined) {
      navigate(ROUTES.LOGIN, { replace: true });
    } else {
      trendStore.fetchVideos();
    }
  }, []);

  return (
    <>
      <TrendingFlexContainer className="flex-container-trending">
        <Sidebar />
        {trendStore.showSuccessView ? <SuccessView /> : <FailureView />}
      </TrendingFlexContainer>
    </>
  );
});

export default Trending;
