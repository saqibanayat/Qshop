"use client";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from "react-slick";

// Settings for the slider
const settings = {
  // dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
  
  responsive: [
    {
      breakpoint: 0, // Breakpoint for extra small screens
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640, // Breakpoint for small screens
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024, // Breakpoint for medium screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1440, // Breakpoint for large screens
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

export default function CaptionCarousel() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as per your design
    };

    // Initial call to handleResize to set the initial state
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    {
      title: "Case Iphone 15 pro max",
      text: "We provide state-of-the-art office fit-out services that modernise workspaces to foster innovation, wellbeing and productivity.",
      image:
        "https://www.tetris-db.com/wp-content/uploads/2021/08/tetris-db-allianz-poland-office-11.jpg",
      price: "$500 MXN",
    },
    {
      title: "Case Iphone 15 pro max",
      text: "We design unique commercial spaces that inspire people to feel their best, helping businesses connect with their customers.",
      image:
        "https://www.tetris-db.com/wp-content/uploads/2021/08/tetris-db-magic-circus-france-hotel-2-scaled.jpg",
      price: "$500 MXN",
    },
    {
      title: "Case Iphone 15 pro max",
      text: "We specialise in sustainable commercial interior design. Our strategic fit-outs can improve the sustainability of your space.",
      image:
        "https://www.tetris-db.com/wp-content/uploads/2020/08/tetris-db-jll-manchester-7082-4-1087x725.jpg",
      price: "$500 MXN",
    },
    {
      title: "Case Iphone 15 pro max",
      text: "We specialise in sustainable commercial interior design. Our strategic fit-outs can improve the sustainability of your space.",
      image:
        "https://www.tetris-db.com/wp-content/uploads/2020/08/tetris-db-jll-manchester-7082-4-1087x725.jpg",
      price: "$500 MXN",
    },
  ];

  return (
    <div className="relative pt-20">
      <h2 className="text-2xl font-extrabold tracking-tight text-blue-400 sm:text-4xl pb-16 pl-12">
        Productos relacionados a “Apple iMac...”
      </h2>
      <div className="icons-container">
        {/* Left Icon */}
        {!isSmallScreen && (
          <IconButton
            aria-label="left-arrow"
            variant=""
            _hover={{ color: "#C3C32F" }}
            color={"black"}
            position="absolute"
            left={4}
           top="50%"
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          >
            {/* <BiLeftArrowAlt size="40px" /> */}
            <svg
              width="83"
              height="83"
              viewBox="0 0 83 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_6_3635)">
                <circle cx="41.5" cy="37.5" r="37.5" fill="white" />
              </g>
              <path
                d="M24 38L46.5 60.5L50 56.75L31.5 38L50 19.25L46.5 15.5L24 38Z"
                fill="#1C98F7"
              />
              <defs>
                <filter
                  id="filter0_d_6_3635"
                  x="0"
                  y="0"
                  width="83"
                  height="83"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_6_3635"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_6_3635"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </IconButton>
        )}

        {/* Right Icon */}
        {!isSmallScreen && (
          <IconButton
            aria-label="right-arrow"
            variant=""
            _hover={{ color: "#C3C32F" }}
            position="absolute"
            right={4}
            top="50%"
            color={"black"}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            {/* <BiRightArrowAlt size="40px" /> */}
            <svg
              width="83"
              height="83"
              viewBox="0 0 83 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_6_3639)">
                <circle
                  cx="37.5"
                  cy="37.5"
                  r="37.5"
                  transform="matrix(-1 0 0 1 79 0)"
                  fill="white"
                />
              </g>
              <path
                d="M56 38L33.5 60.5L30 56.75L48.5 38L30 19.25L33.5 15.5L56 38Z"
                fill="#1C98F7"
              />
              <defs>
                <filter
                  id="filter0_d_6_3639"
                  x="0"
                  y="0"
                  width="83"
                  height="83"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_6_3639"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_6_3639"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </IconButton>
        )}
      </div>

      <Box
        position={"relative"}
        height={"600px"}
        width={"92%"}
        mx="auto"
        overflow={"hidden"}
       className="px-24"
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box key={index} height={"100%"} px={4}>
            <Stack spacing={6} direction="column" height={"100%"} p={2}>
            <Box height={200} width={300} position="relative">
                  <Image src={card.image} alt={card.title} objectFit="cover" />
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    backgroundColor="blue"
                    color="white"
                    px={4}
                    py={4}
                    borderRadius="md"
                    fontWeight="bold"
                  >
                    {card.price}
                  </Box>
                  <Button
                    className="group transition-all duration-500 p-0.5"
                    position="absolute"
                    bottom={2}
                    right={2}
                    background="none"
                    _hover={{ background: "none" }}
                  >
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="fill-indigo-50 transition-all duration-500 group-hover:fill-indigo-100"
                        cx="30"
                        cy="30"
                        r="30"
                        fill=""
                      />
                      <path
                        className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-700"
                        d="M21.4709 31.3196L30.0282 39.7501L38.96 30.9506M30.0035 22.0789C32.4787 19.6404 36.5008 19.6404 38.976 22.0789C41.4512 24.5254 41.4512 28.4799 38.9842 30.9265M29.9956 22.0789C27.5205 19.6404 23.4983 19.6404 21.0231 22.0789C18.548 24.5174 18.548 28.4799 21.0231 30.9184M21.0231 30.9184L21.0441 30.939M21.0231 30.9184L21.4628 31.3115"
                        stroke=""
                        strokeWidth="1.6"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </Box>
              <Heading
               className="font-medium text-lg leading-8 text-gray-900 mb-4 pt-2"
                fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}
                color={"black"}
                
              >
                {card.title}
              </Heading>
              <Box className="block w-full">
                <Text
                  className="font-medium text-lg leading-8 text-gray-900 mb-4"
                >
                  Color
                </Text>
                <Box className="text">
                  <Flex
                    className="flex items-center justify-start gap-3 md:gap-6 relative mb-6"
                  >
                    <Button
                      data-ui="checked active"
                      className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-emerald-500"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="20" r="20" fill="#10B981" />
                      </svg>
                    </Button>
                    <Button
                      className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-amber-400 focus-within:border-amber-400"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="20" r="20" fill="#FBBF24" />
                      </svg>
                    </Button>
                    <Button
                      className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-red-500 focus-within:border-red-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <circle cx="20" cy="20" r="20" fill="#F43F5E" />
                      </svg>
                    </Button>
                    <Button
                      className="p-2.5 border border-gray-200 rounded-full  transition-all duration-300 hover:border-blue-400 focus-within:border-blue-400"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="20" r="20" fill="#2563EB" />
                      </svg>
                    </Button>


                    <Button
                      className="p-2.5 border border-gray-200 rounded-full  transition-all duration-300 hover:border-red-950 focus-within:border-red-950"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="20" r="20" fill="brown" />
                      </svg>
                    </Button>
                  </Flex>
                </Box>
              </Box>



              <button className="h-[52px] flex flex-row w-[300px] gap-2 items-center justify-center rounded-lg bg-yellow-400 text-center text-2xl py-4 text-white">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 22C6.95 22 6.47933 21.8043 6.088 21.413C5.69667 21.0217 5.50067 20.5507 5.5 20C5.5 19.45 5.696 18.9793 6.088 18.588C6.48 18.1967 6.95067 18.0007 7.5 18C8.05 18 8.521 18.196 8.913 18.588C9.305 18.98 9.50067 19.4507 9.5 20C9.5 20.55 9.30433 21.021 8.913 21.413C8.52167 21.805 8.05067 22.0007 7.5 22ZM17.5 22C16.95 22 16.4793 21.8043 16.088 21.413C15.6967 21.0217 15.5007 20.5507 15.5 20C15.5 19.45 15.696 18.9793 16.088 18.588C16.48 18.1967 16.9507 18.0007 17.5 18C18.05 18 18.521 18.196 18.913 18.588C19.305 18.98 19.5007 19.4507 19.5 20C19.5 20.55 19.3043 21.021 18.913 21.413C18.5217 21.805 18.0507 22.0007 17.5 22ZM5.7 4H20.45C20.8333 4 21.125 4.171 21.325 4.513C21.525 4.855 21.5333 5.20067 21.35 5.55L17.8 11.95C17.6167 12.2833 17.371 12.5417 17.063 12.725C16.755 12.9083 16.4173 13 16.05 13H8.6L7.5 15H19.5V17H7.5C6.75 17 6.18333 16.671 5.8 16.013C5.41667 15.355 5.4 14.7007 5.75 14.05L7.1 11.6L3.5 4H1.5V2H4.75L5.7 4Z" fill="white"/>
</svg>

             
            </button>

            <button className="h-[52px] w-[300px] flex items-center justify-center rounded-lg bg-orange-400 text-center text-xl py-4 text-white ">
            Comprar
            </button>


              {/* <Text fontSize={{ base: "sm", lg: "md" }} color="black">
                {card.text}
              </Text> */}
            </Stack>
          </Box>
          ))}
        </Slider>



        <div className="flex items-center justify-center py-16">

<svg
        width="1236"
        height="1"
        viewBox="0 0 1236 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="1236" y2="0.5" stroke="#C6C6C6" />
      </svg>
</div>



      </Box>
    </div>
  );
}
