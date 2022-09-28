import React from "react";
import cards from "../assets/cards.png"

const Banner = () => {
  return (
    <header class="">
      <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2 lg:ml-24">
            <div class="lg:max-w-lg text-center lg:text-start">
              <h1 class="text-3xl font-semibold text-gray-800  lg:text-7xl">
                Banking <br /> Starts Here.
              </h1>

              <p class="mt-4 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>

              <div class="grid grid-cols-1 mt-8 space-y-3 lg:space-y-0 lg:grid-cols-2 gap-4 lg:-ml-16">
                <div className="flex justify-center items-center space-x-2 mr-0 lg:mr-3">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="26" height="26" rx="13" fill="#E8F2EE" />
                    <path
                      d="M11.5001 15.3791L18.3941 8.48438L19.4553 9.54488L11.5001 17.5001L6.72705 12.7271L7.78755 11.6666L11.5001 15.3791Z"
                      fill="#5BB5A2"
                    />
                  </svg>
                  <p>Instant Transfer</p>
                </div>
                <div className="flex justify-center items-center space-x-2 mr-0 lg:mr-3">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="26" height="26" rx="13" fill="#E8F2EE" />
                    <path
                      d="M11.5001 15.3791L18.3941 8.48438L19.4553 9.54488L11.5001 17.5001L6.72705 12.7271L7.78755 11.6666L11.5001 15.3791Z"
                      fill="#5BB5A2"
                    />
                  </svg>
                  <p>Payments worlwide</p>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="26" height="26" rx="13" fill="#E8F2EE" />
                    <path
                      d="M11.5001 15.3791L18.3941 8.48438L19.4553 9.54488L11.5001 17.5001L6.72705 12.7271L7.78755 11.6666L11.5001 15.3791Z"
                      fill="#5BB5A2"
                    />
                  </svg>
                  <p>Saving accounts</p>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="26" height="26" rx="13" fill="#E8F2EE" />
                    <path
                      d="M11.5001 15.3791L18.3941 8.48438L19.4553 9.54488L11.5001 17.5001L6.72705 12.7271L7.78755 11.6666L11.5001 15.3791Z"
                      fill="#5BB5A2"
                    />
                  </svg>
                  <p>100% mobile banking</p>
                </div>
              </div>
              <div className="mt-14 flex justify-start items-center">
                <a className="text-white bg-firstly px-3 py-2 rounded-lg cursor-pointer hover:bg-secondly hover:text-firstly">
                  Open Account
                </a>
                <div className="flex justify-center items-center space-x-2">
                  <a className="text-lg text-firstly cursor-pointer ml-6">
                    Compare Cards
                  </a>
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2283 7.00795L7.79185 1.6874L9.22495 0.284857L17.1081 7.99985L9.22495 15.7148L7.79185 14.3123L13.2283 8.99175H0.891846L0.891846 7.00795H13.2283Z"
                      fill="#5BB5A2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img class="w-full h-full max-w-xs" src={cards} alt="cards" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
