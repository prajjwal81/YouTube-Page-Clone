import { Card } from "react-bootstrap";

function VideoItem({oneVideo}) {
  // const videoURL = `https://www.youtube.com/embed/${oneVideo.id.videoID}`
  return (
    <Card style={{ width: "18rem" }}>
      <iframe
      // src={videoURL}
        width="750px"
        height="450px"
      ></iframe>{" "}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default VideoItem;
