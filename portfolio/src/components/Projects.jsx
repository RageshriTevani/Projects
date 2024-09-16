import Project_prop from "./Project_prop";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { SiReact, SiTailwindcss , SiHtml5, SiMui, SiBootstrap, SiCss3, SiJavascript, SiVite } from "react-icons/si";
import { FaMdb } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="projects" className="Project p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl">Projects</h1>

        <div className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1" data-aos="zoom-out-down"
        >

{/* portfolio */}
        <Project_prop 
          title="Portfolio Website" 
          para="Personal portfolio website created with react with tailwind css" 
          github_link=""
          link=""
            react={
              <Tooltip title="ReactJs" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip> 
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />

{/* psd to html */}
        <Project_prop 
          title="PSD to HTML" 
          para="Personal portfolio website created with react with tailwind css" 
          github_link=""
          link=""
            react={
              <Tooltip title="ReactJs" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip> 
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />

{/* figma to html */}
        <Project_prop 
          title="Figma to HTML" 
          para="Book a cabin to make your day memorable while travelling" 
          github_link="https://github.com/RageshriTevani/Projects/tree/master/project-1%20figma%20to%20html"
          link=""
          css3={
              <Tooltip title="Css3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="Javascript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip> 
            }
            bootstrap={
              <Tooltip title="Bootstrap" arrow>
                <IconButton>
                  <SiBootstrap className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />

{/* fabindia */}
        <Project_prop 
          title="Online shopping website (fabindia-website)" 
          para="Buy trending fashion wear and collection by just one click!" 
          github_link="https://github.com/RageshriTevani/Projects/tree/master/fabindia-website"
          link=""
            html5={
              <Tooltip title="HTML5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip> 
            }
            css3={
              <Tooltip title="Css3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            react={
              <Tooltip title="ReactJs" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip> 
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            bootstrap={
              <Tooltip title="Bootstrap" arrow>
                <IconButton>
                  <SiBootstrap className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            mui={
              <Tooltip title='MUI' arrow >
              <IconButton>
                <SiMui className="dark:text-slate-200 text-black" />
              </IconButton>
              </Tooltip>
            }
            mdb={
              <Tooltip title='MDB' arrow >
              <IconButton>
                <FaMdb className="dark:text-slate-200 text-black" />
              </IconButton>
              </Tooltip>
            }
          />

{/* react-router-dom-app
 */}
<Project_prop 
          title="React router dom app" 
          para="Demo app for routing" 
          github_link="https://github.com/RageshriTevani/Projects/tree/master/react-router-dom-app"
          link=""
            css3={
              <Tooltip title="Css3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            react={
              <Tooltip title="ReactJs" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip> 
            }
            bootstrap={
              <Tooltip title="Bootstrap" arrow>
                <IconButton>
                  <SiBootstrap className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />


{/* team flow */}
          <Project_prop
            title="team flow"
            para="Manage the team" 
            github_link="https://github.com/RageshriTevani/Projects/tree/master/team%20flow%20figma"
            link=""
            html5={
              <Tooltip title="HTML5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip> 
            }
            css3={
              <Tooltip title="Css3" arrow>
                <IconButton>
                  <SiCss3  className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            bootstrap={
              <Tooltip title="Bootstrap" arrow>
                <IconButton>
                  <SiBootstrap className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />

{/* edu meeting */}
          <Project_prop
            title="edu-meeting"
            para="To make an ease for educational activities" 
            github_link="https://github.com/RageshriTevani/Projects/tree/master/edu-meeting"
            link=""
            html5={
              <Tooltip title="HTML5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip> 
            }
            css3={
              <Tooltip title="Css3" arrow>
                <IconButton>
                  <SiCss3  className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />

{/* visiting card */}
          <Project_prop
            title="Visiting card"
            para="To contact a company to know more"
            github_link="https://github.com/RageshriTevani/Projects/tree/master/visiting-card"
            html5={
              <Tooltip title="HTML5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip> 
            }
            css3={
              <Tooltip title="Css3" arrow>
                <IconButton>
                  <SiCss3  className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />


{/*Js Marksheet */}
          <Project_prop
            title="Javascript Marksheet"
            para="Calculation of marks by using javascript"
            github_link="https://github.com/RageshriTevani/Projects/tree/master/js%20marksheet"
            javascript={
              <Tooltip title="Javascript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip> 
            }
            css3={
              <Tooltip title="Css3" arrow>
                <IconButton>
                  <SiCss3  className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
