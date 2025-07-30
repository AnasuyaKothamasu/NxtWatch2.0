import { ReactNode } from "react";

import {
  NoSavedContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedDescription,
} from "../styledComponents";

const NoSavedVideosView = ():ReactNode => {
  return (
    <>
      <NoSavedContainer>
        <NoSavedImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" />
        <NoSavedHeading>No saved videos found</NoSavedHeading>
        <NoSavedDescription>
          You can save your videos while watching them.
        </NoSavedDescription>
      </NoSavedContainer>
    </>
  );
};

export default NoSavedVideosView;
