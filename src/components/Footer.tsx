// components/Footer.tsx
import React from "react";

interface FooterProps {
  mode: "light" | "dark";
}

const Footer: React.FC<FooterProps> = ({ mode }) => {
  const bgColor = mode === "dark" ? "#001e44" : "#6085a1";
  const borderColor = mode === "dark" ? "#444" : "#ddd";

  return (
    <footer
      style={{
        width: "100%",
        textAlign: "center",
        padding: "2rem",
        borderTop: `1px solid ${borderColor}`,
        backgroundColor: bgColor,
        backdropFilter: "blur(10px)",
        color: "fff",
        boxSizing: "border-box"
      }}
    >
      <p style={{ margin: 0, fontSize: "0.9em", color: "#fff"}}>
        © 2026 SIAM Chapters Meeting @ PoliMI
      </p>
      <a
        href="./downloadables/privacy_policy.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ paddingTop: "1rem", display: "block", fontSize: "smaller" }}
      >
        Privacy Policy
      </a>
    </footer>
  );
};

export default Footer;
