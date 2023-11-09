import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Rasan", hasColor: "" },
  { meta: "last name", metaInfo: "Dilikshana", hasColor: "" },
  { meta: "Age", metaInfo: "24 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Sri Lankan", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Matara", hasColor: "" },
  { meta: "phone", metaInfo: "+94702294951", hasColor: "" },
  { meta: "Email", metaInfo: "rasandilikshana@gmail.com", hasColor: "" },
  { meta: "LinkedIn", metaInfo: "rasan-dilikshana", hasColor: "" },
  { meta: "langages", metaInfo: "Sinhala, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
