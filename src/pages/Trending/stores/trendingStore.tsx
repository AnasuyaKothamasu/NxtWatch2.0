import { makeObservable, observable, action, runInAction } from "mobx";
import Cookies from "js-cookie";

class TrendingVideo {
  channelName: string;
  channelProfile: string;
  id: string;
  publishedAt: string;
  thumbnail: string;
  title: string;
  views: string;

  constructor(
    channelName: string,
    channelProfile: string,
    id: string,
    publishedAt: string,
    thumbnail: string,
    title: string,
    views: string
  ) {
    this.channelName = channelName;
    this.channelProfile = channelProfile;
    this.id = id;
    this.publishedAt = publishedAt;
    this.thumbnail = thumbnail;
    this.title = title;
    this.views = views;

    makeObservable(this, {
      channelName: observable,
      channelProfile: observable,
      id: observable,
      publishedAt: observable,
      thumbnail: observable,
      title: observable,
      views: observable,
    });
  }
}

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
        runInAction(() => {
          this.isLoading = false;
          this.trendingVideos = formattedData;
          this.showSuccessView = true;
        });
      } else {
        runInAction(() => {
          this.showSuccessView = false;
        });
      }
    } catch {
      runInAction(() => {
        this.showSuccessView = false;
      });
    }
  }
}

const trendStore = new TrendStore();
export default trendStore;
