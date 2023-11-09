import React from "react";

const experienceContent = [
  {
    year: "   2023 July - Present",
    position: " SOFTWARE ENGINEER - INTERN",
    compnayName: "Zuse Technologies",
    details: `  Currently contributing to innovative projects, where I've gained hands-on experience and honed my skills in software engineering.`,
  },
  {
    year: "2023 Jan - 2023 June",
    position: " TRAINEE WEB DEVELOPER",
    compnayName: "Centre for Defence Research and Development",
    details: `Started my journey as a Trainee Web Developer, learning the ropes and laying the foundation for my career in web development.`,
  },
  {
    year: "2019 Feb - 2020 Jan",
    position: " TEMPORARY TELLER / CASHIER",
    compnayName: "People’s Bank",
    details: `Took on a temporary role as a Teller/Cashier, where I gained valuable insights into financial operations and customer interactions.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
