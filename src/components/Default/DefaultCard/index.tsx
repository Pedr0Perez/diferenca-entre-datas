"use-client";

import React, { memo } from "react";
import { Panel } from "primereact/panel";
import TypeDefaultCard from "./types/TypeDefaultCard";
import "./style/DefaultCard.css";

const DefaultCard = ({
  title,
  children,
}: TypeDefaultCard): React.JSX.Element => {
  return (
    <Panel header={title} className="default-card">
      {children}
    </Panel>
  );
};

export default memo(DefaultCard);
