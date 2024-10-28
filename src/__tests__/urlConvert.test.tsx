import { convertImageUrl } from "@/helpers/urlConvert";

describe("convertImageUrl", () => {
  it("should prepend 'https:' to URLs starting with '//' ", () => {
    const input = "//example.com/image.png";
    const expectedOutput = "https://example.com/image.png";
    expect(convertImageUrl(input)).toBe(expectedOutput);
  });

  it("should return the same URL if it does not start with '//'", () => {
    const input = "http://example.com/image.png";
    const expectedOutput = "http://example.com/image.png";
    expect(convertImageUrl(input)).toBe(expectedOutput);
  });

  it("should return the same URL if it starts with 'https://'", () => {
    const input = "https://example.com/image.png";
    const expectedOutput = "https://example.com/image.png";
    expect(convertImageUrl(input)).toBe(expectedOutput);
  });

  it("should return the same URL if it starts with 'http://'", () => {
    const input = "http://example.com/image.png";
    const expectedOutput = "http://example.com/image.png";
    expect(convertImageUrl(input)).toBe(expectedOutput);
  });
});
