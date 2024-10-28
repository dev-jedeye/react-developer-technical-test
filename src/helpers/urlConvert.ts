export const convertImageUrl = (url: string) => {
  if (url.startsWith("//")) {
    return `https:${url}`;
  }

  return url;
};
