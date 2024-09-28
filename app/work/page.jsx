'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Nexter',
    description:
      'Nexter is a responsive website for showcasing luxury homes, featuring a sleek design, dynamic grid layout, and smooth animations. Built using HTML, CSS, Sass, and JavaScript, it demonstrates modern front-end development techniques for an engaging user experience.',
    stack: [
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'Sass' },
      { name: 'Javascript' },
    ],
    image: '/assets/work/Nexter.png',
    live: 'https://nextteer.netlify.app/',
    github: 'https://github.com/M4SooD/Nexter',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Natours',
    description:
      'Natours is a website for booking adventure tours, designed with a clean, responsive layout and immersive visuals. Built with advanced CSS and Sass, the site features eye-catching animations, parallax effects, and a focus on delivering a smooth user experience across all devices.',
    stack: [
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'Sass' },
      { name: 'Javascript' },
    ],
    image: '/assets/work/Natours.png',
    live: 'https://natrourss.netlify.app/',
    github: 'https://github.com/M4SooD?page=1&tab=repositories',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Omnifood',
    description:
      'Omnifood is a website for an AI-powered food delivery service, offering a clean and responsive design. The site showcases modern UI elements, smooth scrolling, and advanced CSS animations, built using HTML, CSS, and JavaScript to ensure a seamless user experience on any device.',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    image: '/assets/work/Omnifood.png',
    live: 'https://omniifoods.netlify.app/',
    github: 'https://github.com/M4SooD/Omnifood',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Forkify',
    description:
      'Forkify is a website designed for a recipe-sharing platform, featuring a vibrant and user-friendly interface. Built with responsive design principles, the site utilizes modern CSS techniques and JavaScript for interactive elements, providing an engaging experience for users to explore and share their favorite recipes.',
    stack: [{ name: 'Html 5' }, { name: 'Sass' }, { name: 'Javascript' }],
    image: '/assets/work/Forkify.png',
    live: 'https://forkifaay.netlify.app/',
    github: 'https://github.com/M4SooD/Forkify',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-8-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
