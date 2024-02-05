import FanLetterForm from "components/FanLetterForm";
import FanLetterList from "components/FanLetterList";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import MemberContextProvider from "context/MemberContext";
import styled from "styled-components";

function Home() {
  return (
    <MemberContextProvider>
      <Container>
        <Header />
        <HomeMain>
          <FanLetterForm />
          <FanLetterList />
        </HomeMain>
        <Footer />
      </Container>
    </MemberContextProvider>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
