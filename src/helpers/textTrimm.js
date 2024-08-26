export const nameTrimm = (name = "") => {
  if (name.length < 10) return name;
  const newName = name.slice(0, 5) + "...";
  return newName;
};

export const textTrimm = (text = "") => {
  if (text.length < 10) return text;
  const newText = text.slice(0, 30) + "...";
  return newText;
};
