import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import Login from "./index";
import loginStore from "../../stores/LoginStore";
import ROUTES from "../../constants/RouteConstants";
import Cookies from "js-cookie";
import { DarkTheme } from "./../../constants/ThemeConstants";

const mockNavigate = jest.fn();
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockNavigate,
}));

jest.mock("js-cookie", () => ({
  set: jest.fn(),
}));

beforeEach(() => {
  (global.fetch as jest.Mock | undefined) = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
  loginStore.setUsername("");
  loginStore.setPassword("");
  loginStore.setShowError(false);
  loginStore.setErrorMsg("");
});

const renderWithProviders = () =>
  render(
    <ThemeProvider theme={DarkTheme}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </ThemeProvider>
  );

describe("Login Page", () => {
  test("renders input fields and allows typing", () => {
    renderWithProviders();

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    expect(usernameInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");

    fireEvent.change(usernameInput, { target: { value: "Anasuya" } });
    fireEvent.change(passwordInput, { target: { value: "Anasuya@2006" } });

    expect(usernameInput).toHaveValue("Anasuya");
    expect(passwordInput).toHaveValue("Anasuya@2006");
  });

  test("toggles password visibility", () => {
    renderWithProviders();

    const passwordInput = screen.getByPlaceholderText("Password");
    const checkbox = screen.getByLabelText("Show Password");

    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.click(checkbox);

    expect(passwordInput).toHaveAttribute("type", "text");
  });

  test("displays error message on failed login", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({
        error_msg: "*Username or password is invalid",
      }),
    });

    renderWithProviders();

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(usernameInput, { target: { value: "wrong" } });
    fireEvent.change(passwordInput, { target: { value: "wrongpass" } });
    fireEvent.click(loginButton);

    await (() => {
      expect(
        screen.getByText("*Username or password is invalid")
      ).toBeInTheDocument();
    });
  });

  test("successful login sets cookies and navigates", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ jwt_token: "mock-token" }),
    });

    renderWithProviders();

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(usernameInput, { target: { value: "correct" } });
    fireEvent.change(passwordInput, { target: { value: "correctpass" } });
    fireEvent.click(loginButton);

    await (() => {
      expect(Cookies.set).toHaveBeenCalledWith("jwt_token", "mock-token", {
        expires: 30,
      });
      expect(mockNavigate).toHaveBeenCalledWith(ROUTES.HOME, { replace: true });
    });
  });
});
