import homeStore from "./index";
import Cookies from "js-cookie";

jest.mock("js-cookie", () => ({
  get: jest.fn(),
}));

describe("home store testing", () => {
  beforeEach(() => {
    homeStore.isLoading = true;
    homeStore.videosList = [];
    homeStore.showPremiumCard = true;
    homeStore.searchInput = "";
    homeStore.showSuccessView = true;
    homeStore.filteredList = [];
  });

  test("to have default values", () => {
    expect(homeStore.isLoading).toBe(true);
    expect(homeStore.videosList).toStrictEqual([]);
    expect(homeStore.showPremiumCard).toBe(true);
    expect(homeStore.searchInput).toBe("");
    expect(homeStore.showSuccessView).toBe(true);
    expect(homeStore.filteredList).toStrictEqual([]);
  });

  test("remove premiumCard", () => {
    homeStore.removeCard();
    expect(homeStore.showPremiumCard).toBe(false);
  });

  test("change search input", () => {
    homeStore.setSearchInput("ib hubs");
    expect(homeStore.searchInput).toBe("ib hubs");
  });

  test("fetching videos - success", async () => {
    const jwt_token = "jwtToken";
    const mockResponse = {
      videos: [
        {
          id: "30b642bd-7591-49f4-ac30-5c538f975b15",
          title:
            "shares his batting experience in iB Cricket | iB Cricket Super Over League",
          thumbnail_url:
            "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png",
          channel: {
            name: "iB Cricket",
            profile_image_url:
              "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
          },
          view_count: "1.4K",
          published_at: "Apr 19, 2019",
        },
      ],
    };

    (Cookies.get as jest.Mock).mockReturnValue(jwt_token);

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;

    await homeStore.fetchVideos();

    expect(fetch).toHaveBeenCalledWith(
      "https://apis.ccbp.in/videos/all?search=",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt_token}`,
        },
      }
    );
    expect(homeStore.isLoading).toBe(false);
    expect(homeStore.filteredList.length).toBe(1);
    expect(homeStore.showSuccessView).toBe(true);
  });

  test("fetching videos - failure case", async () => {
    const error =
      "an unknown error occurred , check the username and password again";

    (Cookies.get as jest.Mock).mockReturnValue("error");

    global.fetch = jest.fn(() =>
      Promise.reject(new Error("Fetching failed"))
    ) as jest.Mock;

    await homeStore.fetchVideos();

    expect(fetch).toHaveBeenCalledWith(
      "https://apis.ccbp.in/videos/all?search=",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer error`,
        },
      }
    );

    expect(homeStore.showSuccessView).toBe(false);
    expect(homeStore.videosList.length).toBe(0);
    expect(homeStore.filteredList.length).toBe(0);
    expect(homeStore.isLoading).toBe(true);
  });
});
