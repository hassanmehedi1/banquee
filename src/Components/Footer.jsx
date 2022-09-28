import React from "react";

const Footer = () => {
  return (
    <div>
      <hr class="h-px my-6 bg-gray-300 border-none " />
      <footer class="">
        <div class="container p-6 mx-auto">
          <div class="lg:flex">
            <div class="w-full -mx-6 lg:w-2/5">
              <div class="px-6">
                <div>
                  <a href="#" class="text-2xl font-bold text-firstly">
                    banquee.
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-6 lg:mt-0 lg:flex-1">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 class=" font-semibold text-black ">About</h3>
                  <a href="#" class="block mt-2 text-sm   hover:underline">
                    Features
                  </a>
                  <a href="#" class="block mt-2 text-sm   hover:underline">
                    Pricing
                  </a>
                  <a href="#" class="block mt-2 text-sm   hover:underline">
                    Support
                  </a>
                </div>

                <div>
                  <h3 class=" font-semibold text-black ">Blog</h3>
                  <a href="#" class="block mt-2 text-sm   hover:underline">
                    Products
                  </a>
                  <a href="#" class="block mt-2 text-sm   hover:underline">
                    Technology
                  </a>
                  <a href="#" class="block mt-2 text-sm   hover:underline">
                    Crypto
                  </a>
                </div>

                <div>
                  <h3 class=" font-semibold text-black ">Webflow</h3>
                  <a href="#" class="block mt-2 text-sm   hover:underline">
                    Styleguide
                  </a>
                  <a href="#" class="block mt-2 text-sm   hover:underline">
                    Licensing
                  </a>
                  <a href="#" class="block mt-2 text-sm   hover:underline">
                    Changelog
                  </a>
                </div>

                <div>
                  <h3 class=" font-semibold text-black ">Social Media</h3>
                  <span class="block mt-2 text-sm   hover:underline">
                    Twitter
                  </span>
                  <span class="block mt-2 text-sm   hover:underline">
                    Facebook
                  </span>
                  <span class="block mt-2 text-sm   hover:underline">
                    Instagram
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr class="h-px my-6 bg-gray-300 border-none " />

          <div>
            <p class="text-start ">
              © Made by <span className="text-firstly">Mehedi Hassan</span> -
              Powered by <span className="text-firstly">iNiLabs</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
