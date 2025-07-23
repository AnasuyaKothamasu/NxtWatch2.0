import { createContext, useState } from "react";

interface VideoDetails {
  id: string;
  title: string;
  channelName: string;
  channelProfile: string;
  subscribers: string;
  descp: string;
  thumbnail: string;
  publishedAt: string;
  video: string;
  views: string;
}

type SavedVideosContextType = [
  VideoDetails[],
  (video: VideoDetails) => void,
  (video: VideoDetails) => void
];

const ThemeContext = createContext <SavedVideosContextType | undefined>(undefined);
const SavedVideosProvider = ({ children }) => {
  const [savedVideos, setSavedVideos] = useState<VideoDetails[]>([]);

  const save = (data: VideoDetails) => {
    const updated = [...savedVideos, data];
    setSavedVideos(updated);
  };

  const unsave = (data: VideoDetails) => {
    const updated = savedVideos.filter((each) => each.id !== data.id);
    setSavedVideos(updated);
  };

  return (
    <ThemeContext.Provider value={[savedVideos, save, unsave]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, SavedVideosProvider, type VideoDetails };
