import "@babel/polyfill";
import { fireEvent } from "@testing-library/react";
import * as React from "react";
import { DevTools } from "../../../src/App/DevTools";
import { model } from "../../../src/model";
import { initState } from "../../../src/store";
import { renderWithProdo } from "../../utils";

describe("DevTools", () => {
  it("can render with initial store", async () => {
    const { getByTestId } = renderWithProdo(
      <DevTools />,
      model.createStore({ initState }),
    );

    expect(getByTestId("headerTabState").textContent).toBe("State");
    expect(getByTestId("headerTabActionLog").textContent).toBe("Action Log");
  });

  it("shows state panel by default", async () => {
    const { getByTestId } = renderWithProdo(
      <DevTools />,
      model.createStore({ initState }),
    );

    expect(getByTestId("statePanel")).toBeTruthy;
  });

  it("shows state panel when State clicked in header", async () => {
    const { getByText, getByTestId } = renderWithProdo(
      <DevTools />,
      model.createStore({ initState }),
    );

    fireEvent.click(getByText("State"));
    expect(getByTestId("statePanel")).toBeTruthy;
  });

  it("shows action log panel when Action Log clicked in header", async () => {
    const { getByText, getByTestId } = renderWithProdo(
      <DevTools />,
      model.createStore({ initState }),
    );

    fireEvent.click(getByText("Action Log"));
    expect(getByTestId("actionLogPanel")).toBeTruthy;
  });
});