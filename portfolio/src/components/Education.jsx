import Lottie from 'lottie-react';
import education from '../assets/lottie/Education.json'
import Skills from './Skills';
import tops from '../assets/images/download.jpg'
import clg from '../assets/images/clg.jpg'
import mvm from '../assets/images/mvm.png'
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Education=()=>{
    useEffect(() => {
        AOS.init();
    },[]);
    return (
        <section id="education" className="p-5 mx-20 mb-10 min-h-screen font-Poppins  max-sm:p-2 max-sm:mx-5">
            <div className="WRAPPER mt-10">
            <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">Education</h1>

            <div className="EDUCATION flex gap-7 justify-between flex-row-reverse max-sm:flex-col" data-aos="fade-right">

                <div className="max-w-[520px] mt-[52px] p-7 max-sm:p-3">
                    <div className="flex gap-5">
                        <img src={tops} alt='tops' className='w-[90px] h-[90px] rounded-full p-1' />

                        <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-bold text-2xl w-[300px] h-[100px] tracking-wider ">
                        Tops Technologies</h1>
                    </div>
                    <div className="mt-5 flex flex-col gap-5 text-left pl-4">
                        <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                            FrontEnd Development Course
                        </h3>
                        <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9"> 2023 - 2024</p>
                    </div>


                    <div className="flex gap-5 mt-8">
                        <img src={clg} alt='clg' className='w-[90px] h-[90px] rounded-full p-1' />

                        <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-bold text-2xl w-[300px] h-[100px] tracking-wider ">
                        Shree H. N. Shukla College of IT & Management</h1>
                    </div>
                    <div className="mt-5 flex flex-col gap-5 text-left pl-4">
                        <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">Master of Business Administration</h3>
                        <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9"> 2018 - 2020</p>
                    </div>


                    <div className="flex gap-5 mt-8">
                        <img src={mvm} alt='mvm' className='w-[90px] h-[90px] rounded-full p-1' />
                    
                        <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-bold text-2xl w-[300px] h-[100px] tracking-wider ">
                        M V M College Of Commerce Management & IT</h1>
                    </div>
                    

                    <div className="mt-5 flex flex-col gap-5 text-left pl-4">
                        <h3 className="capitalize text-gray-500 dark:text-slate-300 text-xl max-sm:text-lg leading-9">Bachelor Of Commerce</h3>
                        <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">2015 - 2018</p>
                    </div>
                </div>
            <Lottie
            animationData={education}
            loop={true}
            className="max-w-[500px] shadow-xl rounded-xl border border-[#00040f]"/>
        </div>
    </div>
    <Skills/>
    </section>
    )
}
export default Education