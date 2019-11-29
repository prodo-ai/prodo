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

    expect(getByTestId("stateHeaderTab").textContent).toBe("State");
    expect(getByTestId("actionLogHeaderTab").textContent).toBe("Action log");
    expect(getByTestId("renderLogHeaderTab").textContent).toBe("Render log");
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

  it("shows action log panel when Action log clicked in header", async () => {
    const { getByText, getByTestId, queryByTestId } = renderWithProdo(
      <DevTools />,
      model.createStore({ initState }),
    );

    expect(queryByTestId("actionLogPanel")).toBeNull();
    fireEvent.click(getByText("Action log"));
    expect(getByTestId("actionLogPanel")).toBeTruthy;
  });

  it("shows render log panel when Render log clicked in header", async () => {
    const { getByText, getByTestId, queryByTestId } = renderWithProdo(
      <DevTools />,
      model.createStore({ initState }),
    );

    expect(queryByTestId("renderLogPanel")).toBeNull();
    fireEvent.click(getByText("Render log"));
    expect(getByTestId("renderLogPanel")).toBeTruthy;
  });
});
