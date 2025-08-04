import styled from "styled-components";

export const TrendingCardComponent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin-bottom: 0;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ImageDiv = styled.div`
  flex: 0 0 35%;
  @media (max-width: 575px) {
    flex: 0 0 45%;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    flex: 0 0 45%;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    flex: 0 0 45%;
  }
`;

export const TrendCardThumbnail = styled.img`
  height: auto;
  width: 100%;
  @media (max-width: 575px) {
    width: 100%;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    height: auto;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: auto;
  }
`;

export const TrendingTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const TrendingChannelProfile = styled.img`
  display: none;
  @media (max-width: 575px) {
    display: block;
    height: 40px;
    width: 40px;
    align-self: center;
    margin-left: 15px;
  }
`;

export const TxtDivTrend = styled.div`
  padding: 0 20px 20px 20px;
  @media (max-width: 575px) {
    padding: 5px 20px 5px 20px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding: 0 20px 0 20px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 20px 0 20px;
  }
`;

export const TrendingCardTitle = styled.h2`
  font-size: 20px;
  margin: 10px 0px;
  color: #7a7878;
  color: ${(props) => props.theme.trendingCardTitle};
  @media (max-width: 575px) {
    font-size: 14px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const TrendingChannelName = styled.p`
  color: ${(props) => props.theme.descriptionColor};
  font-weight: 600;
  @media (max-width: 575px) {
    font-size: 12px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`;
