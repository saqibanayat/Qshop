import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black">
      <div className=" px-5  w-full  p-4 py-6">
        <div className="md:flex justify-between gap-20">
          <div className="mb-6 md:mb-0 ">
            <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Stay Connnected
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-white w-8 h-8" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-white w-8 h-8" />
              </a>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white w-8 h-8" />
              </a>
            </div>

            <div className="flex gap-5 mt-4 md:mt-24">
              
                <svg
                  width="58"
                  height="55"
                  viewBox="0 0 58 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7423 8.59865C22.3503 9.99301 20.5716 10.8451 18.793 11.0001L15.9316 11.2325L18.793 14.1761C20.9583 16.5001 22.041 17.1198 23.7423 16.8874C25.5983 16.655 26.0623 16.1127 27.145 12.3944C28.3823 8.28879 30.161 6.2747 30.161 9.06344C30.161 11.9296 32.3263 16.5775 33.873 17.1198C35.1876 17.5846 36.193 17.1198 38.6676 14.7958C40.369 13.2465 41.761 11.6972 41.761 11.3874C41.761 11.0775 40.601 10.8451 39.1316 10.8451C37.1983 10.8451 35.8063 10.2254 34.1823 8.52118C31.0116 5.42259 26.913 5.42259 23.7423 8.59865Z"
                    fill="white"
                  />
                  <path
                    d="M10.8275 18.7463C10.7502 22.0772 9.4355 24.7885 7.88883 24.7885C6.8835 24.7885 6.1875 26.6477 6.1875 29.4364C6.1875 31.0632 6.80617 31.9927 8.5075 32.9998C10.4408 34.1618 10.7502 34.8589 10.9822 38.2674L11.2142 42.1406L14.9262 38.5772C16.9368 36.6406 18.5608 34.6265 18.5608 34.1618C18.5608 32.6899 13.6888 30.211 10.6728 30.211C8.66217 30.211 7.73417 29.9012 7.73417 29.1265C7.73417 27.9646 8.5075 27.6547 13.1475 26.6477C16.2408 26.0279 18.5608 24.711 18.5608 23.6265C18.5608 22.697 12.1422 15.4927 11.3688 15.4927C11.0595 15.4927 10.8275 16.9646 10.8275 18.7463Z"
                    fill="white"
                  />
                  <path
                    d="M42.6885 19.676C39.8271 22.9296 40.1365 25.0986 43.5391 26.338C48.7978 28.2746 49.4938 28.662 49.4938 29.4366C49.4938 29.8239 48.6431 30.2113 47.5605 30.2113C45.1631 30.2113 41.2965 32.0704 40.7551 33.4648C40.2911 34.7817 41.4511 36.9507 43.7711 39.2746C46.0138 41.5211 47.1738 40.9789 47.1738 37.8803C47.1738 36.4859 47.8698 34.9366 48.9525 33.8521C49.9578 32.9225 50.9631 30.831 51.2725 29.2817C51.6591 26.8803 51.3498 26.1056 49.4165 24.0915C47.9471 22.5422 47.1738 20.9155 47.1738 19.3662C47.1738 16.2676 45.6271 16.3451 42.6885 19.676Z"
                    fill="white"
                  />
                  <path
                    d="M19.7206 42.6056C16.3953 46.014 16.7046 47.2535 21.0353 47.2535C22.2726 47.2535 23.6646 48.0281 24.5926 49.1901C26.3713 51.514 29.8513 51.9788 28.6913 49.7324C28.3046 49.0352 27.5313 46.8662 26.99 44.9295C25.2113 38.5 24.0513 38.1126 19.7206 42.6056Z"
                    fill="white"
                  />
                  <path
                    d="M33.2535 40.5143C30.8561 42.4509 29.0775 51.127 31.0108 51.127C31.5521 51.127 32.7121 50.2748 33.7175 49.1903C34.9548 47.796 36.3468 47.2537 38.2801 47.2537C41.8375 47.2537 41.7601 46.0143 38.0481 42.3734C34.8001 39.1974 34.8775 39.1974 33.2535 40.5143Z"
                    fill="white"
                  />
                </svg>

                <div className="flex items-center uppercase tracking-[.25em] text-[#FFFFFF] font-[400px] text-[18px]">
                  Qshop
                </div>
              
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-8 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <div className="hover:underline">Payments</div>
                </li>

                <li className="mb-4">
                  <div className="hover:underline">
                    return or replace products
                  </div>
                </li>

                <li className="mb-4">
                  <div className="hover:underline">Aid</div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Shopping with Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <div className="hover:underline ">
                    Lorem ipsum dolor sit amet.
                  </div>
                </li>
                <li className="mb-4">
                  <div className="hover:underline ">
                    Lorem ipsum dolor sit amet.
                  </div>
                </li>
                <li className="mb-4">
                  <div className="hover:underline ">
                    Lorem ipsum dolor sit amet.
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Customer Service
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <div className="hover:underline">Customer services</div>
                </li>
                <li className="mb-4">
                  <div className="hover:underline">
                    Lorem ipsum dolor sit amet.
                  </div>
                </li>
                <li className="mb-4">
                  <div className="hover:underline">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </li>
                <li className="mb-4">
                  <div className="hover:underline">Lorem, ipsum dolor.</div>
                </li>
                <li className="mb-4">
                  <div className="hover:underline">
                    Lorem ipsum dolor sit amet.
                  </div>
                </li>
                <li className="mb-4">
                  <div className="hover:underline">Lorem, ipsum dolor.</div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Collaborate with Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <div className="hover:underline">Customer services</div>
                </li>
                <li className="mb-4">
                  <div className="hover:underline"> sit amet.</div>
                </li>
                <li className="mb-4">
                  <div className="hover:underline"> amet consectetur.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
