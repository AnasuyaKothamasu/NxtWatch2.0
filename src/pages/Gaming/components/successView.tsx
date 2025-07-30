import { SiYoutubegaming } from "react-icons/si";
import { observer } from "mobx-react-lite";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router";
import { ReactNode } from "react";

import {
  GamingSuccessContainer,
  HeadingContainer,
  HeadingIconContainer,
  Heading,
  GamingVideosContainer,
  Loader,
  GamingGridContainer,
} from "../styledComponents";

import gameStore from "../stores/gameStore";

import GamingCard from "../../../components/GamingCard";

const SuccessView = observer((): ReactNode => {
  const navigate = useNavigate();

  function clickGameVideo(id: string): void {
    navigate(`/viewItemDetails/${id}`);
  }
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
});

export default SuccessView;
