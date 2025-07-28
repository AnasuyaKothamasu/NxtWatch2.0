import { makeObservable, observable, action, runInAction } from "mobx";
import Cookies from "js-cookie";

export class VideoItem {
  channelName: string;
  channelProfile: string;
  subscriberCount: string;
  description: string;
  id: string;
  thumbnail: string;
  title: string;
  publishedAt: string;
  videoUrl: string;
  views: string;

  constructor(
    channelName: string,
    channelProfile: string,
    subscriberCount: string,
    description: string,
    id: string,
    thumbnail: string,
    title: string,
    publishedAt: string,
    videoUrl: string,
    views: string
  ) {
    this.channelName = channelName;
    this.channelProfile = channelProfile;
    this.subscriberCount = subscriberCount;
    this.description = description;
    this.id = id;
    this.thumbnail = thumbnail;
    this.title = title;
    this.publishedAt = publishedAt;
    this.videoUrl = videoUrl;
    this.views = views;

    makeObservable(this, {
      channelName: observable,
      channelProfile: observable,
      subscriberCount: observable,
      description: observable,
      id: observable,
      thumbnail: observable,
      title: observable,
      publishedAt: observable,
      videoUrl: observable,
      views: observable,
    });
  }
}

class ItemStore {
  showSuccessView = true;
  det: VideoItem ;
  isLiked = false;
  isUnliked = false;

  constructor() {
    makeObservable(this, {
      showSuccessView: observable,
      isLiked: observable,
      isUnliked: observable,
      setIsLiked: action,
      setIsUnliked: action,
      fetchVideo: action,
    });
  }

  setIsLiked(value: boolean) {
    this.isLiked = value
  }

  setIsUnliked(value: boolean) {
    this.isUnliked = value
  }

  async fetchVideo(id: string) {
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
        const formattedData = new VideoItem(
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
        runInAction(() => {
          this.det = formattedData;
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

const itemStore = new ItemStore();
export default itemStore;
