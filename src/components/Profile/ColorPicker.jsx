import React from "react";
import { HuePicker } from "react-color";

const ColorPicker = ({color, onChange}) => {
  const handleChangeComplete = (color) => {
    onChange(color);
  };


  return (
    <HuePicker color={color} width="5" onChangeComplete={handleChangeComplete} />
  );
};

export default ColorPicker;
