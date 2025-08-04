import { ReactElement } from "react";

import {
  VideoCardContainer,
  VideoThumbnail,
  VideoCardFlexContainer,
  VideoCardChannelProfile,
  TextContainerVideo,
  VideoTitle,
  VideoChannelName,
  VideoDescription,
} from "./StyledComponents";

import { details } from "../../types/types";

interface VideoProps {
  videoDetails: details;
  handleClick: (id: string) => void;
}

const VideoCard: React.FunctionComponent<VideoProps> = ({
  videoDetails,
  handleClick,
}): ReactElement => {
  const {
    channelName,
    channelProfile,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    views,
  } = videoDetails;

  return (
    <>
      <VideoCardContainer onClick={() => handleClick(id)}>
        <VideoThumbnail src={thumbnailUrl} />
        <VideoCardFlexContainer>
          <VideoCardChannelProfile src={channelProfile} />
          <TextContainerVideo>
            <VideoTitle>{title}</VideoTitle>
            <VideoChannelName>{channelName}</VideoChannelName>
            <VideoDescription>
              {views} views • {publishedAt}
            </VideoDescription>
          </TextContainerVideo>
        </VideoCardFlexContainer>
      </VideoCardContainer>
    </>
  );
};

export default VideoCard;
