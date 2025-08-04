import { makeObservable, observable, action, runInAction } from "mobx";
import Cookies from "js-cookie";

import VideoItemModel from "../models/VideoItemModel";

class ItemStore {
  showSuccessView = true;
  det: VideoItemModel = {
    channelName: "",
    channelProfile: "",
    subscriberCount: "",
    description: "",
    id: "",
    thumbnail: "",
    title: "",
    publishedAt: "",
    videoUrl: "",
    views: "",
  };
  isLiked = false;
  isDisliked = false;
  isLoading: boolean = true;

  constructor() {
    makeObservable(this, {
      showSuccessView: observable,
      isLiked: observable,
      isDisliked: observable,
      isLoading: observable,
      setIsLiked: action,
      setIsDisliked: action,
      fetchVideo: action,
    });
  }

  setIsLiked(value: boolean) {
    this.isLiked = value;
  }

  setIsDisliked(value: boolean) {
    this.isDisliked = value;
  }

  async fetchVideo(id: string) {
    this.isLoading = true;
    const jwtToken = Cookies.get("jwt_token");
    const url = `https://apis.ccbp.in/videos/${id}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        const vd = data.video_details;
        const formattedData = new VideoItemModel(
          vd.channel.name,
          vd.channel.profile_image_url,
          vd.channel.subscriber_count,
          vd.description,
          vd.id,
          vd.thumbnail_url,
          vd.title,
          vd.published_at,
          vd.video_url,
          vd.view_count
        );
          this.isLoading = false;
          this.det = formattedData;
          this.showSuccessView = true;
      } else {
          this.isLoading = false;
          this.showSuccessView = false;
      }
    } catch {
        this.isLoading = false;
        this.showSuccessView = false;
    }
  }
}

const itemStore = new ItemStore();
export default itemStore;
