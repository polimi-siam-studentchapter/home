import React from "react";
import "../assets/styles/Main.scss";

interface ScheduleProps {
  mode: "light" | "dark";
}

const Speakers: React.FC<ScheduleProps> = ({ mode }) => {
  const speakers = [
    {
      name: "Luca Calatroni",
      img: "./speakers/calatroni.jpeg",
      bio: "MaLGa centre, Department of Computer Science, Università degli studi di Genova, Italy, Associate professor",
      title: "Optimisation-driven deep learning for image reconstruction",
      abstract: "Recent advances in machine learning and deep learning have revolutionised the study of applied inverse problems and computer vision. Although these data-driven methods often outperform classical reconstruction techniques grounded in tailored modelling and expert knowledge, they frequently lack rigorous mathematical guarantees. In this talk, I will discuss how hybrid approaches that integrate physical models with learned regularisation can bridge this gap, offering a balanced combination of interpretability, reliability, and performance. I will focus in particular on convergent hybrid methods formulated as extensions of classical optimisation schemes (such as proximal gradient methods and bilevel optimisation approaches), in which the physical forward model is enforced explicitly while the prior is learned from data. As an application, I will demonstrate how these techniques can be effectively employed for image reconstruction in fluorescence microscopy, particularly in regimes with limited photon counts.",
    },
    {
      name: "Francesco Regazzoni",
      img: "https://regazzoni.faculty.polimi.it/authors/admin/avatar_huf4c942cac3489e2b50543501689d71ec_28766_150x150_fill_q75_lanczos_center.jpg",
      bio: "Politecnico di Milano, Associate Professor",
      title: "To be defined.",
      abstract: "To be defined.",
    },
    {
      name: "Davide Torlo",
      img: "./speakers/Torlo_SISSA_keynote.jpg",
      bio: "Sapienza Università di Roma, RTT",
      title: "How to Preserve Moving Equilibria for Hyperbolic Balance Laws with the Global Flux Quadrature",
      abstract: "Many conservation and balance laws admit families of moving steady states that are crucial to preserve at the numerical level. While several techniques have been developed to achieve this in one dimension, few are available for multidimensional problems, and those often apply only to linear cases. The so-called Global Flux approach integrates multiple terms into a single physical flux, yielding a unified differential operator acting on a more complex flux function. This formulation enables highly accurate discrete equilibria that correspond to exact continuous steady states. In finite element methods, these discrete equilibria exhibit superconvergence properties, allowing for very precise perturbation analyses. Despite its name, the Global Flux method leads to compact numerical stencils and can be reformulated as specific discrete derivative and source terms. We apply the method to various systems — including the acoustic, shallow water, Euler, and Maxwell equations, with and without source terms — demonstrating its ability to preserve a broad class of genuinely multidimensional equilibria.",
    },

  ];

  const organisers = {
    "Organising Committee": [
      {
        name: "Davide Carrara",
        img: "./people/davide.jpeg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Luca Sosta",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100089_38.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Giovanni Ziarelli",
        img: "https://www.mate.polimi.it/servizi/webspace/img/734_25.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Luca Formaggia",
        img: "https://www.mate.polimi.it/servizi/webspace/img/142.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
    ],
    "Local Organisers": [
      {
        name: "Francesca Arceci",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100131_30.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Samuele Brunati",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100103_74.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Giacomo Lorenzon",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100135_98.png",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Simone Panzieri",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100008_40.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Valentina Pederzoli",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100079_83.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Riccardo Petrucci",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100109_54.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Erika Temellini",
        img: "https://www.mate.polimi.it/servizi/webspace/img/737_65.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Piermario Vitullo",
        img: "https://www.mate.polimi.it/servizi/webspace/img/735_79.jpeg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
      {
        name: "Filippo Zacchei",
        img: "https://www.mate.polimi.it/servizi/webspace/img/100048_69.jpg",
        affiliation: "MOX, DMAT, Politecnico di Milano",
      },
    ],
    "SIAM Chapter Representatives": [
      {
        name: "Luca Calatroni",
        img: "./speakers/calatroni.jpeg",
        affiliation: "MaLGa Center, DIBRIS, Università di Genova, IIT",
      },
      {
        name: "Veronica Pignedoli",
        img: "./people/pignedoli.jpg",
        affiliation: "MaLGa Center, DIBRIS, Università di Genova",
      },
      {
        name: "Simone Sanna",
        img: "./people/S_Sanna.jpg",
        affiliation: "MaLGa Center, DIMA, Università di Genova",
      },

    ],
  };

  return (
    <>
      <div className={`speakers-section ${mode}`} id="speakers">
        <h2>Speakers</h2>
        <div className="speakers-grid">
          {speakers.map((s, i) => (
            <div key={i} className="speaker-card">
              <div className="top">
                <img src={s.img} alt={s.name} className="speaker-img" />
                <div className="bio">
                  <h3>{s.name}</h3>
                  <p>{s.bio}</p>
                </div>
              </div>

              {/* ===== TALK TITLE ADDED HERE ===== */}
              <div className="talk-title">
                <h4>{s.title}</h4>
              </div>

              <div className="abstract">
                <h4>Abstract</h4>
                <p>{s.abstract}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="contributed">
        <h2>Contributed Talks</h2>
        <ul>
          <li><strong>Dr. Alice Smith:</strong> Understanding Langevin Dynamics in ML</li>
        </ul>

        <h2>Poster Session Contributions</h2>
        <ul>
          <li><strong>Dr. Alice Smith:</strong> Understanding Langevin Dynamics in ML</li>
        </ul>
      </div> */}

      {/* ===== Organisers Section ===== */}
      <div className="organisers" id="organisers">
        <h2>Organisers</h2>

        {Object.entries(organisers).map(([title, members], i) => (
          <div key={i} className="organiser-group">
            <h3>{title}</h3>

            <ul className="committee-list">
              {members.map((m, j) => (
                <li key={j} className="member">
                  <img src={m.img} alt={m.name} className="member-photo" />
                  <div className="member-info">
                    <strong>{m.name}</strong>
                    <div className="affiliation">{m.affiliation}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Speakers;
