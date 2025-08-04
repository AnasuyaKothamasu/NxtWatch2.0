import { makeObservable, observable } from "mobx";

class VideoItem {
  channelName: string;
  channelProfile: string;
  id: string;
  publishedAt: string;
  thumbnailUrl: string;
  title: string;
  views: string;

  constructor(
    channelName: string,
    channelProfile: string,
    id: string,
    publishedAt: string,
    thumbnailUrl: string,
    title: string,
    views: string
  ) {
    this.channelName = channelName;
    this.channelProfile = channelProfile;
    this.id = id;
    this.publishedAt = publishedAt;
    this.thumbnailUrl = thumbnailUrl;
    this.title = title;
    this.views = views;

    makeObservable(this, {
      channelName: observable,
      channelProfile: observable,
      id: observable,
      publishedAt: observable,
      thumbnailUrl: observable,
      title: observable,
      views: observable,
    });
  }
}

export default VideoItem;
