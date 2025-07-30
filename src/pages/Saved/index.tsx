import { useContext, ReactNode } from "react";

import { SavedFlexContainer } from "./styledComponents";

import NoSavedVideosView from "./components/noSavedVideosView";
import SavedVideosView from "./components/savedVideosView";

import { ThemeContext } from "../../context/ThemeContext";
import Sidebar from "../../components/Sidebar";

const Saved: React.FunctionComponent = ():ReactNode => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeContext must be used inside a SavedVideosProvider");
  }
  const [savedVideos] = context;

  return (
    <>
      <SavedFlexContainer>
        <Sidebar />
        {savedVideos.length !== 0 ? <SavedVideosView /> : <NoSavedVideosView />}
      </SavedFlexContainer>
    </>
  );
};

export default Saved;
