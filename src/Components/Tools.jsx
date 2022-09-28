import React from 'react';

const Tools = () => {
   return (
     <div className="mt-6">
       <div class="px-6 py-10 mx-auto">
         <div class="items-center lg:flex ">
           <div class="w-full lg:w-1/2 lg:ml-24">
             <div class="lg:max-w-lg">
               <h1 className="text-lg text-black mb-5">Tools</h1>
               <h1 class="text-3xl font-semibold text-gray-800  lg:text-6xl">
                 Seemless <br /> Integration
               </h1>

               <p class="mt-4 text-xl text-justify">
                 Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                 amet sint. Velit officia consequat duis enim velit mollit.
               </p>
             </div>
           </div>

           <section className="lg:w-1/2 gap-y-6">
             <div class="grid grid-cols-1 mt-8 gap-y-6 justify-items-start">
               <div className="flex justify-center items-center space-x-2 mr-3">
                 <svg
                   width="26"
                   height="27"
                   viewBox="0 0 26 27"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <rect
                     y="0.644043"
                     width="26"
                     height="26"
                     rx="13"
                     fill="#E8F2EE"
                   />
                   <path
                     d="M11.5 16.0232L18.394 9.12842L19.4553 10.1889L11.5 18.1442L6.72701 13.3712L7.78751 12.3107L11.5 16.0232Z"
                     fill="#5BB5A2"
                   />
                 </svg>
                 <p>Secure and encrypted integration</p>
               </div>
               <div className="flex justify-center items-center space-x-2 mr-14">
                 <svg
                   width="26"
                   height="27"
                   viewBox="0 0 26 27"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <rect
                     y="0.644043"
                     width="26"
                     height="26"
                     rx="13"
                     fill="#E8F2EE"
                   />
                   <path
                     d="M11.5 16.0232L18.394 9.12842L19.4553 10.1889L11.5 18.1442L6.72701 13.3712L7.78751 12.3107L11.5 16.0232Z"
                     fill="#5BB5A2"
                   />
                 </svg>

                 <p>Fully API interface</p>
               </div>
               <div className="flex justify-center items-center space-x-2 mr-4">
                 <svg
                   width="26"
                   height="27"
                   viewBox="0 0 26 27"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <rect
                     y="0.644043"
                     width="26"
                     height="26"
                     rx="13"
                     fill="#E8F2EE"
                   />
                   <path
                     d="M11.5 16.0232L18.394 9.12842L19.4553 10.1889L11.5 18.1442L6.72701 13.3712L7.78751 12.3107L11.5 16.0232Z"
                     fill="#5BB5A2"
                   />
                 </svg>

                 <p>Payments worldwide</p>
               </div>
             </div>
           </section>
         </div>
       </div>
     </div>
   );
};

export default Tools;