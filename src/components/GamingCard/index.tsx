import { ReactNode } from "react";

import {
  GamingCardComponent,
  GamingCardTitle,
  GamingCardThumbnail,
  GamingCardViews,
} from "./StyledComponents";

import { gameDetails } from "../../types/types";

interface GamingCardProps {
  gameDetails: gameDetails;
  clickGameVideo: (id: string) => void;
}

const GamingCard: React.FunctionComponent<GamingCardProps> = ({
  gameDetails,
  clickGameVideo,
}): ReactNode => {
  const { title, id, thumbnail, views } = gameDetails;

  return (
    <GamingCardComponent onClick={() => clickGameVideo(id)}>
      <GamingCardThumbnail src={thumbnail} />
      <GamingCardTitle>{title}</GamingCardTitle>
      <GamingCardViews>{views} Watching Worldwide</GamingCardViews>
    </GamingCardComponent>
  );
};

export default GamingCard;
