import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useTheme } from "styled-components";
import {
  LoginContainer,
  LoginInnerContainer,
  FormContainer,
  Label,
  LoginButton,
  Input,
  CheckBoxContainer,
  CheckBoxLabel,
  CheckBox,
  FormLogo,
  ErrorMsg
} from "./StyledComponents";
import loginStore from "./LoginStore";

import { AppTheme } from "../../App";
import { observer } from "mobx-react-lite";

const Login: React.FunctionComponent = observer(() => {
  const navigate = useNavigate();
  const theme = useTheme() as AppTheme;

  const handleSuccess = (jwtToken: string) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    navigate("/", { replace: true });
  };

  const handleFailure = (error: string) => {
    loginStore.setShowError(true);
    loginStore.setErrorMsg(error);
  };

  const handleLoginSubmit = async (e : React.FormEvent) => {
    e.preventDefault();
    const userDetails = loginStore.userDetails;
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      handleSuccess(data.jwt_token);
    } else {
      handleFailure(data.error_msg);
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginInnerContainer>
          <FormLogo src={theme.logoUrl}/>
          <FormContainer onSubmit={handleLoginSubmit}>
            <Label htmlFor="username">USERNAME</Label>
            <Input
              type="text"
              id="username"
              value={loginStore.username}
              onChange={(e) => loginStore.setUsername(e.target.value)}
              placeholder="Username"
            />
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              id="password"
              type={loginStore.showPass ? "text" : "password"}
              value={loginStore.password}
              onChange={(e) => loginStore.setPassword(e.target.value)}
              placeholder="Password"
            />
            <CheckBoxContainer className="check-div">
              <CheckBox
                type="checkbox"
                id="checkbox"
                checked={loginStore.showPass}
                onChange={() => loginStore.setShowPass(loginStore.showPass ? false : true)}
              />
              <CheckBoxLabel htmlFor="checkbox">Show Password</CheckBoxLabel>
            </CheckBoxContainer>
            <LoginButton type="submit" className="login-btn">
              Login
            </LoginButton>
            {loginStore.showError && <ErrorMsg className="errorMsg">{loginStore.errorMsg}</ErrorMsg>}
          </FormContainer>
        </LoginInnerContainer>
      </LoginContainer>
    </>
  );
});

export default Login;
