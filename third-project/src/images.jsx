import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';



const Img1 = () => {
  return ( 
    <div className='w-56 h-56 md:mr-56'>
      <img src={img1} alt="My image" />
    </div>
   );
}
 
const Img2 = () => {
  return ( 
    <div>
      <img src={img2} alt="My image" />
    </div>
   );
}
 
const Img3 = () => {
  return ( 
    <div>
      <img src={img3} alt="My image" />
    </div>
   );
}
 
const Img4 = () => {
  return ( 
    <div>
      <img src={img4} alt="My image" />
    </div>
   );
}
const Img5 = () => {
  return ( 
    <div>
      <img src={img5} alt="My image" />
    </div>
   );
}
 
export {Img1, Img2 ,Img3, Img4, Img5}
