import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 bg-white relative shadow-md"
    >
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-32 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <div
            className="text-4xl tracking-tight font-extrabold
           text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
          >
            <span className="block xl:inline">
              <>{slice.primary.titulo}</>
            </span>{' '}
            <span className="block text-orange-500 xl:inline">
              <>{slice.primary.titulocolorido}</>
            </span>
          </div>
          <div
            className="mt-3 max-w-md mx-auto text-lg text-gray-500
           sm:text-xl md:mt-5 md:max-w-3xl"
          >
            <PrismicRichText field={slice.primary.subtitulo} />
          </div>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 
                border border-transparent text-base font-medium rounded-md text-white
                 bg-orange-400 hover:bg-orange-500 md:py-4 md:text-lg md:px-10"
              >
                <>{slice.primary.productsbuttontext}</>
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 
                border border-transparent text-base font-medium rounded-md
                 text-orange-500 bg-white hover:bg-slate-50 
                 md:py-4 md:text-lg md:px-10"
              >
                <>{slice.primary.aboutbuttontext}</>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <PrismicNextImage field={slice.primary.backgroundimage} />
      </div>
    </section>
  );
};

export default Hero;
