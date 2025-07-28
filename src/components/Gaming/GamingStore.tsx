import { makeObservable, observable, action, runInAction } from "mobx";
import Cookies from "js-cookie";

class GamingVideo {
  id: string;
  thumbnail: string;
  title: string;
  views: string;

  constructor(id: string, thumbnail: string, title: string, views: string) {
    this.id = id;
    this.thumbnail = thumbnail;
    this.title = title;
    this.views = views;

    makeObservable(this, {
      id: observable,
      thumbnail: observable,
      title: observable,
      views: observable,
    });
  }
}

class GameStore {
  showSuccessView = true;
  gamingVideos: GamingVideo[] = [];
  isLoading = true;

  constructor() {
    makeObservable(this, {
      showSuccessView: observable,
      gamingVideos: observable,
      isLoading: observable,
      fetchVideos: action,
    });
  }

  async fetchVideos() {
    const jwtToken = Cookies.get("jwt_token");
    const url = "https://apis.ccbp.in/videos/gaming";
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
            new GamingVideo(
              each.id,
              each.thumbnail_url,
              each.title,
              each.view_count
            )
        );
        runInAction(() => {
          this.isLoading = false;
          this.gamingVideos = formattedData;
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

const gameStore = new GameStore();
export default gameStore;
