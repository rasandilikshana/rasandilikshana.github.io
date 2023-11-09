import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/rasan.dilikshana",
  },
  { iconName: "fa fa-linkedin", link: "https://www.linkedin.com/in/rasan-dilikshana/" },
  {
    iconName: "fa fa-google",
    link: "mailto:rasandilikshana@gmail.com",
  },
  { iconName: "fa fa-github", link: "https://github.com/rasandilikshana" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
