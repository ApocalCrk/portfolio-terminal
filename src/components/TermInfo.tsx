import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>noturminesv</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
