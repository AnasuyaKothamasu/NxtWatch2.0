import { useLocation, useNavigate } from "react-router";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { TiHome } from "react-icons/ti";
import { ImFire } from "react-icons/im";
import { ReactElement } from "react";

import {
  SideBarContainer,
  SideBarInnerDiv,
  Icon,
  SidebarTxt,
  SidebarFooter,
  Contact,
  SidebarDescription,
  SocialIcon,
  SocialContainer,
} from "./StyledComponents";

import ROUTES from "../../constants/RouteConstants";

const Sidebar: React.FunctionComponent = (): ReactElement => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return path === location.pathname;
  };

  return (
    <SideBarContainer>
      <div style={{ marginTop: "30px" }}>
        <SideBarInnerDiv
          onClick={() => navigate(ROUTES.HOME)}
          active={isActive(ROUTES.HOME)}
        >
          <Icon active={isActive(ROUTES.HOME)}>
            <TiHome />
          </Icon>
          <SidebarTxt active={isActive(ROUTES.HOME)}>Home</SidebarTxt>
        </SideBarInnerDiv>
        <SideBarInnerDiv
          onClick={() => navigate(ROUTES.TRENDING)}
          active={isActive(ROUTES.TRENDING)}
        >
          <Icon active={isActive(ROUTES.TRENDING)}>
            <ImFire />
          </Icon>
          <SidebarTxt active={isActive(ROUTES.TRENDING)}>Trending</SidebarTxt>
        </SideBarInnerDiv>
        <SideBarInnerDiv
          onClick={() => navigate(ROUTES.GAMING)}
          active={isActive(ROUTES.GAMING)}
        >
          <Icon active={isActive(ROUTES.GAMING)}>
            <SiYoutubegaming />
          </Icon>
          <SidebarTxt active={isActive(ROUTES.GAMING)}>Gaming</SidebarTxt>
        </SideBarInnerDiv>
        <SideBarInnerDiv
          onClick={() => navigate(ROUTES.SAVED)}
          active={isActive(ROUTES.SAVED)}
        >
          <Icon active={isActive(ROUTES.SAVED)}>
            <MdOutlinePlaylistAdd />
          </Icon>
          <SidebarTxt active={isActive(ROUTES.SAVED)}>Saved Videos</SidebarTxt>
        </SideBarInnerDiv>
      </div>
      <SidebarFooter>
        <Contact>CONTACT US</Contact>
        <SocialContainer>
          <SocialIcon src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" />
          <SocialIcon src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" />
          <SocialIcon src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" />
        </SocialContainer>
        <SidebarDescription>
          Enjoy! Now to see your channels and recommendations!
        </SidebarDescription>
      </SidebarFooter>
    </SideBarContainer>
  );
};

export default Sidebar;
