export type details = {
  channelName: string;
  channelProfile: string;
  id: string;
  publishedAt: string;
  thumbnailUrl: string;
  title: string;
  views: string;
};

export type trendDetails = {
  id: string;
  channelName: string;
  channelProfile: string;
  publishedAt: string;
  title: string;
  views: string;
  thumbnail: string;
};

export type gameDetails = {
  title: string;
  id: string;
  thumbnail: string;
  views: string;
};


export interface AppTheme {
  isLight: boolean;
  primaryBgColor: string;
  secondaryBgColor: string;
  logoUrl: string;
  inactiveDivBgColor: string;
  activeDivBgColor: string;
  inactiveIconColor: string;
  activeIconColor: string;
  txtColor: string;
  descriptionColor: string;
  hoverBgColor: string;
  failureViewImg: string;
  notFoundImage: string;
  headingContainerBgColor: string;
  iconContainerBgColor: string;
  trendingCardTitle: string;
  gamingViews: string;
  labelColor: string;
  inputBorder: string;
  logoutColor: string;
  logoutBorder: string;
  popClassName: string;
  smallDeviceLogout: string;
  crossBtnClassName: string;
  hamClassName: string;
  themeIcon: string;
}