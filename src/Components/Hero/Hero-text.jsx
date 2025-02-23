import "./Hero-text.css";

// const HeroText = ({name,profession}) => {
//   return (

//     <div className="col-7 Hero-flex-text">
//
//         <h2 className="mb-3">I am,</h2>
//         <h1 className=" Hero-font mb-3">{name}</h1>
//         <h1 className="Hero-font ">{profession}</h1>
//         {/* <h1 className="Hero-font mb-3">I am Karthik Ramesh</h1> */}
//         {/* <h1 className="Hero-font mb-3">I am Karthik Ramesh</h1> */}
//       </div>
//      </div>

//   );
// };
const HeroText = ({ name, profession, isActive }) => {
  return (
    <div
      className={`hero-text-content ${
        isActive ? "active" : ""
      } col-6 Hero-flex-text`}
    >
      <div className="">
        <h2 className="mb-3">I am,</h2>
        <h2 className="hero-name Hero-font mb-3">{name}</h2>
        <p className="hero-profession Hero-font">{profession}</p>
      </div>
    </div>
  );
};
export default HeroText;
