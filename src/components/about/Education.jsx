import React from "react";

const educationContent = [
  {
    year: "2020 - PRESENT",
    degree: "BACHELOR DEGREE",
    institute: "UNIVERSITY OF COLOMBO",
    details: `  Currently pursuing a Bachelor of Information and
    Communication Technology Honours degree programme.`,
  },
  {
    year: "2018",
    degree: "G.C.E A/L Examination",
    institute: "MAHINDA RAJAPAKSHA COLLAGE, MATARA",
    details: `Achieved a District Rank of 16 with a Z Score of 2.0831.
     Subject scores: Information & Communication Technology (ICT) - A, Engineering Technology (ET) - B, Science For Technology (SFT) - B.`,
  },
  {
    year: "2015",
    degree: "G.C.E A/L Examination",
    institute: "MR/PUHULWELLA NATIONAL COLLAGE",
    details: `Obtained grades: A-3, B-1, C-5`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
