import React from "react";
import Text from "./Text";
import { render } from "@testing-library/react";

test("renders text component correctly", () => {
  const div = document.createElement("div");
  render(<Text />, div);
});
