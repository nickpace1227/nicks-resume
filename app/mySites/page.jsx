import Image from "next/image";

export default function Sites() {
  return (
    <main className="flex flex-col items-center">
      <div className="text-center w-150 m-4">
        Below you'll find an assortment of my work. There's a few high level
        details about each site, a link to the actual site, and a quick glimpse
        of the site. If you have any questions not answered here, head over to
        the contact page and drop me a line!
      </div>

      {/* Begin WeatherSpout */}
      <div className="flex items-end">
        <div className="flex items-center justify-evenly w-150 m-4">
          <Image
            className="m-4 w-60"
            src={require("../../public/images/weatherspout-image/weatherspout.jpg")}
          />
          <div className="w-60 m-4">
            <div className="text-center font-Lemon text-2xl">WeatherSpout</div>
            <div>
              This site is designed as a fairly simple weather app. More to find
              out if you need a jacket for that day, the next few hours, or the
              next few days.
            </div>
            <div className="text-center underline">Notable Features</div>
            <ul className="list-disc">
              <li>React</li>
              <li>Async/Await API Calls</li>
              <li>Styled Components</li>
              <li>Mobile Styling</li>
            </ul>
            <div>WeatherSpout.address</div>
          </div>
        </div>
      </div>
      {/* End WeatherSpout */}

      {/* Begin Spirits Almanac */}
      <div className="flex items-end">
        <div className="flex items-center w-150 m-4">
          <div className="w-60">
            <div className="text-center font-FjallaOne text-2xl">
              Spirits Almanac
            </div>
            <div>
              Spirits Almanac is designed as a site in which to catalouge
              spirits you've tasted to advance the future of whiskey nerds, such
              as myself.
            </div>
            <div className="text-center underline">Notable Features</div>
            <ul className="list-disc">
              <li>React</li>
              <li>Redux</li>
              <li>Styled Components</li>
              <li>Modals</li>
              <li>Search Functionality</li>
            </ul>
            <div>SpiritsAlmanac.address</div>
          </div>
          <Image
            className="m-4 w-96"
            src={require("../../public/images/spirits-almanac-image/spirits-almanac.jpg")}
          />
        </div>
      </div>
      {/* End Spirits Almanac */}

      {/* Begin Thornbush Photography */}
      <div className="flex items-end">
        <div className="flex items-center w-150 m-4">
          <Image
            className="m-4 w-96"
            src={require("../../public/images/thornbush-photography-image/thornbush.jpg")}
          />
          <div className="w-60 m-4">
            <div className="text-center font-BadScript text-2xl">
              Thornbush Photography
            </div>
            <div className="">
              Thornbush Photography was developed with a photographer in mind.
              This site is intended to showcase a portfolio as well as provide a
              contact point with fans of the photographer's work.
            </div>
            <div className="text-center underline">Notable Features</div>
            <ul className="list-disc">
              <li>React</li>
              <li>Styled Components</li>
              <li>EmailJS</li>
              <li>Modals</li>
            </ul>
            <div>ThornbushPhotography.com</div>
          </div>
        </div>
      </div>
      {/* End Thornbush Photography */}

      {/* Begin Nick's Resume */}
      <div className="flex flex-col w-150 m-4">
        <div className="w-60">
          <div className="text-center font-Honk text-4xl">Nick's Resume</div>
          <div className="">
            Nick's Resume is, well, this site. It's designed with a focus on
            putting all of my skills in one place for ease of viewing.
          </div>
          <div className="text-center underline">Notable Features</div>
          <ul className="list-disc">
            <li>Next.JS</li>
            <li>Tailwind</li>
            <li>EmailJS</li>
          </ul>
          <div>NicksResume.address</div>
        </div>
      </div>
      {/* End Nick's Resume */}
    </main>
  );
}
