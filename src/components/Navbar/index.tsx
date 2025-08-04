import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router";
import { FaMoon } from "react-icons/fa";
import "reactjs-popup/dist/index.css";
import { ReactElement } from "react";

import ROUTES from "../../constants/RouteConstants";

import {
  FlexContainer,
  NavbarContainer,
  ThemeIconContainer,
  ProfileImage,
  ProfileImgContainer,
  NavbarLogo,
} from "./StyledComponents";

import SidebarPopup from "../SidebarPopup";
import ReactPopup from "../ReactPopup";

import { AppTheme } from "../../types/types";

interface NavbarProps {
  isLight: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({
  isLight,
  toggleTheme,
}): ReactElement => {
  const navigate = useNavigate();
  const theme = useTheme() as AppTheme;

  return (
    <NavbarContainer>
      <NavbarLogo
        onClick={() => navigate(ROUTES.HOME)}
        src={theme.logoUrl}
        alt="Website Logo"
      />

      <FlexContainer>
        <ThemeIconContainer as="button" onClick={toggleTheme}>
          {isLight ? (
            <FaMoon className={`themeIcon ${theme.themeIcon}`} />
          ) : (
            <IoSunnyOutline className={`themeIcon ${theme.themeIcon}`} />
          )}
        </ThemeIconContainer>

        <ProfileImgContainer>
          <ProfileImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="Profile"
          />
        </ProfileImgContainer>

        <SidebarPopup />
        <ReactPopup />
      </FlexContainer>
    </NavbarContainer>
  );
};

export default Navbar;
