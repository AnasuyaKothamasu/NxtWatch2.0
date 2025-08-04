import { action, makeObservable, observable, runInAction } from "mobx";
import Cookies from "js-cookie";

import VideoItem from "../models/VideoCardModel";

class HomeStore {
  isLoading = true;
  videosList: VideoItem[] = [];
  showPremiumCard = true;
  searchInput = "";
  showSuccessView = true;
  filteredList: VideoItem[] = [];

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      videosList: observable,
      showPremiumCard: observable,
      searchInput: observable,
      showSuccessView: observable,
      filteredList: observable,
      setSearchInput: action,
      filterVideos: action,
      removeCard: action,
      fetchVideos: action,
    });
  }

  removeCard() {
    this.showPremiumCard = false;
  }

  setSearchInput(value: string) {
    this.searchInput = value;
  }

  filterVideos() {
    const updated = this.videosList.filter((each) =>
      each.title.toLowerCase().includes(this.searchInput.toLowerCase())
    );
    this.filteredList = updated;
  }

  async fetchVideos() {
    const jwtToken = Cookies.get("jwt_token");
    const url = "https://apis.ccbp.in/videos/all?search=";
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    try {
      const response = await fetch(url, options);
      if (response.ok === true) {
        const data = await response.json();
        const formattedData = data.videos.map(
          (each: any) =>
            new VideoItem(
              each.channel.name,
              each.channel.profile_image_url,
              each.id,
              each.published_at,
              each.thumbnail_url,
              each.title,
              each.view_count
            )
        );
          this.isLoading = false;
          this.videosList = formattedData;
          this.filteredList = formattedData;
          this.showSuccessView = true;
      } else {
          this.showSuccessView = false;
      }
    } catch {
        this.showSuccessView = false;
    }
  }
}

const homeStore = new HomeStore();
export default homeStore;
