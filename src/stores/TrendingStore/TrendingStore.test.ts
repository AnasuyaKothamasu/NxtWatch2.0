import { TrendStore } from "../TrendingStore";
import Cookies from "js-cookie";

jest.mock("js-cookie", () => ({
  get: jest.fn(),
}));

describe("gamestore-fetchvideos", () => {
  let store: TrendStore;

  beforeEach(() => {
    store = new TrendStore();

    (Cookies.get as jest.Mock).mockReturnValue("mock-jwt-token");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("fetchVideos", async () => {
    const mockApiResponse = {
      videos: [
        {
          id: "ad9822d2-5763-41d9-adaf-baf9da3fd490",
          title: "iB Hubs Announcement Event",
          thumbnail_url:
            "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png",
          channel: {
            name: "iB Hubs",
            profile_image_url:
              "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png",
          },
          view_count: "26K",
          published_at: "Nov 29, 2016",
        },
      ],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockApiResponse),
      })
    ) as jest.Mock;

    await store.fetchVideos();

    expect(store.isLoading).toBe(false);
    expect(store.showSuccessView).toBe(true);
    expect(store.trendingVideos.length).toBe(1);
    expect(store.trendingVideos[0].title).toBe("iB Hubs Announcement Event");
  });

  test("failed fetching videos", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock;

    await store.fetchVideos();

    expect(store.showSuccessView).toBe(false);
    expect(store.trendingVideos.length).toBe(0);
  });

  test("fetching handling netwrok error", async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error("Network Error"))
    ) as jest.Mock;

    await store.fetchVideos();

    expect(store.showSuccessView).toBe(false);
    expect(store.trendingVideos.length).toBe(0);
  });
});
