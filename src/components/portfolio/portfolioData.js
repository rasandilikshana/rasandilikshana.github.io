import Image1 from "../../../public/assets/img/portfolio/project-1.jpg";
import Image2 from "../../../public/assets/img/portfolio/project-2.jpg";
import Image3 from "../../../public/assets/img/portfolio/project-3.jpg";
import Image4 from "../../../public/assets/img/portfolio/project-4.jpg";
import Image5 from "../../../public/assets/img/portfolio/project-5.jpg";
import Image6 from "../../../public/assets/img/portfolio/project-6.jpg";
import Image7 from "../../../public/assets/img/portfolio/project-7.jpg";
import Image8 from "../../../public/assets/img/portfolio/project-8.jpg";
import Image9 from "../../../public/assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Portfolio project",
    image: Image1,
    tag: ["logo"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "US Client",
        language: "HTML, CSS, Js, Laravel",
        preview: "www.ceyloneze.com/",
        link: "https://ceyloneze.com/",
      },
    ],
  },
  {
    id: 2,
    type: "Youtube project",
    image: Image2,
    tag: ["video"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Youtube",
        client: "My Self",
        language: " AI image Generating",
        preview: "Beautelligence",
        link: "https://www.youtube.com/@Beautelligence",
      },
    ],
  },
  {
    id: 3,
    type: "Internal project",
    image: Image3,
    tag: ["logo"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "NCG Express",
        language: " Laravel, PHP, Bootstrap",
        preview: "search.ncgws.lk",
        link: "http://search.ncgws.lk",
      },
    ],
  },
  {
    id: 4,
    type: "national project",
    image: Image4,
    tag: ["logo",],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Migrants Safety Assuarance System",
        client: "Centre of Defence",
        language: " ASP.net, SQL Server",
        preview: "No Preview",
        link: "/",
      },
    ],
  },
  {
    id: 5,
    type: "graphic project",
    image: Image5,
    tag: ["graphic design"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Company Brochure",
        client: "Local",
        language: "Canva",
        preview: "No Preview",
        link: "/",
      },
    ],
  },
  {
    id: 6,
    type: "graphic project",
    image: Image6,
    tag: ["graphic design"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Company Thank You Card",
        client: "Patasalu",
        language: "Canva",
        preview: "No Preview",
        link: "/",
      },
    ],
  },
  {
    id: 7,
    type: "react project",
    image: Image7,
    tag: ["logo"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Udemy Course",
        language: "HTML, CSS, JS, React",
        preview: "Github",
        link: "https://github.com/rasandilikshana/The-Complete-Web-Developer-in-2023-Zero-to-Mastery-Udemy",
      },
    ],
  },
  {
    id: 8,
    type: "react project",
    image: Image8,
    tag: ["logo"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "My Self",
        language: "HTML, CSS, JS, React",
        preview: "Github",
        link: "https://github.com/rasandilikshana/CourseDiscription",
      },
    ],
  },
  {
    id: 9,
    type: "flutter project",
    image: Image9,
    tag: ["mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Moile Application",
        client: "My Self",
        language: "Flutter, Dart",
        preview: "Github",
        link: "https://github.com/rasandilikshana/BMI-Calculator",
      },
    ],
  },
];

export default PortfolioData;
