import { useNavigate, useParams } from "react-router";
import { observer } from "mobx-react-lite";
import { BeatLoader } from "react-spinners";
import { useEffect, ReactElement } from "react";
import Cookies from "js-cookie";

import { VideoItemFlexContainer, Loader } from "./styledComponents";
import SuccessView from "../../components/ViewItemDetailsSuccessView";
import itemStore from "../../stores/ItemStore";

import Sidebar from "../../components/Sidebar";
import FailureView from "../../components/FailureView";
import ROUTES from "../../constants/RouteConstants";

const ViewItemDetails: React.FC = observer((): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");

  useEffect(() => {
    if (!jwtToken) {
      navigate(ROUTES.LOGIN, { replace: true });
    } else {
      if (!id) {
        return;
      }
      itemStore.fetchVideo(id);
    }
  }, []);

  function successView(): ReactElement | null {
    if (!itemStore.det) return null;
    else {
      return (
        <>
          {itemStore.isLoading ? (
            <Loader>
              <BeatLoader />
            </Loader>
          ) : (
            <SuccessView />
          )}
        </>
      );
    }
  }

  return (
    <VideoItemFlexContainer>
      <Sidebar />
      {itemStore.showSuccessView ? successView() : <FailureView />}
    </VideoItemFlexContainer>
  );
});

export default ViewItemDetails;
