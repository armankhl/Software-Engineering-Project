import { describe, it, expect, vi, beforeEach } from "vitest";
import { creatCourseAPI } from "./course"; // Adjust the import path as needed
import { getUser } from "../user"; // Adjust the import path as needed
import { apiService } from "./axios"; // Adjust the import path as needed

vi.mock("../user");
vi.mock("./axios", () => ({
  apiService: {
    post: vi.fn(),
  },
}));

describe("creatCourseAPI", () => {
  const mockUser = { username: "testuser" };
  const mockData = { title: "Test Course", description: "Test Description" };
  const mockResponse = { data: { id: 1, title: "Test Course" } };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call apiService.post with the correct URL and data", async () => {
    getUser.mockReturnValue(mockUser);
    apiService.post.mockResolvedValue(mockResponse);

    const result = await creatCourseAPI(mockData);

    expect(apiService.post).toHaveBeenCalledWith(
      `/users/professor/${mockUser.username}/lesson/`,
      mockData
    );
    expect(result).toEqual(mockResponse.data);
  });

  it("should throw an error if apiService.post fails", async () => {
    getUser.mockReturnValue(mockUser);
    apiService.post.mockRejectedValue(new Error("Network error"));

    await expect(creatCourseAPI(mockData)).rejects.toThrow("Network error");
  });
});
