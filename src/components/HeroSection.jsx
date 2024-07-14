// import {useState, useEffect} from 'react';
// import {useSelector, useDispatch} from 'react-redux';
import banner from "../assets/banner.png";

export default function HeroSection() {
// REDUX
// const dispatch = useDispatch();
//const counter = useSelector((state) => state.counter)

  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={banner} alt="bg.png"
        />
        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-6xl font-bold text-white sm:text-5xl lg:text-7xl"><span className="text-red-600">Ebonyi Tech &</span><br/> Leadership <br/>Submit 2024</h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
         Let Experience Tech, Leadership, and exterprenureship
         Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
        on adipisicing elit distinctio.
        </p>
        <h3 className="max-w-[600px] drop-shadow-2xl pt-2 text-xl text-white">9th November 2024</h3>
        <div className=' py-6 justify-center space-x-12 items-center'>
              <a href='#' className='bg-gradient-to-r from-red-500 to-red-800 py-2 px-3 rounded-md'>
              <button onClick={() => open()} className="font-bold">Register Now</button>
               </a>
                                
              </div>
      </div>
    </div>
  )
}




// import bg from "../assets/bg.png";

// const HeroSection = () => {
//   return (
//     <div className="w-full h-screen" >
//        <img className="top-0 left-0 w-full h-screen object-cover " src={bg} alt="bg.png "/>
//        <div className="bg-blue-900/90 absolute top-0 left-0 w-full h-screen "/>
//        <div className="absolute top-20  w-full h-full flex flex-col justify-center">
//         <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
//           <h1 className="font-bold text-5xl text-red-600 md:text-7xl drop-shadow-2xl">Ebonyi 
//             {" "}<span className="font-bold text-5xl text-white md:text-7xl drop-shadow-2xl">Tech &</span>

//             </h1>
//           <h1 className="text-5xl text-white md:text-7xl drop-shadow-2xl font-bold">Leadership</h1>
//           <h1 className=" text-5xl text-white md:text-7xl drop-shadow-2xl font-bold">Submit 2023</h1>
//           <p className="max-w-[600px] drop-shadow-8xl p-2 text-xl text-slate-200">
//             Let Experience Leadership, Enterprenurship and tech submit 2024 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididur </p>
//             <h3 className="max-w-[600px] drop-shadow-2xl p-2 text-xl text-white">9th November 2024</h3>
//             <div className=' py-6 justify-center space-x-12 items-center'>
                
//                   <a href='#' className='bg-gradient-to-r from-red-500 to-red-800 py-2 px-3 rounded-md'>
//                   <button onClick={() => open()}>Connect walllet</button>
//                   </a>
                
//                   </div>
//           </div>
//        </div>
//    </div>
   
//   )
// }

// export default HeroSection
