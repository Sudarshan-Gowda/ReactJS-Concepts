import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput.js content here");

  return (
    <MyParagraph>{props.show ? "This is new Paragraph!" : ""}</MyParagraph>
  );
};

export default React.memo(DemoOutput);
