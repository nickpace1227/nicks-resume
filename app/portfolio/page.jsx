import Image from "next/image";
import Link from "next/link";

import WeatherSpritePreview from "../../public/images/weathersprite-image/weathersprite.jpg";
import SpiritsAlmanacPreview from "../../public/images/spirits-almanac-image/spirits-almanac.jpg";
import ThornbushPreview from "../../public/images/thornbush-photography-image/thornbush.jpg";

export default function Sites() {
  return (
    <main className="flex flex-col items-center h-auto">
      <div className="text-center w-168 m-4">
        {`Below you'll find an assortment of my work. There's a few high level
        details about each site, a link to the actual site, and a quick glimpse
        of the site. If you have any questions not answered here, head over to
        the contact page and drop me a line!`}
      </div>

      {/* Begin WeatherSprite */}
      <div className="flex items-end w-200 justify-evenly h-auto">
        <div className="flex items-center m-4">
          <a href="https://www.weathersprite.com" target="_blank">
            <Image
              alt="WeatherSprite Preview"
              className="m-4 w-60 shadow-dark"
              src={WeatherSpritePreview}
            />
          </a>

          <div className="w-60 m-4">
            <div className="text-center font-Lemon text-2xl my-2">
              Weathersprite
            </div>
            <div className="my-2">
              {`This site is designed as a fairly simple weather app. More to find
              out if you need a jacket for that day, the next few hours, or the
              next few days.`}
            </div>
            <div className="text-center underline m-2">Notable Features</div>
            <ul className="my-2 text-center">
              <li>React</li>
              <li>Async/Await API Calls</li>
              <li>Styled Components</li>
              <li>Mobile Styling</li>
            </ul>
            <div className="mt-2">
              <div className="underline text-center">Site Link</div>
              <a
                className="text-darkBlue flex justify-center"
                href="https://www.weathersprite.com"
                target="_blank"
              >
                WeatherSprite.com
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End weathersprite */}

      {/* Begin Spirits Almanac */}
      <div className="flex items-end justify-evenly w-200">
        <div className="flex items-center m-4">
          <div className="w-60 m-4">
            <div className="text-center font-FjallaOne text-2xl my-2">
              Spirits Almanac
            </div>
            <div className="my-2">
              {`Spirits Almanac is designed as a site in which to catalouge
              spirits you've tasted to advance the future of whiskey nerds, such
              as myself.`}
            </div>
            <div className="text-center underline">Notable Features</div>
            <ul className="my-2 text-center">
              <li>React</li>
              <li>Redux</li>
              <li>Modals</li>
              <li>Styled Components</li>
              <li>Search Functionality</li>
            </ul>
            <div className="mt-2">
              <div className="underline text-center">Site Link</div>
              <a
                className="text-darkBlue flex justify-center"
                href="https://www.spiritsalmanac.com"
                target="_blank"
              >
                SpiritsAlmanac.com
              </a>
            </div>
          </div>
          <a href="https://www.spiritsalmanac.com" target="_blank">
            <Image
              alt="Spirits Almanac Preview"
              className="m-4 h-52 w-96 shadow-dark"
              src={SpiritsAlmanacPreview}
            />
          </a>
        </div>
      </div>
      {/* End Spirits Almanac */}

      {/* Begin Thornbush Photography */}
      <div className="flex items-end justify-evenly w-200">
        <div className="flex items-center m-4">
          <a href="https://www.spiritsalmanac.com" target="_blank">
            <Image
              alt="Thornbush Photography Preview"
              className="m-4 h-52 w-96 shadow-dark"
              src={ThornbushPreview}
            />
          </a>

          <div className="w-60 m-4">
            <div className="text-center font-BadScript text-2xl my-2">
              Thornbush Photography
            </div>
            <div className="my-2">
              {`Thornbush Photography was developed with a photographer in mind.
              This site is intended to showcase a portfolio as well as provide a
              contact point with fans of the photographer's work.`}
            </div>
            <div className="text-center underline">Notable Features</div>
            <ul className="my-2 text-center">
              <li>React</li>
              <li>Styled Components</li>
              <li>EmailJS</li>
              <li>Modals</li>
            </ul>
            <div className="mt-2">
              <div className="underline text-center">Site Link</div>
              <a
                className="text-darkBlue flex justify-center"
                href="https://www.thornbushphotography.com"
                target="_blank"
              >
                ThornbushPhotography.com
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Thornbush Photography */}
    </main>
  );
}
