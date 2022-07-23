import { Col, Container, Row } from "react-bootstrap";

function Videolist({sideVideo}) {
  console.log(sideVideo)
  return (
    <Container>
      <Row>
        <Col sm={8}> 
         <img src={sideVideo.snippet.thumbnails.medium.url} width='150px' height='80px'  />
        </Col>
        <Col sm={4}><h5>{sideVideo.snippet.title}</h5></Col>
      </Row>
    </Container>
  );
}

export default Videolist;
