import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import VideoCard from "../VideoCard";
import { BeatLoader } from "react-spinners";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../Sidebar";
import PremiumCard from "../PremiumCard";
import FailureView from "../FailureView";
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

interface VideoItem {
  channelName: string;
  channelProfile: string;
  id: string;
  publishedAt: string;
  thumbnailUrl: string;
  title: string;
  views: string;
}

const Home: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [videosList, setVideosList] = useState<VideoItem[]>([]);
  const [showPremiumCard, setShowPremiumCard] = useState<boolean>(true);
  const [searchInput, setSearchInput] = useState<string>("");
  const [showSuccessView, setShowSuccessView] = useState<boolean>(true);
  const [filteredList, setFilteredList] = useState<VideoItem[]>([]);

  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    navigate("/login", { replace: true });
  }
  const url = "https://apis.ccbp.in/videos/all?search=";
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, options);
      if (response.ok === true) {
        const data = await response.json();
        const formattedData = data.videos.map((each) => ({
          channelName: each.channel.name,
          channelProfile: each.channel.profile_image_url,
          id: each.id,
          publishedAt: each.published_at,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          views: each.view_count,
        }));
        setIsLoading(false);
        setVideosList(formattedData);
        setFilteredList(formattedData);
        setShowSuccessView(true);
      } else {
        setShowSuccessView(false);
      }
    }
    fetchData();
  }, []);

  function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    const updated = videosList.filter((each) =>
      each.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredList(updated);
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
        {filteredList.map((each) => (
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
        {showPremiumCard && <PremiumCard removeCard={removeCard} />}
        <HomeContainer1>
          <SearchInputContainer onSubmit={handleSearch}>
            <SearchInput
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <SearchButton type="submit">
              <FaSearch className="search-icon" />
            </SearchButton>
          </SearchInputContainer>
          {isLoading ? (
            <Loader>
              {" "}
              <BeatLoader />{" "}
            </Loader>
          ) : filteredList.length === 0 ? (
            novideosView()
          ) : (
            videosView()
          )}
        </HomeContainer1>
      </HomeSuccessContainer>
    );
  }

  function removeCard() {
    setShowPremiumCard(false);
  }

  function handleClick(id: string) {
    navigate(`viewItemDetails/${id}`);
  }

  return (
    <>
      <Flex>
        <Sidebar />
        {showSuccessView ? successView() : <FailureView />}
      </Flex>
    </>
  );
};

export default Home;
