import { describe, it, expect, vi } from "vitest";
import { isSSR } from "./isSrr"; // Adjust the import path as needed

describe("isSSR", () => {
  it("should return true if window is undefined", () => {
    // Simulate server-side environment
    const originalWindow = global.window;
    delete global.window;

    expect(isSSR()).toBe(true);

    // Restore window
    global.window = originalWindow;
  });

  it("should return false if window is defined", () => {
    // Simulate client-side environment
    global.window = {};

    expect(isSSR()).toBe(false);

    // Cleanup window
    delete global.window;
  });
});
