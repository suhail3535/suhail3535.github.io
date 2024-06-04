import React from "react";
import style from './Static.module.css'
import "../Home/animation.css"
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function Static({ colorMode }) {

  return (
    <section
      className={style.services_experience}
      data-aos-mirror="true"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      {/* className=background" */}
      <div id={"stars"} />
      <div id={"stars2"} />
      <div id={"stars3"} />
      <div className="container" id="coding">
        <div className={style.experiences} id={style.experiences}>
          <div className={style.experience}>
            <h3 >1200+</h3>
            <p >Hrs Coding</p>
          </div>
          <div className={style.portfolios}>
            <div
              data-aos-mirror="true"
              data-aos="flip-right"
              data-aos-duration="3000"
              className={style.portfolio}
              style={{
                backgroundColor: colorMode === "light" ? "black" : "white",
                fontFamily: "Bree Serif, serif",
                borderRadius: "5px",
              }}
            >
              <h4 style={{color:colorMode==="light"?"white":"black"}}>30+</h4>
              <h6 style={{color:colorMode==="light"?"white":"black"}}>Mini Projects</h6>
            </div>
            <div
              data-aos-mirror="true"
              data-aos="flip-right"
              data-aos-duration="3000"
              className={style.portfolio}
              style={{
                backgroundColor: colorMode === "light" ? "black" : "white",
                fontFamily: "Bree Serif, serif",
                borderRadius: "5px",
              }}
            >
              <h4 style={{color:colorMode==="light"?"white":"black"}} >05+</h4>
              <h6 style={{color:colorMode==="light"?"white":"black"}}>Major Projects</h6>
            </div>
            <div
              data-aos-mirror="true"
              data-aos="flip-left"
              data-aos-duration="3000"
              className={style.portfolio}
              style={{
                backgroundColor: colorMode === "light" ? "black" : "white",
                fontFamily: "Bree Serif, serif",
                borderRadius: "5px",
              }}
            >
              <h4 style={{color:colorMode==="light"?"white":"black"}} >300+</h4>
              <h6 style={{ color: colorMode === "light" ? "white" : "black" }}>DSA Problem</h6>
            </div>
            <div
              data-aos-mirror="true"
              data-aos="flip-left"
              data-aos-duration="3000"
              className={style.portfolio}
              style={{
                backgroundColor: colorMode === "light" ? "black" : "white",
                fontFamily: "Bree Serif, serif",
                borderRadius: "5px",
              }}
            >
              <h4  style={{color:colorMode==="light"?"white":"black"}}>200+</h4>
              <h6 style={{color:colorMode==="light"?"white":"black"}}>Hrs Soft Skills</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Static;


