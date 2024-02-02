import FanLetterForm from "components/FanLetterForm";
import FanLetterList from "components/FanLetterList";
import Header from "components/Header";
import MemberContextProvider from "context/MemberContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Home() {
  return (
    <MemberContextProvider>
      <Container>
        <Header />
        <FanLetterForm />
        <FanLetterList />
      </Container>
    </MemberContextProvider>
  );
}

export default Home;
