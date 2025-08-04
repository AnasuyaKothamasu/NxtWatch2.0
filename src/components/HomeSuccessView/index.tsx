import { BeatLoader } from "react-spinners";
import { observer } from "mobx-react-lite";
import { FaSearch } from "react-icons/fa";
import { ReactElement } from "react";

import NoVideosView from "../HomeNoVideosView";
import VideosView from "../HomeVideosView";

import {
  HomeSuccessContainer,
  HomeContainer1,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  Loader,
} from "./styledComponents";

import homeStore from "../../stores/HomeStore";

import PremiumCard from "../PremiumCard";

const SuccessView = observer((): ReactElement => {
  function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    homeStore.filterVideos();
  }

  return (
    <HomeSuccessContainer>
      {homeStore.showPremiumCard && <PremiumCard />}
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
