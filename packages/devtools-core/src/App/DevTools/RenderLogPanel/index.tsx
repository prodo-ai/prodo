import * as _ from "lodash";
import * as React from "react";
import styled from "styled-components";
import { state, watch } from "../../../model";
import { Render } from "../../../types";
import { ClearLogsButton } from "../components/ClearLogsButton";
import { RenderLogRow } from "./RenderLogRow";

export const emptyRenderLogMessage = "Render log is empty.";

const StyledRenderLogPanel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RenderLogPanel = () => {
  const renderLog = watch(state.app.renderLog);
  const components = {};
  renderLog.map((entry: Render) => {
    if (!components[entry.componentId]) {
      components[entry.componentId] = { total: 1 };
      components[entry.componentId][entry.actionName] = 1;
    } else {
      components[entry.componentId].total += 1;
      components[entry.componentId][entry.actionName] = components[
        entry.componentId
      ][entry.actionName]
        ? components[entry.componentId][entry.actionName] + 1
        : 1;
    }
  });

  return (
    <StyledRenderLogPanel
      className="renderLogPanel"
      data-testid="renderLogPanel"
    >
      {renderLog.length === 0
        ? emptyRenderLogMessage
        : Object.keys(components).map((componentId: string, index: number) => (
            <RenderLogRow
              componentId={componentId}
              renders={components[componentId]}
              key={index}
            />
          ))}
      {renderLog.length > 0 && <ClearLogsButton />}
    </StyledRenderLogPanel>
  );
};
