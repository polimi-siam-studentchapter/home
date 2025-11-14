// src/components/LogoSection.tsx
import React from "react";
import { LogoLoop } from "../components/LogoLoop";
import "../assets/styles/Main.scss";

interface LogoSectionProps {
  mode: "dark" | "light";
}

const LogoSection: React.FC<LogoSectionProps> = ({ mode }) => {
  return (
    <div className="logo-section">
      <h2>Institutions involved</h2>
      <p>Sponsors and institutions involved.</p>

      <section>
        <LogoLoop
          className="logo-loop"
          logos={[
            {
              src: "./logos/logo_mathLab_bg_v.png",
              alt: "mathLab",
              href: "https://mathlab.sissa.it/"
            },
            {
              src: "./logos/logo_polimi.png",
              alt: "Politecnico di Milano",
              href: "https://www.polimi.it/"
            },
            {
              src: "./logos/logo-8192px.png",
              alt: "AIM",
              href: "https://www.aim-mate.it/"
            },
            {
              src: "./logos/matematica_unipi_dx_blu.png",
              alt: "Università di Pisa",
              href: "https://www.unipi.it/"
            },
            {
              src: "./logos/SNS.png",
              alt: "Scuola Normale Superiore",
              href: "https://www.sns.it/"
            },
            {
              src: "./logos/pavia.png",
              alt: "Università di Pavia",
              href: "https://www.unipv.it/"
            },
            {
              src: "./logos/siamgenova.png",
              alt: "SIAM Genova",
              href: "https://www.dima.unige.it/"
            }
          ]}
          speed={80}
          direction="left"
          logoHeight={100}
          gap={40}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="#fff"
          scaleOnHover={false}
          ariaLabel="Partner logos"
        />
      </section>
    </div>
  );
};

export default LogoSection;
