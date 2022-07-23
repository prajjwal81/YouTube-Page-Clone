import Videolist from "./VideoList";

function SideVideoList({videos}) {
  // console.log("hi",videos)
  if(videos)
  return (
    <>
      {videos.map((vid,idx) => <Videolist key={idx} sideVideo={vid} /> )}
    </>
  );
}
export default SideVideoList;
