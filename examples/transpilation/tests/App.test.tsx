import { Provider, Store } from "@prodo/core";
import { render, waitForDomChange } from "@testing-library/react";
import * as React from "react";
import { App } from "../src/App";
import { initState, model } from "../src/model";

import "@babel/polyfill";

const renderWithProdo = (
  ui: React.ReactElement,
  context: { store: Store<any, any>; Provider: Provider },
) => {
  return {
    ...render(<context.Provider>{ui}</context.Provider>),
    store: context.store,
  };
};

describe("App", () => {
  it("can render with initial store", async () => {
    const { container } = await renderWithProdo(
      <App />,
      model.createStore({ initState }),
    );

    expect(container.textContent).toBe("Initialized");
  });
});
