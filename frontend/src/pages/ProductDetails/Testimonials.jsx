import React from "react";
// import { FaStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div>
      <section className="bg-white ">
        {/* main div  */}
        <div className="py-8 px-5 max-w-screen-xl text-center lg:py-16 lg:px-24 grid grid-cols-1 md:grid-cols-2  ">
          {/* left side  */}
          {/* ratings  */}
          <div className="w-full mb-8 md:mb-0">
            <div className="text-blue-400 font-bold text-3xl mb-10 text-start">
              Opiniones de los clientes
            </div>

            <div className="flex items-center mt-4 w-full">
              <a
                // href="#"
                className="text-2xl font-semibold w-24 text-gray-600  mr-6"
              >
                5 star
              </a>
              <div className="w-full h-12 mx-4 bg-gray-200 rounded-2xl ">
                <div
                  className="h-12 bg-yellow-300 rounded-2xl"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div className="flex items-center mt-4 w-full">
              <a
                href="#"
                className="text-2xl font-semibold w-24 text-gray-600  mr-6"
              >
                4 star
              </a>
              <div className="w-full h-12 mx-4 bg-gray-200 rounded-2xl ">
                <div
                  className="h-12 bg-yellow-300 rounded-2xl"
                  style={{ width: "17%" }}
                ></div>
              </div>
            </div>

            <div className="flex items-center mt-4 w-full">
              <a
                // href="#"
                className="text-2xl font-semibold w-24 text-gray-600  mr-6"
              >
                3 star
              </a>
              <div className="w-full h-12 mx-4 bg-gray-200 rounded-2xl ">
                <div
                  className="h-12 bg-yellow-300 rounded-2xl"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </div>

            <div className="flex items-center mt-4 w-full">
              <a
                // href="#"
                className="text-2xl font-semibold w-24 text-gray-600  mr-6"
              >
                2 star
              </a>
              <div className="w-full h-12 mx-4 bg-gray-200 rounded-2xl ">
                <div
                  className="h-12 bg-yellow-300 rounded-2xl"
                  style={{ width: "7%" }}
                ></div>
              </div>
            </div>

            <div className="flex items-center mt-4 w-full">
              <a
                // href="#"
                className="text-2xl font-semibold w-24 text-gray-600  mr-6"
              >
                1 star
              </a>
              <div className="w-full h-12 mx-4 bg-gray-200 rounded-2xl ">
                <div
                  className="h-12 bg-yellow-300 rounded-2xl"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div className="text-blue-400 font-bold text-3xl mt-10 text-start">
              Escribir reseña sobre este producto
            </div>
            <p className="text-gray-400 text-lg font-semibold text-start mt-6">
              Intel Core i5 de 2,8 GHz de cuatro núcleos.
            </p>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2  text-gray-500 focus:outline-none bg-white rounded-md border border-gray-500  text-2xl font-semibold flex place-content-start mt-7 md:w-[70%] w-full shadow-lg shadow-gray-500 justify-center focus:z-10 "
            >
              Escribir mi opinión
            </button>
          </div>

          {/* rigth side  */}
          {/* reviews  */}
          <div className="   w-full lg:ml-32 md:ml-0">
            {/* <!-- Review 1 --> */}
            <figure className="md:mb-12 mt-6 flex flex-col items-center justify-center p- text-start place-content-start ">
              <figcaption className="flex justify- items-center space-x-3 justify-start w-full">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-bold text-xl dark:text-gray-500 text-start">
                  <div>Jese Leos</div>
                  <div className="text-xl font-light text-secondary flex gap-x-2">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </div>
                </div>
              </figcaption>
              <blockquote className="mt-8 max-w-full text-gray-500 text-lg font-semibold">
                <h3 className="text-xl font-semibold text-gray-600">
                  Mindblowing workflow and variants
                </h3>
                <p className="my-4">
                  "As someone who mainly designs in the browser, I've been a
                  casual user of Figma, but as soon as I saw and started playing
                  with FlowBite my mind was.
                </p>
              </blockquote>
            </figure>

            {/* <!-- Review 2 --> */}
            <figure className="md:mb-12 mt-6  flex flex-col items-center justify-center p- text-start place-content-start ">
              <figcaption className="flex justify- items-center space-x-3 justify-start w-full">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-bold text-xl dark:text-gray-500 text-start">
                  <div>Jese Leos</div>
                  <div className="text-xl font-light text-secondary flex gap-x-2">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </div>
                </div>
              </figcaption>
              <blockquote className="mt-8 max-w-full text-gray-500 text-lg font-semibold">
                <h3 className="text-xl font-semibold text-gray-600">
                  Mindblowing workflow and variants
                </h3>
                <p className="my-4">
                  "As someone who mainly designs in the browser, I've been a
                  casual user of Figma, but as soon as I saw and started playing
                  with FlowBite my mind was.
                </p>
              </blockquote>
            </figure>

            {/* <!-- Button --> */}
            <button className="text-blue-400 underline text-3xl font-semibold my-9">
              Ver más
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
