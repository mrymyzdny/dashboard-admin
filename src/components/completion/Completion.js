import * as React from "react";
import Slider from "@mui/material/Slider";

export default function completion(props) {
  return (
    <Slider
      defaultValue={props.completed}
      sx={{
        width: "15rem",
        height: ".5rem",
        color: "#368fee",
        "& .MuiSlider-thumb": {
          display: "none",
        },
      }}
    />
  );
}
