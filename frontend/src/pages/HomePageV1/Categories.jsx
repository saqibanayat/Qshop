import React from "react";

const Categories = () => {
  return (
    <>
      <div className="md:px-8 px-4">
        <div className="bg-white md:py-10 py-7">
        <h1 className="text-black text-3xl font-bold text-center mb-8">
          Categories
        </h1>

        <div className="grid  md:grid-cols-11 grid-cols-1 gap-5 px-3 md:px-8 ">
          {/* left side  */}
          <div className="col-span-2 mx-auto">
            <img
              src=""
              alt=""
              className="bg-green-900 md:w-[288px] w-[200px] md:h-[320px] h-[200px]  mx-auto  "
            />
          </div>
          {/* center side  */}
          <div className="col-span-6 grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3">
            <div className="bg-blue-900 rounded-2xl py-2 px-4">
              <h1 className="text-white  text-2xl text-center font-semibold">
                Moda y Belleza
              </h1>
              <div className="flex gap-x-3 mt-4">
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
              </div>
            </div>

            <div className="bg-blue-900 rounded-2xl py-2 px-4">
              <h1 className="text-white  text-2xl text-center font-semibold">
                Moda y Belleza
              </h1>
              <div className="flex gap-x-3 mt-4">
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
              </div>
            </div>

            <div className="bg-blue-900 rounded-2xl py-2 px-4">
              <h1 className="text-white  text-2xl text-center font-semibold">
                Moda y Belleza
              </h1>
              <div className="flex gap-x-3 mt-4">
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
              </div>
            </div>

            <div className="bg-blue-900 rounded-2xl py-2 px-4">
              <h1 className="text-white  text-2xl text-center font-semibold">
                Moda y Belleza
              </h1>
              <div className="flex gap-x-3 mt-4">
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
              </div>
            </div>
          </div>

          {/* rifhr side  */}
          <div className="col-span-3  mx-auto gap-y-3 ">
            {/* top   */}
            <div className="bg-blue-900 rounded-2xl py-2 px-4 ">
              <h1 className="text-white  text-2xl text-center font-semibold">
                Moda y Belleza
              </h1>
              <div className="flex gap-x-3 mt-4">
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                <img src="" alt="" className="w-full h-[77px] bg-green-900" />
              </div>
            </div>
            {/* bottom  */}
            <div className="flex gap-3 mt-3">
              <div className="bg-blue-900 rounded-2xl py-2 px-4">
                <h1 className="text-white  text-2xl text-center font-semibold">
                  Moda y Belleza
                </h1>
                <div className="flex gap-x-3 mt-4">
                  <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                  <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                </div>
              </div>

              <div className="bg-blue-900 rounded-2xl py-2 px-4">
                <h1 className="text-white  text-2xl text-center font-semibold">
                  Moda y Belleza
                </h1>
                <div className="flex gap-x-3 mt-4">
                  <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                  <img src="" alt="" className="w-full h-[77px] bg-green-900" />
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>

      </div>
    </>
  );
};

export default Categories;
