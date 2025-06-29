"use client";

import React, { memo, useEffect, useState } from "react";
import SisLogoSvg from "./session/SisLogoSvg";

const InitialLoading = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 1000);
  }, []);

  return (
    !hide && (
      <div
        className="initial-loading"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: "9999",
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{ height: "140px", width: "140px", display: "inline-block" }}
        >
          <SisLogoSvg />
        </span>
      </div>
    )
  );
};

export default memo(InitialLoading);
