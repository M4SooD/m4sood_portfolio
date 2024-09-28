import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

import Social from '@/components/ui/Social';
import Photo from '@/components/ui/Photo';
import Stats from '@/components/ui/Stats';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Front-End Developer</span>
            <h1 className="h1">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Hello I'm <br /> <span className="text-accent">Masood </span>
            </h1>
            <p className="max-w[500px] mb-9 text-white/80 ">
              I Have experince in React and Angular, skilled at creating
              user-centric applications that enhance engagement. Proficient in
              technologies such as Redux-Toolkit, MUI, React-Router, Cypress,
              React-Table, NGRX and more...
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a
                  href="/assets/Masood Moosavi - Front End Developer.pdf"
                  download="Masood Moosavi - Front End Developer.pdf"
                  className="flex items-center space-x-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home;
