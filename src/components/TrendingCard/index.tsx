import { ReactElement } from "react";

import {
  TrendingCardComponent,
  TrendCardThumbnail,
  TrendingTextContainer,
  TxtDivTrend,
  TrendingChannelProfile,
  TrendingCardTitle,
  ImageDiv,
  TrendingChannelName,
} from "./StyledComponents";

import { trendDetails } from "../../types/types";

interface TrendVideoProps {
  trendDetails: trendDetails;
  clickTrendVideo: (id: string) => void;
}

const TrendingCard: React.FunctionComponent<TrendVideoProps> = ({
  trendDetails,
  clickTrendVideo,
}): ReactElement => {
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
    <TrendingCardComponent onClick={() => clickTrendVideo(id)}>
      <ImageDiv>
        <TrendCardThumbnail src={thumbnail} />
      </ImageDiv>
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
    </TrendingCardComponent>
  );
};

export default TrendingCard;
