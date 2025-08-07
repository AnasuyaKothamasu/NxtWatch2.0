
import { GameStore } from "../GameStore";
import Cookies from "js-cookie";

jest.mock("js-cookie", () => ({
  get: jest.fn(),
}));

describe("GameStore - fetchVideos", () => {
  let store: GameStore;

  beforeEach(() => {
    store = new GameStore();

    (Cookies.get as jest.Mock).mockReturnValue("mock-jwt-token");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("✅ fetchVideos: should update state on success", async () => {
    const mockApiResponse = {
      videos: [
        {
          id: "1",
          thumbnail_url: "url1",
          title: "Game One",
          view_count: "1M",
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
    expect(store.gamingVideos.length).toBe(1);
    expect(store.gamingVideos[0].title).toBe("Game One");
  });

  test("fetchVideos: should handle failed API response", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock;

    await store.fetchVideos();

    expect(store.showSuccessView).toBe(false);
    expect(store.gamingVideos.length).toBe(0);
  });

  test("⚠ fetchVideos: should handle network error", async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error("Network Error"))
    ) as jest.Mock;

    await store.fetchVideos();

    expect(store.showSuccessView).toBe(false);
    expect(store.gamingVideos.length).toBe(0);
  });
});
