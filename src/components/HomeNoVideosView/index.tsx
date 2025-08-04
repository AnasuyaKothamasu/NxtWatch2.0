import { ReactElement } from "react";
import {
  NoVideosContainer,
  NoSearchImage,
  NoSearchHeading,
  NoSearchDescription,
  RetryButton,
} from "./styledComponents";

const NoVideosView = ({ onRetry }):ReactElement => {
  return (
    <>
      <NoVideosContainer>
        <NoSearchImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" />
        <NoSearchHeading>No Search results found</NoSearchHeading>
        <NoSearchDescription>
          Try different keywords or remove search.
        </NoSearchDescription>
        <RetryButton onClick={onRetry}>Retry</RetryButton>
      </NoVideosContainer>
    </>
  );
};

export default NoVideosView;
