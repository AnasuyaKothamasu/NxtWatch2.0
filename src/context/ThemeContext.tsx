import { createContext, ReactElement, useState } from "react";

import VideoItemModel from "../stores/models/VideoItemModel";

type SavedVideosContextType = [
  VideoItemModel[],
  (video: VideoItemModel) => void,
  (video: VideoItemModel) => void
];

const ThemeContext = createContext<SavedVideosContextType | undefined>(
  undefined
);
const SavedVideosProvider = ({ children }): ReactElement => {
  const [savedVideos, setSavedVideos] = useState<VideoItemModel[]>([]);

  const save = (data: VideoItemModel) => {
    const updated = [...savedVideos, data];
    setSavedVideos(updated);
  };

  const unsave = (data: VideoItemModel) => {
    const updated = savedVideos.filter((each) => each.id !== data.id);
    setSavedVideos(updated);
  };

  return (
    <ThemeContext.Provider value={[savedVideos, save, unsave]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, SavedVideosProvider, type VideoItemModel };
