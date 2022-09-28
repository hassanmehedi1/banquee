import React from 'react';
import mobile from "../assets/mobile.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OneApp = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
   return (
     <div class="px-6 py-16 mx-auto">
       <div class="items-center lg:flex">
         <div class="w-full lg:w-1/2 lg:ml-24">
           <div class="lg:max-w-lg">
             <h1 class="text-3xl font-semibold text-gray-800  lg:text-6xl">
               One App. <br />
               One banking.
             </h1>

             <div className="grid grid-cols-1 mt-8 space-y-3 lg:space-y-0 lg:grid-cols-2  justify-evenly gap-x-32 gap-y-6">
               <div
                 className="card w-72 bg-base-100 shadow-xl space-x-6"
                 data-aos="fade-right"
               >
                 <div className="card-body">
                   <svg
                     width="50"
                     height="51"
                     viewBox="0 0 50 51"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <rect
                       y="0.723633"
                       width="50"
                       height="50"
                       rx="25"
                       fill="#E8F2EE"
                     />
                     <path
                       d="M26.1667 22.2236H35.5L23.8333 39.7236V29.2236H15.6667L26.1667 11.7236V22.2236ZM23.8333 24.557V20.147L19.7873 26.8903H26.1667V32.0166L31.1402 24.557H23.8333Z"
                       fill="#5BB5A2"
                     />
                   </svg>
                   <h2 className="card-title">Instant transactions</h2>
                   <p>
                     Odio euismod lacinia at quis. Amet purus gravida quis
                     blandit turpis.
                   </p>
                 </div>
               </div>
               <div
                 className="card w-72 bg-base-100 shadow-xl space-x-6"
                 data-aos="fade-right"
               >
                 <div className="card-body">
                   <svg
                     width="50"
                     height="51"
                     viewBox="0 0 50 51"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <rect
                       y="0.723633"
                       width="50"
                       height="50"
                       rx="25"
                       fill="#E8F2EE"
                     />
                     <path
                       d="M22.6667 35.0565H18V37.3898H15.6667V35.0565H14.5C14.1906 35.0565 13.8938 34.9336 13.675 34.7148C13.4562 34.496 13.3333 34.1993 13.3333 33.8898V16.3898C13.3333 16.0804 13.4562 15.7837 13.675 15.5649C13.8938 15.3461 14.1906 15.2232 14.5 15.2232H22.6667V13.5782C22.6667 13.4935 22.6852 13.4099 22.7208 13.333C22.7564 13.2562 22.8083 13.1881 22.873 13.1333C22.9376 13.0786 23.0133 13.0386 23.0949 13.0161C23.1766 12.9936 23.2621 12.9891 23.3457 13.003L35.6913 15.061C35.9637 15.1063 36.2113 15.2468 36.3899 15.4574C36.5685 15.668 36.6665 15.9352 36.6667 16.2113V18.7232H37.8333V21.0565H36.6667V29.2232H37.8333V31.5565H36.6667V34.0683C36.6665 34.3445 36.5685 34.6117 36.3899 34.8223C36.2113 35.0329 35.9637 35.1734 35.6913 35.2187L34.3333 35.445V37.3898H32V35.8347L23.3457 37.2767C23.2621 37.2906 23.1766 37.2861 23.0949 37.2636C23.0133 37.2411 22.9376 37.2011 22.873 37.1464C22.8083 37.0916 22.7564 37.0235 22.7208 36.9467C22.6852 36.8698 22.6667 36.7862 22.6667 36.7015V35.0565ZM25 34.6365L34.3333 33.0802V17.1995L25 15.6443V34.6353V34.6365ZM30.25 28.0565C29.284 28.0565 28.5 26.7499 28.5 25.1398C28.5 23.5299 29.284 22.2232 30.25 22.2232C31.216 22.2232 32 23.5299 32 25.1398C32 26.7499 31.216 28.0565 30.25 28.0565Z"
                       fill="#5BB5A2"
                     />
                   </svg>
                   <h2 className="card-title">Saving accountss</h2>
                   <p>
                     Odio euismod lacinia at quis. Amet purus gravida quis
                     blandit turpis.
                   </p>
                 </div>
               </div>

               <div
                 className="card w-72 bg-base-100 shadow-xl space-x-6 gap-5"
                 data-aos="fade-right"
               >
                 <div className="card-body">
                   <svg
                     width="50"
                     height="51"
                     viewBox="0 0 50 51"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <rect
                       y="0.723633"
                       width="50"
                       height="50"
                       rx="25"
                       fill="#E8F2EE"
                     />
                     <path
                       d="M19.1667 16.3905V35.0571H30.8333V16.3905H19.1667ZM18 14.0571H32C32.3094 14.0571 32.6062 14.18 32.825 14.3988C33.0438 14.6176 33.1667 14.9144 33.1667 15.2238V36.2238C33.1667 36.5332 33.0438 36.83 32.825 37.0488C32.6062 37.2675 32.3094 37.3905 32 37.3905H18C17.6906 37.3905 17.3938 37.2675 17.175 37.0488C16.9563 36.83 16.8333 36.5332 16.8333 36.2238V15.2238C16.8333 14.9144 16.9563 14.6176 17.175 14.3988C17.3938 14.18 17.6906 14.0571 18 14.0571ZM25 31.5571C25.3094 31.5571 25.6062 31.68 25.825 31.8988C26.0438 32.1176 26.1667 32.4144 26.1667 32.7238C26.1667 33.0332 26.0438 33.33 25.825 33.5488C25.6062 33.7675 25.3094 33.8905 25 33.8905C24.6906 33.8905 24.3938 33.7675 24.175 33.5488C23.9563 33.33 23.8333 33.0332 23.8333 32.7238C23.8333 32.4144 23.9563 32.1176 24.175 31.8988C24.3938 31.68 24.6906 31.5571 25 31.5571Z"
                       fill="#5BB5A2"
                     />
                   </svg>
                   <h2 className="card-title">Mobile banking</h2>
                   <p>
                     Odio euismod lacinia at quis. Amet purus gravida quis
                     blandit turpis.
                   </p>
                 </div>
               </div>
               <div
                 className="card w-72 bg-base-100 shadow-xl"
                 data-aos="fade-right"
               >
                 <div className="card-body">
                   <svg
                     width="50"
                     height="51"
                     viewBox="0 0 50 51"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <rect
                       y="0.723633"
                       width="50"
                       height="50"
                       rx="25"
                       fill="#E8F2EE"
                     />
                     <path
                       d="M16.8333 15.2236V33.8903H35.5V36.2236H14.5V15.2236H16.8333ZM34.6752 19.0655L36.3248 20.7151L29.6667 27.3733L26.1667 23.8745L21.1582 28.8818L19.5085 27.2321L26.1667 20.574L29.6667 24.0728L34.6752 19.0655Z"
                       fill="#5BB5A2"
                     />
                   </svg>
                   <h2 className="card-title">Advanced statistics</h2>
                   <p>
                     Odio euismod lacinia at quis. Amet purus gravida quis
                     blandit turpis.
                   </p>
                 </div>
               </div>
               <div
                 className="card w-72 bg-base-100 shadow-xl"
                 data-aos="fade-right"
               >
                 <div className="card-body">
                   <svg
                     width="50"
                     height="51"
                     viewBox="0 0 50 51"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <rect
                       y="0.723633"
                       width="50"
                       height="50"
                       rx="25"
                       fill="#E8F2EE"
                     />
                     <path
                       d="M14.5 15.2236H35.5C35.8094 15.2236 36.1062 15.3465 36.325 15.5653C36.5438 15.7841 36.6667 16.0809 36.6667 16.3903V35.057C36.6667 35.3664 36.5438 35.6631 36.325 35.8819C36.1062 36.1007 35.8094 36.2236 35.5 36.2236H14.5C14.1906 36.2236 13.8938 36.1007 13.675 35.8819C13.4563 35.6631 13.3333 35.3664 13.3333 35.057V16.3903C13.3333 16.0809 13.4563 15.7841 13.675 15.5653C13.8938 15.3465 14.1906 15.2236 14.5 15.2236ZM34.3333 25.7236H15.6667V33.8903H34.3333V25.7236ZM34.3333 21.057V17.557H15.6667V21.057H34.3333Z"
                       fill="#5BB5A2"
                     />
                   </svg>
                   <h2 className="card-title">Virtual cards</h2>
                   <p>
                     Odio euismod lacinia at quis. Amet purus gravida quis
                     blandit turpis.
                   </p>
                 </div>
               </div>
               <div
                 className="card w-72 bg-base-100 shadow-xl"
                 data-aos="fade-right"
               >
                 <div className="card-body">
                   <svg
                     width="50"
                     height="51"
                     viewBox="0 0 50 51"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <rect
                       y="0.723633"
                       width="50"
                       height="50"
                       rx="25"
                       fill="#E8F2EE"
                     />
                     <path
                       d="M11.805 19.8868C15.5373 16.8632 20.1966 15.2165 25 15.2237C29.9992 15.2237 34.59 16.9702 38.195 19.8868L36.7297 21.7022C33.4119 19.0142 29.2699 17.5505 25 17.557C20.5562 17.557 16.4763 19.1087 13.2703 21.7022L11.805 19.8868ZM15.4695 24.4252C18.1652 22.2412 21.5306 21.0518 25 21.057C28.4692 21.0518 31.8344 22.2407 34.5305 24.424L33.064 26.2393C30.783 24.3917 27.9354 23.3857 25 23.3903C21.9457 23.3903 19.1398 24.4578 16.936 26.2393L15.4695 24.424V24.4252ZM19.1352 28.9635C20.794 27.6194 22.865 26.8873 25 26.8903C27.2213 26.8903 29.2618 27.6662 30.8648 28.9623L29.3983 30.7777C28.1542 29.7699 26.6011 29.2212 25 29.2237C23.334 29.2237 21.8033 29.8058 20.6017 30.7777L19.1352 28.9623V28.9635ZM22.8008 33.5018C23.4227 32.9975 24.1993 32.7227 25 32.7237C25.833 32.7237 26.5983 33.0153 27.1992 33.5007L25 36.2237L22.8008 33.5007V33.5018Z"
                       fill="#5BB5A2"
                     />
                   </svg>
                   <h2 className="card-title">Contactless payments</h2>
                   <p>
                     Odio euismod lacinia at quis. Amet purus gravida quis
                     blandit turpis.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
           <img class="w-full h-full max-w-xs" src={mobile} alt="cards" />
         </div>
       </div>
     </div>
   );
};

export default OneApp;