import React, { memo } from "react";
import "./style/Footer.css";
import getPublicEnv from "@/utils/env/getPublicEnv";

const Footer = (): React.ReactNode => {
  return (
    <footer className="default-footer">
      <div className="version-info">
        <div className="version-info-container1">
          <p className="app-name-footer">
            Calculadora de Diferença Entre Duas Datas
          </p>
          <p className="app-version-footer">{getPublicEnv<string>("APP_VERSION")}</p>
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
      </div>
      <div className="developer-info">
        <p>
          &copy; {new Date().getFullYear()} Pedro Perez. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
