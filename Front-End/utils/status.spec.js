import { describe, it, expect } from "vitest";
import getStatusName, { getStatusColor } from "./status"; // Adjust the import path as needed

describe("getStatusName", () => {
  it('should return "تایید شده" if the status is "accept"', () => {
    expect(getStatusName("accept")).toBe("تایید شده");
  });

  it('should return "رد شده" if the status is "decline"', () => {
    expect(getStatusName("decline")).toBe("رد شده");
  });

  it('should return "نامشخص" for any other status', () => {
    expect(getStatusName("pending")).toBe("نامشخص");
    expect(getStatusName("unknown")).toBe("نامشخص");
    expect(getStatusName("")).toBe("نامشخص");
    expect(getStatusName(null)).toBe("نامشخص");
    expect(getStatusName(undefined)).toBe("نامشخص");
  });

  it('should return "نامشخص" for non-string status values', () => {
    expect(getStatusName(0)).toBe("نامشخص");
    expect(getStatusName(1)).toBe("نامشخص");
    expect(getStatusName(true)).toBe("نامشخص");
    expect(getStatusName(false)).toBe("نامشخص");
    expect(getStatusName({})).toBe("نامشخص");
    expect(getStatusName([])).toBe("نامشخص");
  });
});

describe("getStatusColor", () => {
  it('should return "text-green-500" if the status is "accept"', () => {
    expect(getStatusColor("accept")).toBe("text-green-500");
  });

  it('should return "text-red-500" if the status is "decline"', () => {
    expect(getStatusColor("decline")).toBe("text-red-500");
  });

  it('should return "text-orange-500" for any other status', () => {
    expect(getStatusColor("pending")).toBe("text-orange-500");
    expect(getStatusColor("unknown")).toBe("text-orange-500");
    expect(getStatusColor("")).toBe("text-orange-500");
    expect(getStatusColor(null)).toBe("text-orange-500");
    expect(getStatusColor(undefined)).toBe("text-orange-500");
  });

  it('should return "text-orange-500" for non-string status values', () => {
    expect(getStatusColor(0)).toBe("text-orange-500");
    expect(getStatusColor(1)).toBe("text-orange-500");
    expect(getStatusColor(true)).toBe("text-orange-500");
    expect(getStatusColor(false)).toBe("text-orange-500");
    expect(getStatusColor({})).toBe("text-orange-500");
    expect(getStatusColor([])).toBe("text-orange-500");
  });
});
