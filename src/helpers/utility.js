export const countFreq = (text) => {
  //remove everything except alphanumeric values
  //remove extra spaces and replce with single space
  //split on space
  const words = text
    .replace(/[^\w\s@_']|_/g, "")
    .replace(/\s+/g, " ")
    .split(" ");
  const filtered = words.filter((element) => element !== "").map((element) => element.toLowerCase());

  //create a map for freq count
  //sort the freq to get top 20 words
  const freq = new Map();
  filtered.forEach((word) => freq.set(word, (freq.get(word) ?? 0) + 1));
  const sortFreq = new Map([...freq.entries()].sort((a, b) => b[1] - a[1]));
  return formatFreq([...sortFreq].slice(0, 20));
};

const formatFreq = (words) => {
  //format each word to be of type {word:val, freq:val}
  const data = [];
  words.forEach((word) => {
    data.push({ word: word[0], freq: word[1] });
  });
  return data;
};
