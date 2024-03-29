import Image from "next/image";
import WeatherSpritePreview from "../../public/images/weathersprite-image/weathersprite.jpg";
import SpiritsAlmanacPreview from "../../public/images/spirits-almanac-image/spirits-almanac.jpg";
import ThornbushPreview from "../../public/images/thornbush-photography-image/thornbush.jpg";

export default function Portfolio() {
  return (
    <main className="flex flex-col items-center h-auto">
      {/* Begin Thornbush Photography */}
      <div className="flex flex-col lg:flex-row justify-evenly w-screen lg:w-200">
        <div className="flex flex-col lg:flex-row items-center m-4">
          <a
            href="https://www.thornbushphotography.com"
            target="_blank"
            className="p-4"
          >
            <Image
              alt="Thornbush Photography Preview"
              className="shadow-dark"
              src={ThornbushPreview}
            />
          </a>
          <div className="w-64 m-4">
            <a
              className="flex justify-center text-center text-darkBlue text-2xl font-BadScript font-bold my-2 underline"
              href="https://www.thornbushphotography.com"
              target="_blank"
            >
              ThornbushPhotography.com
            </a>
            <div className="my-2 w-64">
              {`Thornbush Photography was developed with a photographer in mind.
              This site is intended to showcase a photography portfolio as well as provide a
              contact point with fans of the photographer's work.`}
            </div>
            <div className="text-center underline">Notable Features</div>
            <ul className="my-2">
              <li>React</li>
              <li>Styled Components</li>
              <li>EmailJS</li>
              <li>Modals</li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Thornbush Photography */}

      {/* Begin Spirits Almanac */}
      <div className="flex flex-col lg:flex-row lg:justify-evenly w-screen lg:w-200">
        <div className="flex items-center flex-col lg:flex-row-reverse m-4">
          <a
            href="https://www.spiritsalmanac.com"
            target="_blank"
            className="p-4"
          >
            <Image
              alt="Spirits Almanac Preview"
              className="shadow-dark"
              src={SpiritsAlmanacPreview}
            />
          </a>
          <div className="w-64 m-4">
            <a
              className="text-darkBlue flex justify-center text-center font-FjallaOne text-3xl my-2 underline"
              href="https://www.spiritsalmanac.com"
              target="_blank"
            >
              SpiritsAlmanac.com
            </a>
            <div className="my-2 w-64">
              {`Spirits Almanac is designed as a site to catalouge
              spirits you've tasted to advance the future of whiskey nerds, such
              as myself.`}
            </div>
            <div className="text-center underline">Notable Features</div>
            <ul className="my-2">
              <li>React</li>
              <li>Redux</li>
              <li>Modals</li>
              <li>Styled Components</li>
              <li>Search Functionality</li>
            </ul>
            <div className="mt-2"></div>
          </div>
        </div>
      </div>
      {/* End Spirits Almanac */}

      {/* Begin WeatherSprite */}
      <div className="flex flex-col lg:flex-row lg:justify-evenly w-screen lg:w-200">
        <div className="flex flex-col lg:flex-row items-center m-4">
          <a
            href="https://www.weathersprite.com"
            target="_blank"
            className="p-4"
          >
            <Image
              alt="WeatherSprite Preview"
              className="shadow-dark"
              src={WeatherSpritePreview}
            />
          </a>

          <div className="m-4">
            <a
              className="text-darkBlue flex justify-center text-center font-Lemon text-2xl my-2 underline"
              href="https://www.weathersprite.com"
              target="_blank"
            >
              WeatherSprite.com
            </a>
            <div className="my-2 w-64">
              {`This site is designed as a fairly simple mobile-first weather app. Find out if you need a jacket for that day, the next few hours, or the next few days.`}
            </div>
            <div className="text-center underline m-2">Notable Features</div>
            <ul className="my-2">
              <li>React</li>
              <li>Async/Await API Calls</li>
              <li>Styled Components</li>
              <li>Mobile Styling</li>
            </ul>
          </div>
        </div>
      </div>
      {/* End weathersprite */}
    </main>
  );
}
