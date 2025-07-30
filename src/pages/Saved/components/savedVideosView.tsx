import { MdPlaylistAdd } from "react-icons/md";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ReactNode } from "react";

import {
  SavedContainer,
  HeadingContainer,
  HeadingIconContainer,
  Heading,
  SavedVideosContainer,
  SavedCard,
  SavedVideoThumbnail,
  TextDivSaved,
  SavedTitle,
  TrendingChannelName,
} from "../styledComponents";

import { ThemeContext } from "../../../context/ThemeContext";

const SavedVideosView = ():ReactNode => {
  const context = useContext(ThemeContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("ThemeContext must be used inside a SavedVideosProvider");
  }
  const [savedVideos] = context;

  function clickSavedVideo(id: string):void {
    navigate(`/viewItemDetails/${id}`);
  }

  return (
    <SavedContainer>
      <HeadingContainer>
        <HeadingIconContainer>
          <MdPlaylistAdd className="icon" />
        </HeadingIconContainer>
        <Heading>Saved</Heading>
      </HeadingContainer>
      <SavedVideosContainer>
        {savedVideos.map((each) => {
          return (
            <SavedCard key={each.id} onClick={() => clickSavedVideo(each.id)}>
              <SavedVideoThumbnail src={each.thumbnail} />
              <TextDivSaved>
                <SavedTitle>{each.title}</SavedTitle>
                <TrendingChannelName>{each.channelName}</TrendingChannelName>
                <TrendingChannelName>
                  {each.views} Views • {each.publishedAt}
                </TrendingChannelName>
              </TextDivSaved>
            </SavedCard>
          );
        })}
      </SavedVideosContainer>
    </SavedContainer>
  );
};

export default SavedVideosView;
