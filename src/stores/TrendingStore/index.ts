import { makeObservable, observable, action } from "mobx";
import Cookies from "js-cookie";

import TrendingVideo from "../models/TrendingCardModel";

class TrendStore {
  showSuccessView = true;
  trendingVideos: TrendingVideo[] = [];
  isLoading = true;

  constructor() {
    makeObservable(this, {
      showSuccessView: observable,
      trendingVideos: observable,
      isLoading: observable,
      fetchVideos: action,
    });
  }

  async fetchVideos() {
    const jwtToken = Cookies.get("jwt_token");
    const url = "https://apis.ccbp.in/videos/trending";
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
            new TrendingVideo(
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
        this.trendingVideos = formattedData;
        this.showSuccessView = true;
      } else {
        this.showSuccessView = false;
      }
    } catch {
      this.showSuccessView = false;
    }
  }
}

const trendStore = new TrendStore();
export default trendStore;
