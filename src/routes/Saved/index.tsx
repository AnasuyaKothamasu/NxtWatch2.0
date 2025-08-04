import { useContext, ReactElement } from "react";

import { SavedFlexContainer } from "./styledComponents";

import NoSavedVideosView from "../../components/NoSavedVideosView";
import SavedVideosView from "../../components/SavedVideosView";

import { ThemeContext } from "../../context/ThemeContext";
import Sidebar from "../../components/Sidebar";

const Saved: React.FunctionComponent = (): ReactElement => {
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
