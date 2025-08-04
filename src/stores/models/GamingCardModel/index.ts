import { makeObservable, observable } from "mobx";

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

export default GamingVideo