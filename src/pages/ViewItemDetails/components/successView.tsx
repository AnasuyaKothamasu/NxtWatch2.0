import { MdOutlinePlaylistAdd } from "react-icons/md";
import { BiLike, BiDislike } from "react-icons/bi";
import { useState, useContext, ReactNode } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";

import {
  ItemDetailsContainer,
  TextContainer,
  VideoIframe,
  VideoItemTitle,
  StatsContainer,
  ViewsAndPublished,
  ActionButtonsContainer,
  LikeButtonDiv,
  DividerLine,
  ChannelDetailsContainer,
  ChannelProfileImage,
  ChannelTextContainer,
  ChannelName,
  SubscribersText,
  DescriptionText,
} from "../styledComponents";

import itemStore from "../stores/itemStore";

import { ThemeContext } from "../../../context/ThemeContext";

const SuccessView = observer(():ReactNode => {
  const context = useContext(ThemeContext);
  const { id } = useParams();

  if (!context) {
    throw new Error("ThemeContext must be used with a savedVideosProvider");
  }

  const [savedVideos, save, unsave] = context;
  const vid = savedVideos.some((video: any) => video.id === id);
  const [isSaved, setIsSaved] = useState<boolean>(!vid ? false : true);

  const handleLike = ():void => {
    const newLike = !itemStore.isLiked;
    itemStore.setIsLiked(newLike);
    if (newLike) itemStore.setIsDisliked(false);
  };

  const handleDislike = ():void => {
    const newDislike = !itemStore.isDisliked;
    itemStore.setIsDisliked(newDislike);
    if (newDislike) itemStore.setIsLiked(false);
  };

  function handleSave():boolean | undefined {
    if (!itemStore.det) return;
    setIsSaved((prev) => {
      const newSavedState = !prev;
      if (newSavedState) {
        save(itemStore.det);
      } else {
        unsave(itemStore.det);
      }
      return newSavedState;
    });
  }

  return (
    <ItemDetailsContainer>
      <VideoIframe
        src={itemStore.det.videoUrl?.replace("watch?v=", "embed/")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <TextContainer>
        <VideoItemTitle>{itemStore.det.title}</VideoItemTitle>
        <StatsContainer>
          <ViewsAndPublished>
            {itemStore.det.views} views • {itemStore.det.publishedAt}
          </ViewsAndPublished>
          <ActionButtonsContainer>
            <LikeButtonDiv isActive={itemStore.isLiked} onClick={handleLike}>
              <BiLike style={{ marginRight: "5px" }} />
              <p>Like</p>
            </LikeButtonDiv>
            <LikeButtonDiv
              isActive={itemStore.isDisliked}
              onClick={handleDislike}
            >
              <BiDislike style={{ marginRight: "5px" }} />
              <p>Dislike</p>
            </LikeButtonDiv>
            <LikeButtonDiv isActive={isSaved} onClick={handleSave}>
              <MdOutlinePlaylistAdd style={{ marginRight: "5px" }} />
              <p>{isSaved ? "Saved" : "Save"}</p>
            </LikeButtonDiv>
          </ActionButtonsContainer>
        </StatsContainer>
        <DividerLine />
        <ChannelDetailsContainer>
          <ChannelProfileImage src={itemStore.det.channelProfile} />
          <ChannelTextContainer>
            <ChannelName>{itemStore.det.channelName}</ChannelName>
            <SubscribersText>
              {itemStore.det.subscriberCount} subscribers
            </SubscribersText>
            <DescriptionText>{itemStore.det.description}</DescriptionText>
          </ChannelTextContainer>
        </ChannelDetailsContainer>
      </TextContainer>
    </ItemDetailsContainer>
  );
});

export default SuccessView;
