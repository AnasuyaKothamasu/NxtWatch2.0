import styled from "styled-components";

export const VideoItemFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Loader = styled.div`
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: ${(props) => props.theme.txtColor};
  @media (min-width: 767px) {
    margin-left: 55vw;
  }
`;
