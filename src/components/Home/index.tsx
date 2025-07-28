import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import VideoCard from "../VideoCard";
import { BeatLoader } from "react-spinners";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../Sidebar";
import PremiumCard from "../PremiumCard";
import FailureView from "../FailureView";
import homeStore from "./HomeStore";
import { observer } from "mobx-react-lite";
import {

  HomeSuccessContainer,
  HomeContainer1,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  HomeGridContainer,
  NoVideosCotainer,
  NoSearchHeading,
  NoSearchDescp,
  NoSearchImage,
  Loader,
  RetryButton,
  Flex,
} from "./StyledComponents";

const Home: React.FunctionComponent = observer(() => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");

  useEffect(() => {
    if (jwtToken === undefined) {
      navigate("/login", { replace: true });
    } else {
      homeStore.fetchVideos();
    }
  }, []);

  function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    homeStore.filterVideos();
  }

  function novideosView() {
    return (
      <>
        <NoVideosCotainer>
          <NoSearchImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" />
          <NoSearchHeading>No Search results found</NoSearchHeading>
          <NoSearchDescp>
            Try different keywords or remove search.
          </NoSearchDescp>
          <RetryButton onClick={handleSearch}>Retry</RetryButton>
        </NoVideosCotainer>
      </>
    );
  }

  function videosView() {
    return (
      <HomeGridContainer>
        {homeStore.filteredList.map((each) => (
          <VideoCard
            key={each.id}
            videoDetails={each}
            handleClick={handleClick}
          />
        ))}
      </HomeGridContainer>
    );
  }

  function successView() {
    return (
      <HomeSuccessContainer>
        {homeStore.showPremiumCard && (
          <PremiumCard removeCard={homeStore.removeCard} />
        )}
        <HomeContainer1>
          <SearchInputContainer onSubmit={handleSearch}>
            <SearchInput
              type="search"
              placeholder="Search"
              value={homeStore.searchInput}
              onChange={(e) => homeStore.setSearchInput(e.target.value)}
            />
            <SearchButton type="submit">
              <FaSearch className="search-icon" />
            </SearchButton>
          </SearchInputContainer>
          {homeStore.isLoading ? (
            <Loader>
              {" "}
              <BeatLoader />{" "}
            </Loader>
          ) : homeStore.filteredList.length === 0 ? (
            novideosView()
          ) : (
            videosView()
          )}
        </HomeContainer1>
      </HomeSuccessContainer>
    );
  }

  function handleClick(id: string) {
    navigate(`viewItemDetails/${id}`);
  }

  return (
    <>
      <Flex>
        <Sidebar />
        {homeStore.showSuccessView ? successView() : <FailureView />}
      </Flex>
    </>
  );
});

export default Home;
