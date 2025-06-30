import React, { memo } from "react";
import { Menubar } from "primereact/menubar";
import "./style/Header.css";
import Image from "next/image";

const Header = (): React.ReactNode => {
  const start = (
    <div className="flex align-items-center">
      <Image alt="Logo" src="/sis-logo.png" height={40} width={40} className="mr-2"/>
      <h3>Diferença entre duas datas</h3>
    </div>
  );

  return (
    <div className="card">
      <Menubar start={start} className="default-header" />
    </div>
  );
};

export default memo(Header);
