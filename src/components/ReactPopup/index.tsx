import { useTheme } from "styled-components";
import { useNavigate } from "react-router";
import { MdLogout } from "react-icons/md";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import { ReactElement } from "react";
import Cookies from "js-cookie";
import "./index.css";

import {
  ThemeIconContainer,
  LogoutButton,
  LogoutPopContainer,
  BtnFlexContainer,
  CancelBtn,
  ModalLogoutBtn,
  Question,
} from "./StyledComponents";

import { AppTheme } from "../../types/types";
import ROUTES from "../../constants/RouteConstants";

const ReactPopup = (): ReactElement => {
  const navigate = useNavigate();
  const theme = useTheme() as AppTheme;

  function handleLogout(close: () => void) {
    close();
    navigate(ROUTES.LOGIN, { replace: true });
    Cookies.remove("jwt_token");
  }

  return (
    <div>
      <Popup
        modal
        contentStyle={{ padding: 0, border: "none" }}
        className={`logout ${theme.popClassName}`}
        trigger={
          <div>
            <LogoutButton type="button">Logout</LogoutButton>
            <ThemeIconContainer>
              <MdLogout
                className={`logout-btn-sm-dev ${theme.smallDeviceLogout}`}
              />
            </ThemeIconContainer>
          </div>
        }
      >
        {
          ((close: () => void) => (
            <>
              <LogoutPopContainer>
                <Question>Are you sure you want to logout?</Question>
                <BtnFlexContainer>
                  <CancelBtn type="button" onClick={() => close()}>
                    Cancel
                  </CancelBtn>
                  <ModalLogoutBtn
                    type="button"
                    onClick={() => handleLogout(close)}
                  >
                    Logout
                  </ModalLogoutBtn>
                </BtnFlexContainer>
              </LogoutPopContainer>
            </>
          )) as unknown as React.ReactElement
        }
      </Popup>
    </div>
  );
};
export default ReactPopup;
