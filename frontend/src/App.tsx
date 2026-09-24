import { Container, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Stack>
        <Navbar />
        <Container>
          {/* <TodoForm />
          <TodoList /> */}
        </Container>
      </Stack>
    </>
  );
}

export default App;
