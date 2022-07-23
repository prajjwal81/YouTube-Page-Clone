import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Searchbar from "./components/Searchbar";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoItem from "./components/VideoItem";
import SideVideoList from "./components/SideVideoList";
import youtube from "./api/Youtube";
import { useState, useEffect } from "react";

function App() {
  const [video, setVideo] = useState(""); 
  const firstVedio = video.length!=0 ? video[0]:null
  console.log (video)

  async function handleSubmit(searchTerm) {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyA4PQK_5OvKUGF23awvPPDB8sYdHCUOSCQ",
        q: searchTerm,
      },
    });
    setVideo(response.data.items);
  }

  useEffect(() => {
    console.log("onesubmit");
    handleSubmit("srk");
  }, []);
  return (
    <div className="App">
      <Container>
        <Searchbar OnSubmit={handleSubmit} />
        <Row>
          <Col sm={8}>
            <VideoItem oneVideo={firstVedio}/>
          </Col>

          <Col sm={4}>
            <SideVideoList videos={video} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
