import GlassyCard from "./GlassyCard";
import MERN from '../../assets/Images/Services-icons/programming-coding.png'
import react from "../../assets/Images/Services-icons/atom.png";
import wordpress from "../../assets/Images/Services-icons/social.png"

const title_MERN = "MERN Application"
const title_react = "React Application"
const title_wordpress = "WordPress Application"
const description_MERN = "WE develop full-stack web applications using the MERN (MongoDB, Express.js, React, Node.js) stack, building scalable backends and interactive frontends. Our work includes creating RESTful APIs, managing databases, and delivering responsive, high-performance user experiences."
const description_react = "We specialize in building fast, scalable, and interactive web applications using React. Our focus is on creating seamless user experiences with clean, maintainable code. From dynamic single-page applications to efficient state management with Redux or Context API, we ensure smooth performance and responsiveness."
const description_wordpress = "We offer expert WordPress development services to help businesses create stunning, high-performance websites tailored to their needs. Whether you're looking for a custom theme, or a full-scale website, We ensures seamless functionality, responsive design, and optimized performance."

function Services() {
    return (
        <>
            <div className="container">
                <div className="text-center text-color">
                    <h1 className="display-4">Services We Provide</h1>
                </div>
                <div className="row g-4">
                    <div className="col-12 col-lg-4 d-flex justify-content-center overflow-hidden">
                        <GlassyCard title={title_MERN} description={description_MERN} logo={MERN} type={"MERN"}/>
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center overflow-hidden">
                        <GlassyCard title={title_react} description={description_react} logo={react} type={"react"}/>
                    </div>
                    <div className="col-12  col-lg-4 d-flex justify-content-center overflow-hidden">
                        <GlassyCard title={title_wordpress} description={description_wordpress} logo={wordpress} type={'wordpress'}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
