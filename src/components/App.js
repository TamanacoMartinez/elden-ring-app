import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Creatures from "../elden-ring/components/Creatures";
import IndividualCreature from "../elden-ring/components/IndividualCreature";


function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
           <Route path="/" element={<Creatures/>}/>
           <Route path="/:id" element={<IndividualCreature/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;