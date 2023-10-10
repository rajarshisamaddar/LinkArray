import React, { useState } from "react";
import { HuePicker } from "react-color";

const ColorPicker = () => {
  const [background, setBackground] = useState("#fff");

  const handleChangeComplete = (color) => {
    setBackground(color.hex);
  };
  //console.log(background)

  return (
    <HuePicker color={background} width="5" onChangeComplete={handleChangeComplete} />
  );
};

export default ColorPicker;
