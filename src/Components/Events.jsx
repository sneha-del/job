import React from 'react'


import { Carousel } from 'react-carousel-minimal';

function Events() {
 const data = [
    {
      image: "https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=",
      caption: "Event1"
    },
    {
      image: "https://media.istockphoto.com/id/487667109/photo/group-of-business-people-listening-to-a-speech.jpg?s=612x612&w=0&k=20&c=_LC6lnT9FYsRafNMkuV1kz7HT58eSVdyVucFQgZnTVQ=",
      caption: "Event2"
    },
    {
      image: "https://media.istockphoto.com/id/1058909060/photo/blurred-business-people.jpg?s=612x612&w=0&k=20&c=Wrimaz8ZDz7GnjKeW15D-U5vBcBmgocmn7uHC-eFGYw=",
      caption: "Event3"
    },
    {
      image: "https://media.istockphoto.com/id/1382269943/photo/group-of-diverse-business-people-on-panel-discussion.jpg?s=612x612&w=0&k=20&c=y3vc8xBUK1xejzt3kQ_5ukLi6cYil8c4hIQa7uD5rCI=",
      caption: "Event4"
    },
    {
      image: "https://media.istockphoto.com/id/471912366/photo/crowd-watching-a-performance-at-cyberhub-gurgaon.jpg?s=612x612&w=0&k=20&c=HwuymrFDuJYX9hd4uHlk57QfcbxtOiFFB60-cEu_gEA=",
      caption: "Event5"
    },
    {
      image: "https://media.istockphoto.com/id/1141462780/photo/and-the-good-news-is-theres-more-good-news.jpg?s=612x612&w=0&k=20&c=DPNvFBREIks3jCYe-v4QXKvTJOLKRnBbztDqRK3DG-M=",
      caption: "Event6"
    },
    {
      image: "https://media.istockphoto.com/id/894635514/photo/he-makes-success-sound-easy.jpg?s=1024x1024&w=is&k=20&c=QlsgXFRX1tc0DechiAFhgH_Cs_qaH1MuZxYMIwbgr84=",
      caption: "Event7"
    },
    {
      image: "https://media.istockphoto.com/id/600072788/photo/delegates-networking-at-conference-drinks-reception.jpg?s=612x612&w=0&k=20&c=JKuQgsxkY4uwf_yoy1IXJAplqUZqaM_0guqHGmUoXdM=",
      caption: "Event8"
    },
    {
      image: "https://media.istockphoto.com/id/1181250359/photo/business-people.jpg?s=612x612&w=0&k=20&c=1DFEPJdcvlhFdQYp-hzj2CYXXRn-b6qYoPgyOptZsck=",
      caption: "Event9"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" , backgroundColor:" #05529aeb",padding:"20px"}}>
        <h2>BookXpert Events</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, alias!</p>
        <div style={{
          padding: "0 20px",
         
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "100px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Events;
