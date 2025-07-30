import { BeatLoader } from "react-spinners";
import { observer } from "mobx-react-lite";
import { FaSearch } from "react-icons/fa";
import { ReactNode } from "react";

import NoVideosView from "./noVideosView";
import VideosView from "./videosView";

import {
  HomeSuccessContainer,
  HomeContainer1,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  Loader,
} from "../styledComponents";

import homeStore from "../stores/homeStore";

import PremiumCard from "../../../components/PremiumCard";

const SuccessView = observer(():ReactNode => {
  function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    homeStore.filterVideos();
  }

  return (
    <HomeSuccessContainer>
      {homeStore.showPremiumCard && (
        <PremiumCard />
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
            <BeatLoader />
          </Loader>
        ) : homeStore.filteredList.length === 0 ? (
          <NoVideosView onRetry={handleSearch} />
        ) : (
          <VideosView />
        )}
      </HomeContainer1>
    </HomeSuccessContainer>
  );
});

export default SuccessView;
