import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <div className="mt-12 md:mt-36 md:w-2/4 md:ml-36 flex justify-center md:items-left">
      <div>
        <div className="text-lg md:text-4xl font-bold">About me</div>
        <p className="mt-4 md:mt-6 md:text-xl pb-8">
          Stockholm based aspiring Front-end mobil & Webb student, I like to create
          beautiful and functional websites. This is my portfolio I hope you will
          enjoy it.
        </p>
        <div className="flex flex-col md:flex-row">
          <a
            className="underline cursor-pointer"
            href={"https://se.linkedin.com/in/camilla-sundbom/"}
            target="_blank"
          >
            <div className="flex mr-4 gap-1 items-center">
              <AiFillLinkedin className="icon" />
              My LinkedIn profile
            </div>
          </a>
          <a
            className="underline cursor-pointer"
            href={"https://github.com/Chasacademy-Camilla-Sundbom"}
            target="_blank"
          >
            <div className="flex mr-4 gap-1 items-center">
              <AiFillGithub className="icon" />
              My Github page
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
