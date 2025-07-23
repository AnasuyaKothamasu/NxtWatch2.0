  import {
    GamingCardd,
    GamingCardTitle,
    GamingCardThumbnail,
    GamingCardViews,
  } from "./StyledComponents";

  interface GamingCardProps {
    gameDetails: {
        title: string;
        id: string;
        thumbnail: string;
        views: string;
    }
    clickGameVideo: (id: string) => void;
  }

  const GamingCard: React.FunctionComponent<GamingCardProps> = ({gameDetails, clickGameVideo}) => {
    const { title, id, thumbnail, views } = gameDetails;

    return (
      <GamingCardd onClick={() => clickGameVideo(id)}>
        <GamingCardThumbnail src={thumbnail} />
        <GamingCardTitle>{title}</GamingCardTitle>
        <GamingCardViews>{views} Watching Worldwide</GamingCardViews>
      </GamingCardd>
    );
  };

  export default GamingCard;
