//Converts a not valid URL to a valid URL
export const formatToValidUrl = (url: string): string => {
  if (!url) return url;
  if (url.indexOf('http') === -1) {
    url = `https://${url}`;
  }
  return url;
};
