describe("gaming page authentication", () => {
  it("should check whether the jwt_token is present or not and should navigate to login page if not present", () => {
    cy.clearCookies();
    cy.visit("/gaming");
    cy.url().should("include", "/login");
  });
});

describe("fetching - success view", () => {
  beforeEach(() => {
    cy.setCookie("jwt_token", "mock_token");

    cy.intercept("GET", "https://apis.ccbp.in/videos/gaming", {
      statusCode: 200,
      body: {
        videos: [
          { id: 1, title: "subway" },
          { id: 2, title: "talking tom" },
        ],
      },
    }).as("fetchGamingVideos");
  });

  it("should render successView when the api call is successful", () => {
    cy.visit("/gaming");
    cy.wait("@fetchGamingVideos");
    cy.get('[data-testid="gaming-success"]').should("exist");
    cy.get('[data-testid="failure-view"]').should("not.exist");
  });
});

describe("fetching - failure view", () => {
  beforeEach(() => {
    cy.setCookie("jwt_token", "mock_token");

    cy.intercept("GET", "https://apis.ccbp.in/videos/gaming", {
      statusCode: 500,
      body: {},
    }).as("fetchingFailureView");
  });

  it("should render failure view when the api call fails", () => {
    cy.visit("/gaming");
    cy.wait("@fetchingFailureView");
    cy.get('[data-testid="gaming-success"]').should("not.exist");
    cy.get('[data-testid="failure-view"]').should("exist");
  });
});
