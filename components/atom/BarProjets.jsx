import React, { useState } from "react";

function BarProjets() {
  const [isActive,setisActive]=useState(["active","o","o"]);
  const project1 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/project-img1.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/project-img2.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/project-img3.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/project-img1.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/project-img2.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/project-img3.png",
    },
  ];

  const project2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/project-img3.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/project-img1.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/project-img2.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/project-img3.png",
    },
  ];
  const project3 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/project-img1.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/project-img2.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/project-img3.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/project-img1.png",
    }
  
  ];
  const [projetstat,setprojetstat]=useState(project1)


  
const changeWidthOfBeforeForSelected=(e)=>{
 
  switch (e.target.id) {
    case "1":
      setisActive(["active","o","o"]);
      setprojetstat(project1)

      break;

      case "2":
      setisActive(["o","active","o"]);
      setprojetstat(project2)

      break;

      case "3":
        setisActive(["o","o","active"])
      setprojetstat(project3)

        break;
    
  
    default:
      break;
  }

}


  return (
    <div className="barProjets">
      <nav>
        <p className={isActive[0]} id="1" onClick={changeWidthOfBeforeForSelected}>Tab 1</p>
        <p className={isActive[1]} id="2" onClick={changeWidthOfBeforeForSelected}>Tab 2</p>
        <p className={isActive[2]} id="3" onClick={changeWidthOfBeforeForSelected}>Tab 3</p>
      </nav>
       
       <div className="listProjets">
{
  projetstat.map((project, index) => {
    return (
      
      <div className="cardProjets" key={index}>
      <img src={project.imgUrl} alt={project.title} />
       <div className="titleProjets">
         <h4>{project.title}</h4>
         <span>{project.description}</span>
       </div>
        </div>
    )
  })
}</div>

    </div>
  )
}

export default BarProjets