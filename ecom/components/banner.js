"use client"
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
const Banner = () => {
    return (
        <div>
         <Carousel>
         <Carousel.Item>
                  <Image
                     src="http://localhost:8000/uploads/5790796.jpg"
                     width={1920}
                      height={500}
                      alt="Picture of the author" />
                   <Carousel.Caption>
                    <h3>One slide label</h3>
                   </Carousel.Caption>
               </Carousel.Item>


               <Carousel.Item>
                  <Image
                     src="http://localhost:8000/uploads/5790796.jpg"
                     width={1920}
                      height={500}
                      alt="Picture of the author" />
                   <Carousel.Caption>
                    <h3>Two slide label</h3>
                   </Carousel.Caption>
               </Carousel.Item>


               <Carousel.Item>
                  <Image
                     src="http://localhost:8000/uploads/5790796.jpg"
                     width={1920}
                      height={500}
                      alt="Picture of the author" />
                   <Carousel.Caption>
                    <h3>Three slide label</h3>
                   </Carousel.Caption>
               </Carousel.Item>


               <Carousel.Item>
                  <Image
                     src="http://localhost:8000/uploads/5790796.jpg"
                     width={1920}
                      height={500}
                      alt="Picture of the author" />
                   <Carousel.Caption>
                    <h3>Foue slide label</h3>
                   </Carousel.Caption>
               </Carousel.Item>


            </Carousel>
        </div>
        
    )
}

export default Banner