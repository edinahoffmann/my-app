import React from "react";
import { render } from "@testing-library/react";
import { AppTest } from "./App";

describe("App Component", function () {
  it("should have hello world message", function () {
    let { getByText } = render(<AppTest />);
    expect(getByText("Hello world React!")).toMatchInlineSnapshot(`
      <h1>
        Hello world React!
      </h1>
    `);
  });
});

