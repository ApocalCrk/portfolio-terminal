import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here are my education background:</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "S. Kom (Bachelor of Computer Science)",
    desc: "Atma Jaya Yogyakarta University | 2021 - Present",
  },
  {
    title: "Vocational High School",
    desc: "SMKS Hasanah Pekanbaru | 2018 - 2021",
  }
];

export default Education;
