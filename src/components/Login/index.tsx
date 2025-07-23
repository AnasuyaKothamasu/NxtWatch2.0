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

import { AppTheme } from "../../App";

const Login: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const theme = useTheme() as AppTheme;

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSuccess = (jwtToken: string) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    navigate("/", { replace: true });
  };

  const handleFailure = (error: string) => {
    setShowError(true);
    setErrorMsg(error);
  };

  const handleLoginSubmit = async (e : React.FormEvent) => {
    e.preventDefault();
    const userDetails = { username, password };
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              id="password"
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <CheckBoxContainer className="check-div">
              <CheckBox
                type="checkbox"
                id="checkbox"
                checked={showPass}
                onChange={() => setShowPass((prev) => !prev)}
              />
              <CheckBoxLabel htmlFor="checkbox">Show Password</CheckBoxLabel>
            </CheckBoxContainer>
            <LoginButton type="submit" className="login-btn">
              Login
            </LoginButton>
            {showError && <ErrorMsg className="errorMsg">{errorMsg}</ErrorMsg>}
          </FormContainer>
        </LoginInnerContainer>
      </LoginContainer>
    </>
  );
};

export default Login;
