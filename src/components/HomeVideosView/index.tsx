import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { ReactElement } from "react";

import { HomeGridContainer } from "./styledComponents";

import homeStore from "../../stores/HomeStore";
import VideoCard from "../VideoCard";

const VideosView = observer((): ReactElement => {
  const navigate = useNavigate();

  function handleClick(id: string): void {
    navigate(`viewItemDetails/${id}`);
  }

  return (
    <HomeGridContainer>
      {homeStore.filteredList.map((each) => (
        <VideoCard
          key={each.id}
          videoDetails={each}
          handleClick={handleClick}
        />
      ))}
    </HomeGridContainer>
  );
});

export default VideosView;
