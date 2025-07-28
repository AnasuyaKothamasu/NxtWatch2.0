import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Cookies from "js-cookie";
import { ImFire } from "react-icons/im";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import FailureView from "../FailureView";
import TrendingCard from "../TrendingCard";
import trendStore from "./TrendingStore";

import {
  TrendingFlexContainer,
  TrendingSuccessContainer,
  HeadingContainer,
  HeadingIconContainer,
  Heading,
  Loader,
  TrendingVideosContainer,
} from "./StyledComponents";
import { observer } from "mobx-react-lite";

const Trending: React.FunctionComponent = observer(() => {
  const navigate = useNavigate();

  const jwtToken = Cookies.get("jwt_token");

  function clickTrendVideo(id) {
    navigate(`/viewItemDetails/${id}`);
  }

  useEffect(() => {
    if (jwtToken === undefined) {
      navigate("/login", { replace: true });
    } else {
      trendStore.fetchVideos();
    }
  }, []);

  function successView() {
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
              {" "}
              <BeatLoader />{" "}
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
  }

  return (
    <>
      <TrendingFlexContainer className="flex-container-trending">
        <Sidebar />
        {trendStore.showSuccessView ? successView() : <FailureView />}
      </TrendingFlexContainer>
    </>
  );
});

export default Trending;
