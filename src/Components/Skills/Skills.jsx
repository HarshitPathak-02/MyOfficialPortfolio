import "./skills.css";

import C from "../../Assets/css.png";
import H from "../../Assets/html.png";
import R from "../../Assets/react.png";
import N from "../../Assets/node.png";
import E from "../../Assets/express.png";
import Mongo from "../../Assets/mongo.png";
import JS from "../../Assets/js.png";
import TS from "../../Assets/typescript.svg";
import Redux from "../../Assets/redux.png";
import Git from "../../Assets/git.png";
import AwsEC2 from "../../Assets/awsec2.png";
import AwsS3 from "../../Assets/awss3.webp";

import Chart from "../../Assets/chart.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  const skills = [
    {
      name: "HTML5",
      icon: H,
    },
    {
      name: "CSS3",
      icon: C,
    },
    {
      name: "JavaScript",
      icon: JS,
    },
    {
      name: "TypeScript",
      icon: TS,
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "React.js",
      icon: R,
    },
    {
      name: "Redux Toolkit",
      icon: Redux,
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Node.js",
      icon: N,
    },
    {
      name: "Express.js",
      icon: E,
    },
    {
      name: "MongoDB",
      icon: Mongo,
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Sequelize",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
    },
    {
      name: "REST APIs",
      text: "REST",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Nginx",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    },
    {
      name: "Git",
      icon: Git,
    },
    {
      name: "GitHub Actions",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
    },
    {
      name: "AWS EC2",
      icon: AwsEC2
    },
    {
      name: "AWS S3",
      icon: AwsS3
    },
  ];

  useGSAP(() => {

    gsap.fromTo(
      ".skills_desc h1, .skills_desc p",
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.1,
        scrollTrigger: ".skills_container",
      }
    );

    gsap.fromTo(
      ".skills_box",
      {
        x: 1000,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: ".skills_container",
      }
    );

    gsap.fromTo(
      ".chart",
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: ".chart",
      }
    );

  });

  return (
    <div id="skills">

      <div className="skills_container">

        <div className="skills_desc">

          <div>
            <h1>My Skills</h1>
          </div>

          <div>
            <p>
              Technologies and tools I work with to build
              full-stack applications.
            </p>
          </div>

          <br />

          <div className="skills_boxes">

            {skills.map((skill, index) => (
              <div
                className="skills_box"
                key={skill.name}
                title={skill.name}
              >
                {skill.icon ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                  />
                ) : (
                  <span className="skills_text">
                    {skill.text}
                  </span>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>

      <div>
        <img
          className="chart"
          src={Chart}
          alt="Technical skills"
          style={{
            width: "100rem",
            marginLeft: "-5rem",
          }}
        />
      </div>

    </div>
  );
};

export default Skills;