import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../assets/logo.png";

const navigation = [
  { name: 'About', href: '#', current: false },
  { name: 'Event Schedules', href: '#', current: false },
  { name: 'Speakers', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-blue-800 sticky top-0 z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-between">
                <div className=" flex items-center flex-shrink-0">
                  <img
                    className="h-10 w-10 mr-2"
                    src={logo} alt='logo' />
                    <span className="text-xl tracking-tight font-bold text-white">Experience</span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4  justify-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-white text-black' : 'text-white text-lg hover:bg-gray-300 hover:text-black ease-in duration-300 ',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Mobile menu button */}
                <div className="flex items-center sm:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
               </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

// import { useState , useEffect} from 'react';
// import { navItems } from '../constants';
// import logo from "../assets/logo.png";
// import { AlignJustify } from 'lucide-react';




// // const Navbar = () => {


//   const Navbar = () => {
//     const [isFixed, setIsFixed] = useState(false);
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
//     const toggleMobileMenu = () => {
//       setMobileMenuOpen(!isMobileMenuOpen);
//     };
  
//     useEffect(() => {
//       const handleScroll = () => {
//         if (window.scrollY > 50) {
//           setIsFixed(true);
//         } else {
//           setIsFixed(false);
//         }
//       };
  
//       window.addEventListener('scroll', handleScroll);
  
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []);
  
//     return (
//       <nav className={`${isFixed ? 'fixed top-0 z-50' : 'absolute'} w-full  bg-white text-black transition-all duration-20`}>
//         <div className='container  px-4 mx-auto relative text-sm py-3'>
//           <div className='flex justify-between items-center'>
//             <div className='flex items-center flex-shrink-0'>
//               <img className='h-20 w-20 mr-2' src={logo} alt='logo' />
//             </div>
//             <button className='lg:hidden' onClick={toggleMobileMenu}>
//               <AlignJustify />
//             </button>
//             <ul className='hidden lg:flex  ml-14 space-x-12'>
//               {navItems.map((item, index) => (
//                 <li key={index}>
//                   <a href={item.href}>{item.label}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         {isMobileMenuOpen && (
//           <div className='fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col z-50'>
//             <button className='self-end mb-4' onClick={toggleMobileMenu}>
//               <span className='text-white text-2xl'>&times;</span> {/* Close Icon */}
//             </button>
//             <ul className='space-y-4'>
//               {navItems.map((item, index) => (
//                 <li key={index}>
//                   <a href={item.href} onClick={toggleMobileMenu}>{item.label}</a>
//                 </li>
//               ))}
//             </ul>
//         </div>
//       )}
        
        
//       </nav>
   
   
   
   
   
//   //  </>
//   )
// }

// export default Navbar
