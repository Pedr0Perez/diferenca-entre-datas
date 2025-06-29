import React, { memo } from "react";
import "./style/Footer.css";

const Footer = (): React.ReactNode => {
  return (
    <footer className="default-footer">
      <div className="version-info">
        <p>
          <b>Calculadora de Diferença Entre Duas Datas</b>
        </p>
        <p>
          <b>&copy; {new Date().getFullYear()} Pedro Perez</b>
        </p>
      </div>
      <div className="social-media">
        <a href="https://github.com/Pedr0Perez" target="_blank">
          <span>
            <i className="pi pi-github"></i>
          </span>
        </a>
        <a href="https://linkedin.com/in/pedro0-perez" target="_blank">
          <span>
            <i className="pi pi-linkedin"></i>
          </span>
        </a>
      </div>
    </footer>
  );
};

export default memo(Footer);
