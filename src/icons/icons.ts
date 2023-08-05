import logo from "./logo.svg";
import addImage from "./add-image.svg";
import addText from "./add-text.svg";
import edit from "./edit.svg";
import newFile from "./new-file.svg";
import openFile from "./open-file.svg";
import trash from "./remove.svg";
import saveFile from "./save-file.svg";
import sticker from "./sticker.svg";

export const icons = {
  logo,
  addImage,
  addText,
  edit,
  newFile,
  openFile,
  trash,
  saveFile,
  sticker,
};

export type TIcon = keyof typeof icons;
