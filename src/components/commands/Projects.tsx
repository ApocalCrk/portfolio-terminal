import { useContext, useEffect, useState } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ListProjectLink,
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
        return;
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "view", ["1", "2", "3", "4", "5", "6", "7", "8", "9"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Here are some of my projects that I have worked on.
      </ProjectsIntro>
      {projects.map(({ id, title, desc, githubUrl, url }) => (
        <ProjectContainer key={id}>
          <a href={url} target="_blank" rel="noreferrer" 
            style={{textDecoration: 'none', color: 'inherit'}}>
            <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          </a>
          <ProjectDesc>{desc}</ProjectDesc>
          {/* check if the githuburl is string or array */}
          {typeof githubUrl === "string" ? (
            <ListProjectLink>
              <a href={githubUrl} target="_blank" rel="noreferrer" 
                style={{textDecoration: 'none', color: 'inherit'}}>
                Source Code
              </a>
              <a href={url} target="_blank" rel="noreferrer" 
                style={{textDecoration: 'none', color: 'inherit'}}>
                View Project
              </a>
            </ListProjectLink>
          ) : (
            <ListProjectLink key={title}>
              {githubUrl.map(({ title, url }) => (
                  <a href={url} target="_blank" rel="noreferrer" key={title}
                    style={{textDecoration: 'none', color: 'inherit'}}>
                    {title}
                  </a>
              ))}
              <a href={url} target="_blank" rel="noreferrer" 
                style={{textDecoration: 'none', color: 'inherit'}}>
                View Project
              </a>
            </ListProjectLink>
          )}
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Information and Register Website for Edu Green Indonesia",
    desc: "A website that contains information about Edu Green Indonesia and can be used to register as a member of Edu Green Indonesia.",
    githubUrl: "https://github.com/ApocalCrk/edugreenind",
    url: "https://edugreenindonesia.com/",
  },
  {
    id: 2,
    title: "Events Management Register for Informatics Festival 11",
    desc: "A website that contains information about the events in Informatics Festival 11 and can be used to register as a participant of the event.",
    githubUrl: "https://github.com/HIMAFORKA-UAJY/ifest-dash",
    url: "https://ifest-dash.noturminesv.my.id/",
  },
  {
    id: 3,
    title: "Events Management Register for Informatics Festival 10",
    desc: "A website that contains information about the events in Informatics Festival 10 and can be used to register as a participant of the event.",
    githubUrl: "https://github.com/HIMAFORKA-UAJY/ifest-dash",
    url: "https://ifest-dash.noturminesv.my.id/",
  },
  {
    id: 4,
    title: "HIMAFORKA Mobile App",
    desc: "A mobile application that contains information about HIMAFORKA UAJY",
    githubUrl: "https://github.com/ApocalCrk/himaforka",
    url: "https://github.com/ApocalCrk/himaforka"
  },
  {
    id: 5,
    title: "SIATMA Mobile (unofficial)",
    desc: "A mobile application that contains information about student's academic data in UAJY",
    githubUrl: "https://github.com/ApocalCrk/new_siatma",
    url: "https://github.com/ApocalCrk/siatma-release"
  },
  {
    id: 6,
    title: "Gimme Mobile App",
    desc: "A mobile application that can be used to find nearby gym and do some exercises",
    githubUrl: "https://github.com/ApocalCrk/gimme",
    url: "https://gimme-admin.vercel.app/dashboard"
  },
  {
    id: 7,
    title: "e-perlib",
    desc: "A website that can be used to borrow books by scanning the QR code of the book for the library in UAJY",
    githubUrl: "https://github.com/ApocalCrk/eperlib",
    url: "https://eperlib.noturminesv.my.id/"
  },
  {
    id: 8,
    title: "Competency Test Website for Public Complaint Service",
    desc: "A website that can be used to do competency test for public complaint service",
    githubUrl: "https://github.com/ApocalCrk/ukk_complaint_service",
    url: "https://ukk.noturminesv.my.id/"
  },
  {
    id: 9,
    title: "Atma Kitchen Application",
    desc: "Atma Kitchen is a multifaceted food ordering platform offering cakes, snacks, and beverages.",
    url: "#",
    githubUrl: [
      {
        title: "Backend",
        url: "https://github.com/siwakasen/backend_p3l"
      },
      {
        title: "Frontend",
        url: "https://github.com/siwakasen/frontend_p3l"
      },
      {
        title: "Mobile",
        url: "https://github.com/siwakasen/mobile_p3l"
      }
    ]
  },
  {
    id: 10,
    title: "Community Web Platform Development",
    desc: "A website that contains information about Padukuhan Ngasem",
    url: "https://ngasem.vercel.app/",
    githubUrl: [
      {
        title: "Source Code",
        url: "https://github.com/ApocalCrk/padukuhan-ngasem"
      }
    ]
  },
  {
    id: 11,
    title: "Weather Prediction System with AI-based Crop Recommendations",
    desc: "Web-based platform to optimize agricultural yields for farmers in Yogyakarta through AI driven solutions and accurate weather forecasts",
    url: "https://mahitala-re.vercel.app/",
    githubUrl: [
      {
        title: "Backend",
        url: "https://github.com/ApocalCrk/mahitala-backend"
      },
      {
        title: "Frontend",
        url: "https://github.com/ApocalCrk/mahitala"
      },
      {
        title: "Machine Learning",
        url: "https://github.com/ApocalCrk/mahitala-ml"
      }
    ]
  }
];

export default Projects;
