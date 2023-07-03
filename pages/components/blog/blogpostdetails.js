import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import PageHeader from '../../../shared/layout-components/pageheader/PageHeader';
import PerfectScrollbar from 'react-perfect-scrollbar'
import Link from "next/link";
import Seo from '@/shared/layout-components/seo/seo';


const ContentScrollbar = () => {
  return (
  <div >
      <Seo title="Journal Details"/>

    <PageHeader titles="My Journal" active="Day 1 - Journal" items={['My Journal']} /> 

    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col sm={12} md={12} lg={12} xl={12}>
      
        <Card>
        
          <Card.Header>
            <Card.Title>Day 1 - My Journal</Card.Title>
            <Card.Title style={{ marginLeft: 'auto' }}>09 Dec 2017</Card.Title>
          </Card.Header>
          
          <Card.Body className="scroll">
            {/* <!-- content --> */}
            <PerfectScrollbar className='h-400 position-inherit'>  
            <div className="">
            
              <p>Today was a day that I will cherish forever—a day that brought me immense joy, tranquility, and a renewed sense of purpose. From the moment the sun peeked over the horizon to its gentle descent, every hour was filled with unforgettable experiences that left an indelible mark on my soul.</p>
              <p> The morning began with a symphony of birdsong that serenaded me awake. Eager to embrace the day, I stepped outside and felt the cool, crisp air embrace me. The sun's rays cast a golden hue on everything it touched, creating a magical ambiance that set the tone for the day ahead.</p>
              <p>omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,</p>
              <p>I decided to embark on a hiking adventure to immerse myself in nature's grandeur. The trail unfolded before me like a hidden pathway to paradise. As I ventured deeper into the woods, I found myself surrounded by towering trees, their leaves rustling in harmony with the gentle breeze. The scent of wildflowers wafted through the air, rejuvenating my senses and igniting a deep appreciation for the wonders of the natural world.</p>
              <p>Reaching the summit, I was rewarded with a breathtaking view that stretched as far as the eye could see. Mountains majestically pierced the skyline, and a pristine lake shimmered beneath the radiant sun. I sat there, soaking in the beauty and tranquility, feeling a profound connection with the universe.</p>
              <p>After the hike, I visited a local art gallery, a haven of creativity. Each stroke of the brush and every sculpture conveyed emotions and stories that resonated within me. I found myself lost in the intricacies of each piece, contemplating the deeper meaning behind the artist's vision. It was a reminder of the power of human expression and the ability of art to touch our souls.</p>
              <p>In the evening, I reunited with loved ones, sharing laughter, stories, and a delicious meal. We savored every bite, cherishing the simple act of breaking bread together and basking in the warmth of companionship. The conversation flowed effortlessly, filling the room with a sense of love and belonging.</p>
              <p>As the day drew to a close, I sat beneath a star-studded sky, marveling at the vastness of the universe. Each twinkling star seemed to whisper secrets of the cosmos, reminding me of the infinitesimal yet significant place I occupy in this grand tapestry of life.</p>
              <p>Reflecting on this day well spent, I realized that life's true riches lie not in material possessions but in the experiences that fill our hearts. Today, I connected with nature, immersed myself in art, and shared love with those dear to me. It was a day of nourishment for my soul, a reminder of the beauty and magic that surround us every day.</p>
              <p>And as I pen these final words, I am overwhelmed with gratitude for this remarkable day, forever etched in the depths of my memory. I am reminded to embrace each day with open arms, seeking the extraordinary within the ordinary, for it is through such days that we truly come alive.</p>
              
            </div>
            </PerfectScrollbar>
          </Card.Body>
          
        </Card>
        
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
  </div>
)
};
ContentScrollbar.layout = "Contentlayout"
export default ContentScrollbar;
