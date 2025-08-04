import styled from "styled-components";

export const NoSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: calc(100vw - 20vw);
  margin-left: 20vw;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  margin-top: 80px;
  font-family: sans-serif;
  text-align: center;
  background-color: ${(props) => props.theme.secondaryBgColor};
  @media (max-width: 575px) {
    min-width: 100%;
    margin-left: 0;
    height: calc(100vh - 65px);
    margin-top: 65px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    min-width: 100%;
    margin-left: 0;
    height: calc(100vh - 65px);
    margin-top: 65px;
  }
`;

export const NoSavedImage = styled.img`
  height: 450px;
  width: 600px;
  @media (max-width: 575px) {
    height: 250px;
    width: 75%;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    height: 350px;
    width: 75%;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 380px;
    width: 75%;
  }
`;

export const NoSavedHeading = styled.h2`
  font-size: 25px;
  margin-top: 30px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.txtColor};
  @media (max-width: 575px) {
    font-size: 20px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const NoSavedDescription = styled.p`
  margin-top: 0;
  font-size: 20px;
  color: ${(props) => props.theme.descriptionColor};
  @media (max-width: 575px) {
    font-size: 16px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 16px;
  }
`;
