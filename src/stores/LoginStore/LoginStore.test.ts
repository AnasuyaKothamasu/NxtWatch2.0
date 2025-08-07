import LoginStore from "../LoginStore";

describe("LoginStore Unit Tests", () => {
  beforeEach(() => {
    LoginStore.setUsername("");
    LoginStore.setPassword("");
    LoginStore.setShowPass(false);
    LoginStore.setShowError(false);
    LoginStore.setErrorMsg("");
  });

  test("should have default initial values", () => {
    expect(LoginStore.username).toBe("");
    expect(LoginStore.password).toBe("");
    expect(LoginStore.showPass).toBe(false);
    expect(LoginStore.showError).toBe(false);
    expect(LoginStore.errorMsg).toBe("");
  });

  test("should update username", () => {
    LoginStore.setUsername("Anu");
    expect(LoginStore.username).toBe("Anu");
  });

  test("should update password", () => {
    LoginStore.setPassword("secret123");
    expect(LoginStore.password).toBe("secret123");
  });

  test("should toggle showPass", () => {
    LoginStore.setShowPass(true);
    expect(LoginStore.showPass).toBe(true);
  });

  test("should show error and set error message", () => {
    LoginStore.setShowError(true);
    LoginStore.setErrorMsg("Invalid credentials");
    expect(LoginStore.showError).toBe(true);
    expect(LoginStore.errorMsg).toBe("Invalid credentials");
  });

  test("should return correct userDetails (computed)", () => {
    LoginStore.setUsername("anu");
    LoginStore.setPassword("anu@123");
    expect(LoginStore.userDetails).toEqual({
      username: "anu",
      password: "anu@123",
    });
  });
});
