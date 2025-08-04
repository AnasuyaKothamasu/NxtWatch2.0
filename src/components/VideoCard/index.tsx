import { ReactElement } from "react";

import {
  VideoCardContainer,
  VideoThumbnail,
  VideoCardFlexConatiner,
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
        <VideoCardFlexConatiner>
          <VideoCardChannelProfile src={channelProfile} />
          <TextContainerVideo>
            <VideoTitle>{title}</VideoTitle>
            <VideoChannelName>{channelName}</VideoChannelName>
            <VideoDescription>
              {views} views • {publishedAt}
            </VideoDescription>
          </TextContainerVideo>
        </VideoCardFlexConatiner>
      </VideoCardContainer>
    </>
  );
};

export default VideoCard;
