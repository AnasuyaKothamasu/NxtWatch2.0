import { makeObservable, observable } from "mobx";

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

export default TrendingVideo