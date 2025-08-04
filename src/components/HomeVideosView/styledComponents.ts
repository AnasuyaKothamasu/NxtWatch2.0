import styled from "styled-components";

export const HomeGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  @media (min-width: 576px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding-left: 20px;
  }
`;
