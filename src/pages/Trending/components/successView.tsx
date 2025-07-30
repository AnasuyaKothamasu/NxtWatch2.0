import { BeatLoader } from "react-spinners";
import { observer, Observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import { ImFire } from "react-icons/im";
import { ReactNode } from "react";

import {
  TrendingSuccessContainer,
  HeadingContainer,
  HeadingIconContainer,
  Heading,
  Loader,
  TrendingVideosContainer,
} from "../styledComponents";

import trendStore from "../stores/trendingStore";

import TrendingCard from "../../../components/TrendingCard";

const SuccessView = observer(():ReactNode => {
  const navigate = useNavigate();

  function clickTrendVideo(id: string): void {
    navigate(`/viewItemDetails/${id}`);
  }

  return (
    <TrendingSuccessContainer>
      <HeadingContainer>
        <HeadingIconContainer>
          <ImFire className="icon" />
        </HeadingIconContainer>
        <Heading>Trending</Heading>
      </HeadingContainer>
      <TrendingVideosContainer>
        {trendStore.isLoading && (
          <Loader>
            <BeatLoader />
          </Loader>
        )}
        {trendStore.trendingVideos.map((each) => (
          <TrendingCard
            trendDetails={each}
            clickTrendVideo={clickTrendVideo}
            key={each.id}
          />
        ))}
      </TrendingVideosContainer>
    </TrendingSuccessContainer>
  );
});

export default SuccessView;
