import React from "react";
import {
  PanelGroup,
  Panel,
  PanelResizeHandle,
} from "react-resizable-panels";
import { GripVertical } from "lucide-react";

type GroupProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "horizontal" | "vertical";
};

export const ResizablePanelGroup: React.FC<GroupProps> = ({
  children,
  className = "",
  direction = "horizontal",
}) => {
  return (
    <PanelGroup
      direction={direction}
      className={`flex h-full w-full ${className}`}
    >
      {children}
    </PanelGroup>
  );
};

type PanelProps = {
  children: React.ReactNode;
  defaultSize?: number;
  minSize?: number;
};

export const ResizablePanel: React.FC<PanelProps> = ({
  children,
  defaultSize,
  minSize,
}) => {
  return (
    <Panel defaultSize={defaultSize} minSize={minSize}>
      {children}
    </Panel>
  );
};

type HandleProps = {
  showIcon?: boolean;
};

export const ResizableHandle: React.FC<HandleProps> = ({
  showIcon = true,
}) => {
  return (
    <PanelResizeHandle
      style={{
        width: "4px",
        background: "#e5e7eb",
        position: "relative",
      }}
    >
      {showIcon && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: 4,
            padding: 2,
          }}
        >
          <GripVertical size={12} />
        </div>
      )}
    </PanelResizeHandle>
  );
};
