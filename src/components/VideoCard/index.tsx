import {
  VideoCardContainer,
  VideoThumbnail,
  VideoCardFlexConatiner,
  VideoCardChannelProfile,
  TextContainerVideo,
  VideoTitle,
  VideoChannelName,
  VideoDescp,
} from "./StyledComponents";

interface VideoProps {
    videoDetails: {
        channelName: string;
        channelProfile: string;
        id: string;
        publishedAt: string;
        thumbnailUrl: string;
        title: string;
        views: string;
    }
    handleClick: (id: string) => void
}

const VideoCard: React.FunctionComponent<VideoProps> = ({ videoDetails, handleClick }) => {
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
            <VideoDescp>
              {views} views • {publishedAt}
            </VideoDescp>
          </TextContainerVideo>
        </VideoCardFlexConatiner>
      </VideoCardContainer>
    </>
  );
};

export default VideoCard;
