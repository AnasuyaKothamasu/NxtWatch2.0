import { AppTheme } from "../types/types";

const LightTheme: AppTheme = {
  isLight: true,
  primaryBgColor: "white",
  secondaryBgColor: "rgba(247, 246, 246, 0.904)",
  logoUrl:
    "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",
  inactiveDivBgColor: "transparent",
  activeDivBgColor: "rgba(225,233,240,255)",
  inactiveIconColor: "rgb(83, 82, 82)",
  activeIconColor: "#ff031c",
  txtColor: "black",
  descriptionColor: "rgb(88, 88, 88)",
  hoverBgColor: "rgb(226, 229, 231)",
  failureViewImg:
    "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png",
  notFoundImage:
    "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png",
  headingContainerBgColor: "rgba(241, 241, 241, 255)",
  iconContainerBgColor: "rgba(225, 233, 240, 255)",
  trendingCardTitle: "rgb(122, 120, 120)",
  gamingViews: "rgb(150, 147, 147)",
  labelColor: "rgb(129, 129, 129)",
  inputBorder: "solid 1px rgb(148, 146, 146)",
  logoutColor: "rgb(18, 106, 221)",
  logoutBorder: "solid 1px rgb(18, 106, 221)",
  popClassName: "light-mode",
  smallDeviceLogout: "sm-dev-logout-light",
  crossBtnClassName: "cross-pop-light",
  hamClassName: "sm-dev-ham-light",
  themeIcon: "themeIcon-light",
};

const DarkTheme: AppTheme = {
  isLight: false,
  primaryBgColor: "rgb(37, 37, 37)",
  secondaryBgColor: "black",
  logoUrl:
    "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png",
  inactiveDivBgColor: "transparent",
  activeDivBgColor: "rgb(56, 56, 56)",
  inactiveIconColor: "gray",
  activeIconColor: "#ff031c",
  txtColor: "white",
  descriptionColor: "rgb(173, 171, 171)",
  hoverBgColor: "rgb(31, 30, 30)",
  failureViewImg:
    "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png",
  notFoundImage:
    "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png",
  headingContainerBgColor: "rgba(24, 24, 24, 255)",
  iconContainerBgColor: "rgba(15, 15, 15, 255)",
  trendingCardTitle: "white",
  gamingViews: "#aeb6c0",
  labelColor: "rgb(240, 236, 236)",
  inputBorder: "solid 1px gray",
  logoutColor: "rgb(249, 251, 253)",
  logoutBorder: "solid 1px rgb(248, 249, 250)",
  popClassName: "dark-mode",
  smallDeviceLogout: "sm-dev-logout-dark",
  crossBtnClassName: "cross-pop-dark",
  hamClassName: "sm-dev-ham-dark",
  themeIcon: "themeIcon-dark",
};

export default { LightTheme, DarkTheme };
