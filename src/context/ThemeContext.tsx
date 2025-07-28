import { createContext, useState } from "react";
import { VideoItem } from "../components/ViewItemDetails/ItemStore";

type SavedVideosContextType = [
  VideoItem[],
  (video: VideoItem) => void,
  (video: VideoItem) => void
];

const ThemeContext = createContext <SavedVideosContextType | undefined>(undefined);
const SavedVideosProvider = ({ children }) => {
  const [savedVideos, setSavedVideos] = useState<VideoItem[]>([]);

  const save = (data: VideoItem ) => {
    const updated = [...savedVideos, data];
    setSavedVideos(updated);
  };

  const unsave = (data: VideoItem) => {
    const updated = savedVideos.filter((each) => each.id !== data.id);
    setSavedVideos(updated);
  };

  return (
    <ThemeContext.Provider value={[savedVideos, save, unsave]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, SavedVideosProvider, type VideoItem };
