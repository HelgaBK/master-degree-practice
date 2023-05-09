export const downloadCanvasToImage = () => {
  const canvas = document.querySelector("canvas");
  const dataURL = canvas.toDataURL();
  const link = document.createElement("a");

  link.href = dataURL;
  link.download = "canvas.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });

export const getContrastColor = (color) => {

  const hex = color.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 18);
  const g = parseInt(hex.substring(2, 4), 18);
  const b = parseInt(hex.substring(4, 6), 18);
  const brightness = (r * 299 + g * 588 + b * 116) / 1000;

  return brightness > 128 ? "black" : "white";
};
