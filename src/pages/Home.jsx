import FanLetterForm from "components/FanLetterForm";
import FanLetterList from "components/FanLetterList";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
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
        <Footer />
      </Container>
    </MemberContextProvider>
  );
}

export default Home;
