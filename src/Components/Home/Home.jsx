import React from 'react'
import style from "./Home.module.css"
import "./animation.css"

export default function Home ({ colorMode }) {
  return (
    <div id="home"

      className={"background"}   >
      <div id={"stars"} />
      <div id={"stars2"} />
      <div id={"stars3"} />
      <div
        id={style.home}
        style={{ color: colorMode === "light" ? "white" : "#e2e8f0" }}
      >
        <div className={style.img_txt_wrapper}

        >
          <img
            id={style.myImg}
            // src="https://i.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.webp"
            src="https://user-images.githubusercontent.com/74038190/212750672-2f3f2b50-c84f-4ed8-a60a-849ae69ff9df.gif"
            alt="logo"
          />
          <div id={style.myDetailsDiv}>
            <h1 id={style.myName}>
              <span id={style.info}>
                Hey,
                <img
                  style={{ width: "10%", display: "inline" }}
                  src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                  alt=""
                />
              </span>
              <br /> <span id={style.info}> I am Suhail Khan</span>
            </h1>
            <h3 id={style.title}>Full Stack Web Developer</h3>
          </div>
        </div>
        <div className={style.quote}>
          <img
            src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
