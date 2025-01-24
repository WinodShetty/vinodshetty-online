import React from "react";
import "../styles/myWorks.css"; // My Works page styles

const MyWorks = () => {
  const works = [
    { id: 1, name: "GreenNature Blog", description: "A blog showcasing eco-friendly tips.", img: "https://via.placeholder.com/300?text=GreenNature+Blog" },
    { id: 2, name: "EcoStore", description: "An online store for sustainable products.", img: "https://via.placeholder.com/300?text=EcoStore" },
    { id: 3, name: "Forest Retreat", description: "A booking platform for eco-friendly retreats.", img: "https://via.placeholder.com/300?text=Forest+Retreat" },
  ];

  return (
    <section className="my-works">
      <h2>My Works</h2>
      <div className="works-grid">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            <img src={work.img} alt={work.name} className="work-image" />
            <h3>{work.name}</h3>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWorks;
