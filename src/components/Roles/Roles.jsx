import React, { useState } from "react";
import { useEffect } from "react";
import './Roles.css'
import Img1 from "./../../images/nit1.jpg";
import Img2 from "./../../images/nit2.jpg";
import Img3 from "./../../images/nit3.jpg";
import Img4 from "./../../images/nit4.jpg";
import Img5 from "./../../images/nit5.jpg";
import Img6 from "./../../images/nit6.jpg";
function Role(){
  const imagesArray=[Img1,Img2,Img3,Img4,Img5,Img6]
  const [ImgSlide, setImgSlide] = useState(0);

  useEffect(() => {
     var i=0;
    const interval = setInterval(() => {
     i = i + 1;

     if (i === imagesArray.length) {
       i = 0;
     }
     setImgSlide(i);
    }, 2000);
  }, []);


    return(
      <>
      <div className="container">
 <div className="imageSlider2">
            <img src={imagesArray[ImgSlide]} alt="nitEvents" style={{width:'90%',maxHeight:'90vh'}}/>
            <span className="heading"><h1 style={{fontSize:'4rem',color:'black'}}>Alumni-Institute Relationship</h1></span>
         </div>
         </div>
         <div className="rolebox">
            <h2 style={{fontSize:'5rem',color:'red'}}>ROLE</h2>
<p2>There is a saying that ‘there are no better ambassadors for your institute/university than your alumni’. Alumni are both a pride as well as a resource for any institution. Having a supportive and an engaged alumnus/alumna forms a huge support system. There has to be a sustained communication system between the alumni and institution. If communication stops once graduates leave an institution, their understanding of the university/institution will become stale. Instead, they have to be kept informed so that they can remain engaged and keep abreast on the progress of the institute. Good alumni relationships bring many benefits to both the institution and the alumni. A strong institute-alumni bond, not only allows institutes to benefit from the skills and experience of pass out graduates by offering their support to the current students and to the institution, but also benefits the alumni in various ways. One of the ways it benefits the alumni is that it keeps the alumni connected and aware about each other and in the process the needy alumni could be identified and helped. Second benefit to the alumni is that while mentoring the current students or participating in the progress of the institute they realize their own growth too. One alumnus of City University London, in an interview, once said, “my mentoring journey has been very rewarding. I have learnt a lot about myself and my own career trajectory.” Third benefit to the alumni is that they get opportunities to fulfil their urge, desire, aspiration and hunger to ‘give back’ to their Alma Mater in multiple possible ways. This yearning and craving, found in most of the Alumni, to help their institute is due to their love, affection and loyalty towards their Alma Mater.

The alumni can help the institute in many ways. Some of the ways they can do this is listed as under:

1. They can come back and share their expertise and experiences with prospective current students.

2. They can support our recruitment policy. They can donate their valuable time to offer careers support to current students through innovative schemes such as Professional Mentoring Programme, work shadowing and Professional Networking Opportunities. These programmes will enhance the students’ experience and give them that competitive edge in today’s tough job market. They can facilitate the visits of bigger and better companies to visit the campuses for recruitment purposes.

3. Because of the dedication and gratitude many alumni have for the institution, they are often generous with fundraising efforts. These financial donations enable the institute to offer life-changing scholarships and bursaries to talented students who may otherwise have to give up their studies.

4. The alumni can also contribute for enhancing the infrastructure of the institute by way of sponsoring the development of a state-of-the-art laboratory, purchase of some essential and important major equipment or building of space. They can enable the institute to provide students with advanced facilities and equipment for teaching and pioneering research.

The most important process in building a good institute-alumni relationship is strengthening the communication between the institute and alumni and amongst the alumni themselves. In addition to conducting offline meets, effectively use of technology is a must to bring about effective communication. Such should be the communication with alumni that the alumni should feel and be convinced that their Alma Mater continues to think of them. We also need to use social media extensively for communication. The institute needs to share the successes of its alumni and be a part of their life. The alumni portal should have a dedicated alumni blog which could share the alumni stories, triumphs and news.</p2>

            </div>
      </>
    )
}
export default Role;