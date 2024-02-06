import FanLetterForm from "components/FanLetterForm";
import FanLetterList from "components/FanLetterList";
import Header from "components/Header";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Header />
      <FanLetterForm />
      <FanLetterList />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
