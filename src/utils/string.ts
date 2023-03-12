export const summarize = (text: string): string => {
  return text.trim().replace(/\s+/g, ' ');
};
