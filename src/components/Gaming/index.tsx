import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import FailureView from "../FailureView";
import GamingCard from "../GamingCard";
import { SiYoutubegaming } from "react-icons/si";
import {
  HeadingContainer,
  Loader,
  HeadingIconContainer,
  Heading,
  GamingSuccessContainer,
  GamingFlexContainer,
  GamingVideosContainer,
  GamingGridContainer,
} from "./StyledComponents";
import gameStore from "./GamingStore";
import { observer } from "mobx-react-lite";

const Gaming: React.FunctionComponent = observer(() => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");

  function clickGameVideo(id: string): void {
    navigate(`/viewItemDetails/${id}`);
  }

  useEffect(() => {
    if (jwtToken === undefined) {
      navigate("/login", { replace: true });
    } else {
      gameStore.fetchVideos();
    }
  }, []);

  function successView() {
    return (
      <GamingSuccessContainer>
        <HeadingContainer>
          <HeadingIconContainer>
            <SiYoutubegaming className="icon" />
          </HeadingIconContainer>
          <Heading>Gaming</Heading>
        </HeadingContainer>
        <GamingVideosContainer>
          {gameStore.isLoading && (
            <Loader>
              <BeatLoader />
            </Loader>
          )}
          <GamingGridContainer>
            {gameStore.gamingVideos.map((each) => (
              <GamingCard
                gameDetails={each}
                clickGameVideo={clickGameVideo}
                key={each.id}
              />
            ))}
          </GamingGridContainer>
        </GamingVideosContainer>
      </GamingSuccessContainer>
    );
  }

  return (
    <>
      <GamingFlexContainer>
        <Sidebar />
        {gameStore.showSuccessView ? successView() : <FailureView />}
      </GamingFlexContainer>
    </>
  );
});

export default Gaming;
