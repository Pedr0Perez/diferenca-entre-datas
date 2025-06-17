import React, { memo } from "react";
import { Menubar } from "primereact/menubar";
import "./style/Header.css";

const Header = (): React.JSX.Element => {
  const start = (
    <div className="flex align-items-center">
      <img alt="logo" src="/sis-logo.png" height="40" className="mr-2"></img>
      <h3>Diferença entre datas</h3>
    </div>
  );

  return (
    <div className="card">
      <Menubar start={start} className="default-header" />
    </div>
  );
};

export default memo(Header);
