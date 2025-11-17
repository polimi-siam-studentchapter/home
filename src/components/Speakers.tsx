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
      name: "Monica Montardini",
      img: "",
      bio: "",
      title: "To be defined.",
      abstract: "To be defined.",
    },
    {
      name: "Cecilia Pagliantini",
      img: "./speakers/CeciliaPagliantini.png",
      bio: "RTDb Dipartimento di Matematica, Università di Pisa",
      title: "Dynamical approximation and sensor placement for the state estimation of conservative dynamics",
      abstract: "This talk focuses on the inverse problem of reconstructing an unknown function $u$ from a finite set of measurements, under the assumption that $u$ is the output of a parametric differential equation with unknown input parameters. Typically, the target function $u$ belongs to an infinite-dimensional Hilbert space and the geometry of the solution set $M$ is not known a priori. One way to reduce the complexity of the problem is to approximate $M$ by a linear, finite dimensional subspace $V$ using model order reduction, and to search for an approximation $u^{\star}\in V$ to the state $u$. It is however known that such an approach becomes ineffective for approximating the dynamics of conservative systems. In this talk we will discuss how to address inverse problems for transport and wave phenomena in the framework of Hamiltonian systems. The method combines symplectic dynamical low-rank approximation to update $V$ with dynamical placement of the sensors to ensure an accurate reconstruction at all times.",
    },
    {
      name: "Francesco Regazzoni",
      img: "https://regazzoni.faculty.polimi.it/authors/admin/avatar_huf4c942cac3489e2b50543501689d71ec_28766_150x150_fill_q75_lanczos_center.jpg",
      bio: "Associate Professor at MOX - Dipartimento di Matematica, Politecnico di Milano",
      title: "Challenges and advances in multiphysics coupling, with applications in cardiac modeling",
      abstract: "Multiphysics coupling arises in many scientific and engineering applications and poses significant challenges in balancing computational efficiency with accuracy. Examples include sub-physics characterized by different requirements in terms of mesh size and polynomial degree, which call for transferring coupling variables across independent meshes in an effective and structure-preserving manner; time-integration instabilities that emerge when loosely coupled schemes are employed as a more convenient alternative to fully monolithic approaches; and spatial accuracy issues that arise when dealing with non-matching meshes. In this talk, we consider cardiac simulation as a paradigmatic example of a complex multiphysics problem, both because of its societal impact and because of the numerous numerical challenges it raises. Indeed, clinical translation in this context is often hindered by the computational costs, which prevent a sustainable integration of in silico simulations within healthcare systems. First, we present a novel algorithm for structure-preserving information transfer between different meshes, enabling the use of distinct spatial resolutions and/or polynomial degrees for the various sub-models in the multiphysics framework. The algorithm supports fully independent meshes while ensuring the physical consistency of transferred tensors through a combined use of Radial Basis Function (RBF) interpolation and Singular Value Decomposition (SVD). Next, we introduce an enhanced formulation that supports non-matching spatial discretizations on complex domains, where curvature, cuts, cavities, or other nontrivial geometric or topological features may compromise standard interpolation techniques based solely on Euclidean distance. To address these limitations, we propose a modification of rescaled localized radial basis function interpolation that incorporates the geometry of the domain by relying on an approximated geodesic distance between data points, thereby ensuring conformity and fidelity to its geometric and topological features. We then focus on fluid-structure interaction problems, arising e.g. from the coupling between cardiac tissue and blood flow, analyzing the numerical oscillations that affect loosely coupled schemes for hybrid-dimensional 0D-3D interaction. We examine several loosely coupled approaches, including Dirichlet-Neumann, Neumann-Dirichlet, and, more generally, Robin-Robin schemes. We provide an explanation for the oscillations that often burden these methods and establish sharp stability bounds on the time-step size. To address these issues, we propose a numerically consistent stabilization term that requires no parameter tuning, inspired by physical insight into the onset of oscillations, and we prove its absolute stability. Finally, motivated by fluid-structure interaction problems in which the solid undergoes large deformations, thus calling for immersed approaches, we introduce a novel Fictitious Domain unfitted method for interface problems that achieves optimal convergence without the need for adaptive mesh refinement or enrichment of the finite element spaces. The method extends the solution into the fictitious domain in a way that ensures high global regularity: unlike standard FD methods, where subdomain coupling is achieved via a duality pairing with a boundary Lagrange multiplier, we rely on an L2 product with the H1 Riesz representative of the multiplier, thereby avoiding gradient jumps across the interface. As a result, the proposed method attains up to one order of improvement in energy-norm convergence compared to standard FD approaches.",
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
