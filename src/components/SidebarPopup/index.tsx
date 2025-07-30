import { useNavigate, useLocation } from "react-router";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { TiHome } from "react-icons/ti";
import { ImFire } from "react-icons/im";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import { ReactNode } from "react";

import "./index.css";

import {
  CrossBtnPop,
  HamButton,
  SidePopContainer,
  SidePopInnerDiv,
  Icon,
  SidebarTxt,
} from "./StyledComponents";

import ROUTES from "../../routes/route";

const SidebarPopup: React.FC = ():ReactNode => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const isActive = (path: string): boolean => path === location.pathname;

  return (
    <div>
      <Popup
        modal
        contentStyle={{ padding: 0, border: "none", margin: 0 }}
        className={`menu ${theme.popClassName}`}
        trigger={
          <HamButton type="button">
            <GiHamburgerMenu
              className={`ham-btn-sm-dev ${theme.hamClassName}`}
            />
          </HamButton>
        }
      >
        {
          ((close: () => void) => (
            <>
              <CrossBtnPop type="button" onClick={() => close()}>
                <RxCross2 className={`cross-btn ${theme.crossBtnClassName}`} />
              </CrossBtnPop>
              <SidePopContainer>
                <div style={{ marginTop: "30px" }}>
                  <SidePopInnerDiv
                    onClick={() => {
                      close();
                      navigate(ROUTES.HOME);
                    }}
                    active={isActive(ROUTES.HOME)}
                  >
                    <Icon active={isActive(ROUTES.HOME)}>
                      <TiHome />
                    </Icon>
                    <SidebarTxt active={isActive(ROUTES.HOME)}>Home</SidebarTxt>
                  </SidePopInnerDiv>

                  <SidePopInnerDiv
                    onClick={() => {
                      close();
                      navigate(ROUTES.TRENDING);
                    }}
                    active={isActive(ROUTES.TRENDING)}
                  >
                    <Icon active={isActive(ROUTES.TRENDING)}>
                      <ImFire />
                    </Icon>
                    <SidebarTxt active={isActive(ROUTES.TRENDING)}>
                      Trending
                    </SidebarTxt>
                  </SidePopInnerDiv>

                  <SidePopInnerDiv
                    onClick={() => {
                      close();
                      navigate(ROUTES.GAMING);
                    }}
                    active={isActive(ROUTES.GAMING)}
                  >
                    <Icon active={isActive(ROUTES.GAMING)}>
                      <SiYoutubegaming />
                    </Icon>
                    <SidebarTxt active={isActive(ROUTES.GAMING)}>
                      Gaming
                    </SidebarTxt>
                  </SidePopInnerDiv>

                  <SidePopInnerDiv
                    onClick={() => {
                      close();
                      navigate(ROUTES.SAVED);
                    }}
                    active={isActive(ROUTES.SAVED)}
                  >
                    <Icon active={isActive(ROUTES.SAVED)}>
                      <MdOutlinePlaylistAdd />
                    </Icon>
                    <SidebarTxt active={isActive(ROUTES.SAVED)}>
                      Saved Videos
                    </SidebarTxt>
                  </SidePopInnerDiv>
                </div>
              </SidePopContainer>
            </>
          )) as unknown as React.ReactNode
        }
      </Popup>
    </div>
  );
};

export default SidebarPopup;
