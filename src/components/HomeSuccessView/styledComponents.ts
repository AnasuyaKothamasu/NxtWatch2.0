import styled from "styled-components";

export const HomeSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20vw);
  min-height: calc(100vh - 80px);
  overflow-y: auto;
  margin-top: 80px;
  margin-left: 20vw;
  font-family: sans-serif;
  background-color: ${(props) => props.theme.secondaryBgColor};
  @media (max-width: 767px) {
    width: 100%;
    min-height: calc(100vh - 65px);
    margin-left: 0;
    margin-top: 65px;
  }
`;

export const HomeContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: ${(props) => props.theme.secondaryBgColor};
  @media (max-width: 767px) {
    padding: 0;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 10px;
  }
`;

export const SearchInputContainer = styled.form`
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  width: fit-content;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    margin: 20px 20px 0 20px;
    width: 90%;
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border-radius: 3px;
  font-size: 16px;
  height: 35px;
  width: 450px;
  padding: 5px;
  border: solid 1px rgb(165, 162, 162);
  color: ${(props) => props.theme.txtColor};
  @media (max-width: 767px) {
    width: 100%;
    height: 33px;
    font-size: 14px;
  }
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border-radius: 3px;
  color: rgb(90, 88, 88);
  width: 80px;
  border: solid 1px rgb(165, 162, 162);
  .search-icon {
    height: 20px;
    width: 20px;
  }
  @media (max-width: 767px) {
    .search-icon {
      width: 15px;
      height: 15px;
    }
  }
`;

export const Loader = styled.div`
  margin-top: 100px;
  text-align: center;
  color: ${(props) => props.theme.txtColor};
`;