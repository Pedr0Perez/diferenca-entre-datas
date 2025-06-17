import React, { memo } from "react";
import TypeContent from "./types/TypeContent";

const Content = ({ children }: TypeContent): React.JSX.Element => {
  return <main className="main-content">{children}</main>;
};

export default memo(Content);
