import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
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
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "view", ["1", "2", "3", "4", "5", "6", "7", "8"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Here are some of my projects that I have worked on.
      </ProjectsIntro>
      {projects.map(({ id, title, desc, url }) => (
        <ProjectContainer key={id}>
          <a href={url} target="_blank" rel="noreferrer" 
            style={{textDecoration: 'none', color: 'inherit'}}>
            <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          </a>
          <ProjectDesc>{desc}</ProjectDesc>
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
    url: "https://edugreenindonesia.com/",
  },
  {
    id: 2,
    title: "Events Management Register for Informatics Festival 11",
    desc: "A website that contains information about the events in Informatics Festival 11 and can be used to register as a participant of the event.",
    url: "https://github.com/ApocalCrk/ifest11"
  },
  {
    id: 3,
    title: "Events Management Register for Informatics Festival 10",
    desc: "A website that contains information about the events in Informatics Festival 10 and can be used to register as a participant of the event.",
    url: "https://github.com/ApocalCrk/dash_ifest"
  },
  {
    id: 4,
    title: "HIMAFORKA Mobile App",
    desc: "A mobile application that contains information about HIMAFORKA UAJY",
    url: "https://github.com/ApocalCrk/himaforka"
  },
  {
    id: 5,
    title: "SIATMA Mobile (unofficial)",
    desc: "A mobile application that contains information about student's academic data in UAJY",
    url: "https://github.com/ApocalCrk/siatma-release"
  },
  {
    id: 6,
    title: "Gimme Mobile App",
    desc: "A mobile application that can be used to find nearby gym and do some exercises",
    url: "https://github.com/ApocalCrk/gimme"
  },
  {
    id: 7,
    title: "e-perlib",
    desc: "A website that can be used to borrow books by scanning the QR code of the book for the library in UAJY",
    url: "https://thrush-crucial-frog.ngrok-free.app/"
  },
  {
    id: 8,
    title: "Competency Test Website for Public Complaint Service",
    desc: "A website that can be used to do competency test for public complaint service",
    url: "https://github.com/ApocalCrk/ukk_complaint_service"
  }
];

export default Projects;
