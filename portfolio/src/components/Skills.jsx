import{
    HTML,
    CSS,
    Javascript,
    JQuery,
    bootstrap,
    React,
    redux,
    tailwindcss,
    mui,
    wordpress,
    github,
    git,
} from '../Constant/Constant.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from './Imgprop.jsx';

    const Skills=()=>{
        useEffect(()=>{
            AOS.init();
        },[]);
    return (
    <>
        <section className='EDUCATION p-5 mx-20 mb-10 max-sm:p-2 max-sm:mx-5 font-Poppins'>
            <h1 className='text-[#00040f]  dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl'>SKILLS</h1>
            
            <div className='IMG grid place-content-center p-5 grid-cols-3 gap-4 max-sm:p-2 mt-10' data-aos='zoom-out-up'>
                <Image img={HTML} />
                <Image img={CSS}/>
                <Image img={Javascript}/>
                <Image img={JQuery}/>
                <Image img={bootstrap}/>
                <Image img={React}/>
                <Image img={redux}/>
                <Image img={tailwindcss}/>
                <Image img={mui}/>
                <Image img={wordpress}/>            
                <Image img={git}/>
                <Image img={github}/>
            </div>
        </section>
    </>
  )
}
export default Skills