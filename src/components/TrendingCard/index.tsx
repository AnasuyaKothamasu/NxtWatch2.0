import {
  TrendingCardd,
  TrendCardThumbnail,
  TrendingTextContainer,
  TxtDivTrend,
  TrendingChannelProfile,
  TrendingCardTitle,
  TrendingChannelName,
} from "./StyledComponents";

interface TrendVideoProps {
    trendDetails: {
        id: string;
        channelName: string;
        channelProfile: string;
        publishedAt: string;
        title: string;
        views: string;
        thumbnail: string;
    }
    clickTrendVideo: (id: string) => void;
}

const TrendingCard: React.FunctionComponent<TrendVideoProps> = ({ trendDetails, clickTrendVideo }) => {
  const {
    id,
    channelName,
    channelProfile,
    publishedAt,
    title,
    views,
    thumbnail,
  } = trendDetails;
  return (
    <TrendingCardd onClick={() => clickTrendVideo(id)}>
      <TrendCardThumbnail src={thumbnail} />
      <TrendingTextContainer>
        <TrendingChannelProfile src={channelProfile} />
        <TxtDivTrend>
          <TrendingCardTitle>{title}</TrendingCardTitle>
          <TrendingChannelName>{channelName}</TrendingChannelName>
          <TrendingChannelName>
            {views} Views • {publishedAt}
          </TrendingChannelName>
        </TxtDivTrend>
      </TrendingTextContainer>
    </TrendingCardd>
  );
};

export default TrendingCard;
