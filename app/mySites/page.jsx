export default function Sites() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-end w-134">
        <div className="w-60">
          <div className="text-center">WeatherSpout</div>
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
      <div className="flex flex-col w-134">
        <div className="w-60">
          <div className="text-center">Spirits Almanac</div>
          <div>
            Spirits Almanac is designed as a site in which to catalouge spirits
            you've tasted to advance the future of whiskey nerds, such as
            myself.
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
      </div>
      <div className="flex flex-col items-end w-134">
        <div className="w-60">
          <div className="text-center">Thornbush Photography</div>
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
    </main>
  );
}
