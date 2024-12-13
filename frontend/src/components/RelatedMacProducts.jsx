"use client";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {ReactComponent as NextIcon} from '../assets/svg/next.svg';
import {ReactComponent as BackIcon} from '../assets/svg/back.svg';
import {ReactComponent as CartIcon} from '../assets/svg/cart.svg';
import {ReactComponent as HeartIcon} from '../assets/svg/heart.svg';
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
          
            <NextIcon/>
          </IconButton>
        )}

       
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
          
           <BackIcon/>
          </IconButton>
        )}
      </div>

      <Box
        position={"relative"}
        height={"600px"}
        width={"92%"}
        mx="auto"
        overflow={"hidden"}
       className="px-5"
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
                    <HeartIcon/>
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
            <CartIcon/>

             
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
