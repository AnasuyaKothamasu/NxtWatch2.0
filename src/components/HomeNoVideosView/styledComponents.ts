import styled from "styled-components";

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  margin-top: 80px;
  font-family: sans-serif;
  text-align: center;
  background-color: ${(props) => props.theme.secondaryBgColor};
`;

export const NoSearchHeading = styled.h2`
  font-size: 25px;
  margin-top: 30px;
  margin-bottom: 10px;
  @media (max-width: 575px) {
    font-size: 20px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const NoSearchDescription = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.descriptionColor};
`;

export const RetryButton = styled.button`
  height: 35px;
  width: 100px;
  background-color: #4a47e0;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 14px;
  font-weight: 600;
`;

export const NoSearchImage = styled.img`
  height: 350px;
  width: 400px;
`;