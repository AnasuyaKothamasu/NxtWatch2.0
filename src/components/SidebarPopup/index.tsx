import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate, useLocation } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { TiHome } from "react-icons/ti";
import { ImFire } from "react-icons/im";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useTheme } from "styled-components";
import "./index.css";
import {
  CrossBtnPop,
  HamButton,
  SidePopContainer,
  SidePopInnerDiv,
  Icon,
  SidebarTxt,
} from "./StyledComponents";
import React from "react";

const SidebarPopup: React.FC = () => {
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
                      navigate("/");
                    }}
                    active={isActive("/")}
                  >
                    <Icon active={isActive("/")}>
                      <TiHome />
                    </Icon>
                    <SidebarTxt active={isActive("/")}>Home</SidebarTxt>
                  </SidePopInnerDiv>

                  <SidePopInnerDiv
                    onClick={() => {
                      close();
                      navigate("/trending");
                    }}
                    active={isActive("/trending")}
                  >
                    <Icon active={isActive("/trending")}>
                      <ImFire />
                    </Icon>
                    <SidebarTxt active={isActive("/trending")}>
                      Trending
                    </SidebarTxt>
                  </SidePopInnerDiv>

                  <SidePopInnerDiv
                    onClick={() => {
                      close();
                      navigate("/gaming");
                    }}
                    active={isActive("/gaming")}
                  >
                    <Icon active={isActive("/gaming")}>
                      <SiYoutubegaming />
                    </Icon>
                    <SidebarTxt active={isActive("/gaming")}>Gaming</SidebarTxt>
                  </SidePopInnerDiv>

                  <SidePopInnerDiv
                    onClick={() => {
                      close();
                      navigate("/savedVideos");
                    }}
                    active={isActive("/savedVideos")}
                  >
                    <Icon active={isActive("/savedVideos")}>
                      <MdOutlinePlaylistAdd />
                    </Icon>
                    <SidebarTxt active={isActive("/savedVideos")}>
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
