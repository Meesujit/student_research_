import React from 'react';


const ResearchGroupData = [
  {
    id: 1,
    title: "Research Group 1",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image: "https://www.device42.com/blog/wp-content/uploads/2023/03/14_01edge-cloud-computing-900x600.jpg"
  },
  {
    id: 2,
    title: "Research Group 2",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*XH8A_7ilH56XTnrjtIym7A.png"
  },
  {
    id: 3,
    title: "Research Group 3",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image: "https://miro.medium.com/v2/resize:fit:1000/1*TdJTgbm0K9Fv7C3Omk1nzQ.jpeg"
  },
  {
    id: 4,
    title: "Research Group 4",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image: "https://www.device42.com/blog/wp-content/uploads/2023/03/14_01edge-cloud-computing-900x600.jpg"
  }
];

const ResearchCard = () => {
  return (
    <div className="research-group-card-container">
      {ResearchGroupData.map((group) => (
        <div key={group.id} className="research-group-card">
          <img src={group.image} alt={group.title} />
          <div className="research-group-content">
            <h3>{group.title}</h3>
            <p>{group.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResearchCard;
