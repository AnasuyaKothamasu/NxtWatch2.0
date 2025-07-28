import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Cookies from "js-cookie";
import Sidebar from "../Sidebar";
import { ThemeContext } from "../../context/ThemeContext";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import FailureView from "../FailureView";
import {
  VideoItemFlexContainer,
  ItemDetailsContainer,
  VideoIframe,
  VideoItemTitle,
  ChannelDetailsContainer,
  ChannelProfileImage,
  ChannelTextContainer,
  ChannelName,
  SubscribersText,
  DescriptionText,
  DividerLine,
  TextContainer,
  ActionButtonsContainer,
  StatsContainer,
  LikeButtonDiv,
  ViewsAndPublished,
} from "./StyledComponents";

import itemStore from "./ItemStore";
import { observer } from "mobx-react-lite";



const ViewItemDetails: React.FC = observer(() => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeContext must be used with a savedVideosProvider")
  }
  const [savedVideos, save, unsave] = context
  const { id } = useParams();
  const navigate = useNavigate();

  const vid = savedVideos.some((video: any) => video.id === id);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const jwtToken = Cookies.get("jwt_token");

  useEffect(() => {
    if (!jwtToken) {
      navigate("/login", { replace: true });
    }
  }, [jwtToken, navigate]);

  const handleLike = () => {
  const newLike = !itemStore.isLiked;
  itemStore.setIsLiked(newLike);
  if (newLike) itemStore.setIsUnliked(false);
};

const handleDislike = () => {
  const newDislike = !itemStore.isUnliked;
  itemStore.setIsUnliked(newDislike);
  if (newDislike) itemStore.setIsLiked(false);
};

  function handleSave() {
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

  useEffect(() => {
    if (!id){
      return
    }else{
      itemStore.fetchVideo(id)
    }
  }, [id, savedVideos]);

  function successView() {
    if (!itemStore.det) return null;

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
              <LikeButtonDiv isActive={itemStore.isUnliked} onClick={handleDislike}>
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
              <SubscribersText>{itemStore.det.subscriberCount} subscribers</SubscribersText>
              <DescriptionText>{itemStore.det.description}</DescriptionText>
            </ChannelTextContainer>
          </ChannelDetailsContainer>
        </TextContainer>
      </ItemDetailsContainer>
    );
  }

  return (
    <VideoItemFlexContainer>
      <Sidebar />
      {itemStore.showSuccessView ? successView() : <FailureView />}
    </VideoItemFlexContainer>
  );
});

export default ViewItemDetails;
