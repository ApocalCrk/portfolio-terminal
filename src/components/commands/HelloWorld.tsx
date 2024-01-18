import React from "react";
import { Cmd } from "../styles/HelloWorld.styled";
import { Wrapper } from "../styles/Output.styled";

const HelloWorld: React.FC = () => {
  return (
    <Wrapper data-testid="HelloWorld">
      <h1>🌟 Hello, Future Collaborator! 🚀</h1>
      <br />
      <p>
        Welcome aboard, stargazer! I'm <Cmd>Ferdy Firmansyah</Cmd>, your friendly coding companion from the enchanting realms of Yogyakarta, Indonesia.
      </p>
      <br />
      <p>
        🧙‍♂️ As a full-stack & mobile spellcaster, I weave digital dreams into reality. Ready to embark on an epic coding quest with me?
      </p>
      <br />
      <p>
        ✨ Behold the power of <Cmd>help</Cmd>, and watch the magic unfold before your very eyes!
      </p>
      <br />
      <p>
        PS: I thrive on coffee, creativity, and cosmic vibes. Let's create something extraordinary together! 🌈✨
      </p>
    </Wrapper>
  );
};

export default HelloWorld;
