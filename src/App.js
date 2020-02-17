import React from "react";
import EventCalculator from "./components/EventCalculator";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <Container>
      <h1>XDU Event Calculator</h1>
      <EventCalculator />
    </Container>
  );
};

export default App;
