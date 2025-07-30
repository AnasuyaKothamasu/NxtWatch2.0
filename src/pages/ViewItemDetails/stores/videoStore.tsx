import { makeObservable, observable } from "mobx";

export class VideoItemStore {
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

export default VideoItemStore