import Card2 from "./Card2";
import radio from "../assets/radio.png";
import time from "../assets/time.png";
import quizz from "../assets/quizz.png";

const Projects = () => {
  return (
    <div className="min-h-screen mt-10 md:mt-20">
      <div className="flex flex-col justify-center items-center">
        <div className="text-lg md:text-3xl font-bold">My projects</div>
        <h1 className="text-sm md:text-2xl">
          A selection of the things I´ve built so far
        </h1>
        <div className="pt-12 pb-12 md:pt-16 md:pb-16 flex flex-col gap-6 md:gap-0 md:flex-row text-black">
          <Card2
            img={radio}
            title={"Radio player with React"}
            text={
              "In this project I used the API of Sveriges Radio (Swedish Radio) to fetch information about the radio channels and fetch playable audio stream urls to create a working radio player."
            }
            tech={"HTML, Tailwind, Javascript, React"}
            livePreview={"https://radio-beta.vercel.app/"}
            viewCode={"https://github.com/Chasacademy-Camilla-Sundbom/radio"}
          />
          <Card2
            img={quizz}
            title={"Quiz with Redux"}
            text={
              "This project is a quiz, where you also can create your own questions in the admin part. The focus in this project was to use global state with Redux and hooks-for-redux."
            }
            tech={"HTML, Tailwind, Javascript, React, Redux"}
            livePreview={"https:/quizz-redux-five.vercel.app/"}
            viewCode={"https://github.com/Chasacademy-Camilla-Sundbom/quizz-redux"}
          />
          <Card2
            img={time}
            title={"World Time with React"}
            text={
              "This is a web page that shows what time it is in different cities of the world. In this project, among other things, React-router-dom and useParams are used."
            }
            tech={"HTML, Tailwind, Javascript, React"}
            livePreview={"https://chas-world-time-website.vercel.app/"}
            viewCode={
              "https://github.com/Chasacademy-Camilla-Sundbom/chas_worldTimeWebsite"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
