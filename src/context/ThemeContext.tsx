import { createContext, ReactNode, useState } from "react";

import VideoItemStore from "../pages/ViewItemDetails/stores/videoStore";

type SavedVideosContextType = [
  VideoItemStore[],
  (video: VideoItemStore) => void,
  (video: VideoItemStore) => void
];

const ThemeContext = createContext <SavedVideosContextType | undefined>(undefined);
const SavedVideosProvider = ({ children }):ReactNode => {
  const [savedVideos, setSavedVideos] = useState<VideoItemStore[]>([]);

  const save = (data: VideoItemStore ) => {
    const updated = [...savedVideos, data];
    setSavedVideos(updated);
  };

  const unsave = (data: VideoItemStore) => {
    const updated = savedVideos.filter((each) => each.id !== data.id);
    setSavedVideos(updated);
  };

  return (
    <ThemeContext.Provider value={[savedVideos, save, unsave]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, SavedVideosProvider, type VideoItemStore };
