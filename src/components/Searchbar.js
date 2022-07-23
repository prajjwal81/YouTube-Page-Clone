// here my question is that we hae not written a code for button which is on the searchbar how it is working without code
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import {useState} from 'react';


function Searchbar({OnSubmit}) {
  const [searchTerm, setSearchTerm] = useState('')


  const searchHandler = () =>{
    OnSubmit(searchTerm)
  }


   
  return (
    <Navbar bg="dark" expand="lg" className="my-3">
      <Container fluid >
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" height='25px'/>
        <div>YouTube </div>
        <Form className="d-flex">
          <Form.Control
            type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
            className="me-2"
            />
           <Button variant="outline-primary" onClick={searchHandler}>Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Searchbar;
// AIzaSyA4PQK_5OvKUGF23awvPPDB8sYdHCUOSCQ 
        

