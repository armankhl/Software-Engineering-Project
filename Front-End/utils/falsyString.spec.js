import { describe, it, expect } from "vitest";
import { falsyString } from "./falsyString"; // Adjust the import path as needed

describe("falsyString", () => {
  it("should return the number if the value is a number", () => {
    expect(falsyString(0)).toBe(0);
    expect(falsyString(42)).toBe(42);
    expect(falsyString(-1)).toBe(-1);
  });

  it("should return the string if the value is a non-empty string", () => {
    expect(falsyString("hello")).toBe("hello");
    expect(falsyString(" world ")).toBe(" world ");
  });

  it('should return "-" if the value is an empty string', () => {
    expect(falsyString("")).toBe("-");
    expect(falsyString(" ")).toBe("-");
    expect(falsyString("   ")).toBe("-");
  });

  it('should return "-" if the value is of any other type', () => {
    expect(falsyString(null)).toBe("-");
    expect(falsyString(undefined)).toBe("-");
    expect(falsyString({})).toBe("-");
    expect(falsyString([])).toBe("-");
    expect(falsyString(true)).toBe("-");
    expect(falsyString(false)).toBe("-");
  });
});
