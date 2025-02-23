
import './Hero-image.css';
// const HeroImg=({image})=>{
//     return (<>
//         <div className="Hero-imgs col-5">
//               <img src={image} alt="Karthik"></img>
//             </div>
//     </>)
// }
const HeroImg = ({ image, isActive }) => {
    return (
    //   <div className="col-md-6">
        <div className={`hero-img-container  ${isActive ? 'active' : ''} Hero-imgs col-6` }>
          <img src={image} alt="" className="hero-image" />
        </div>
    //   </div>
    );
  };
export default HeroImg;