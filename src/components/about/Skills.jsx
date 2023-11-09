import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "HTML" },
  { skillClass: "p58", skillPercent: "58", skillName: "JAVASCRIPT" },
  { skillClass: "p89", skillPercent: "89", skillName: "CSS" },
  { skillClass: "p62", skillPercent: "62", skillName: "PHP" },
  { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p55", skillPercent: "55", skillName: "REACT" },
  { skillClass: "p52", skillPercent: "52", skillName: "LARAVEL" },
  { skillClass: "p58", skillPercent: "58", skillName: "SQL" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
