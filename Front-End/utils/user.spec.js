import { describe, it, expect, vi, beforeEach } from "vitest";
import { getUser } from "./user";
import { isSSR } from "./isSrr"; // Assume this is the path to your isSSR function

vi.mock("./isSrr");

describe("getUser", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.resetAllMocks();
  });

  it("should return undefined if isSSR returns true", () => {
    vi.mocked(isSSR).mockReturnValue(true);

    const result = getUser();

    expect(result).toBeUndefined();
  });

  it("should return null if localStorage does not have USER_KEY", () => {
    vi.mocked(isSSR).mockReturnValue(false);
    vi.spyOn(Storage.prototype, "getItem").mockReturnValue(null);

    const result = getUser();

    expect(result).toBeNull();
  });

  it("should return parsed user data from localStorage if isSSR returns false", () => {
    vi.mocked(isSSR).mockReturnValue(false);
    const userData = { name: "John Doe", age: 30 };
    vi.spyOn(Storage.prototype, "getItem").mockReturnValue(
      JSON.stringify(userData)
    );

    const result = getUser();

    expect(result).toEqual(userData);
  });

  it("should handle invalid JSON in localStorage", () => {
    vi.mocked(isSSR).mockReturnValue(false);
    vi.spyOn(localStorage, "getItem").mockReturnValue("invalid json");

    expect(() => getUser()).toThrow();
  });
});
