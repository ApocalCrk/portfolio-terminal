import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Ferdy Firmansyah</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack & mobile developer</HighlightAlt> based in Yogyakarta, Indonesia.
      </p>
      <p>
        I'm currently studying at <HighlightAlt>Universitas Atma Jaya Yogyakarta</HighlightAlt> majoring in <HighlightAlt>Informatics Engineering</HighlightAlt>.
      </p>
      <p>
        I'm currently working on <HighlightAlt>my personal projects</HighlightAlt> and <HighlightAlt>my college projects</HighlightAlt>
      </p>
    </AboutWrapper>
  );
};

export default About;
