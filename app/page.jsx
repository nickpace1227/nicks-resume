import Image from "next/image";
import css from "../public/images/logos/css.png";
import git from "../public/images/logos/git.png";
import github from "../public/images/logos/github-mark.png";
import html from "../public/images/logos/html.png";
import js from "../public/images/logos/js.png";
import macos from "../public/images/logos/macos.png";
import next from "../public/images/logos/next.ico";
import react from "../public/images/logos/react.ico";
import redux from "../public/images/logos/redux.png";
import styledComponentsLogo from "../public/images/logos/styled-components-logo.png";
import tailwind from "../public/images/logos/tailwind.svg";
import vscode from "../public/images/logos/vscode.png";
import windowslogo from "../public/images/logos/windowslogo.png";
import node from "../public/images/logos/node-js.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-auto">
      <div className="text-center m-2 mt-4 w-168">Welcome!</div>
      <div className="text-center m-2 w-168">
        Hey there! My name is Nick and I am an aspiring web developer. I've done
        IT for close to 10 years now and am looking to branch out to new
        horizons.
      </div>
      <div className="text-center m-2 w-168">
        The bulk of my experience with IT has been focused on supporting various
        different military commands and government agencies. I've always been
        interested in creating things and problem solving. My learning track has
        been a lot of researching languages and issues, a lot of self paced
        courses, and a lot of collaboration with my friends who are in the
        industry to develop new skills and work my way towards doing this as a
        full-time job.
      </div>
      <div className="text-center m-2 w-168">
        I graduated from USF in 2016. I have a passion for playing TTRPGs, think
        Dungeons & Dragons, video games, and reading. I've been known to enjoy
        hiking, and doing, mostly, wildlife photography. I've got 2 dogs and am
        recently married.
      </div>
      <div className="text-center m-2 w-168">
        Below is a general list of systems, languages, and technology I've used.
        If you'd like to see a high level of my work and check out some links,
        head on over to the Sites section and have a look. If you're looking to
        reach out, head over to, you guessed it, the Contact page.
      </div>

      <div className="m-2 mb-4">
        <div className="flex flex-col items-center">
          {/* Row One */}
          <div className="flex w-full justify-evenly">
            <div className="flex flex-col items-center m-2">
              <Image src={js} className="m-2 h-16 w-16" />
              <div className="text-wrap p-2 text-sm text-center bg-green-700 rounded-lg">
                Java Script
              </div>
            </div>
            <div className="flex flex-col items-center m-2">
              <Image src={next} className="m-2 h-16 w-16" />
              <div className="w-full p-2 text-sm text-center bg-green-700 rounded-lg">
                Next JS
              </div>
            </div>
            <div className="flex flex-col items-center m-2">
              <Image src={node} className="m-2 h-16 w-16" />
              <div className="w-full p-2 text-sm text-center bg-green-700 rounded-lg">
                Node JS
              </div>
            </div>
            <div className="flex flex-col items-center m-2">
              <Image src={react} className="m-2 h-16 w-16" />
              <div className="w-full p-2 text-sm text-center bg-green-700 rounded-lg">
                React
              </div>
            </div>
            <div className="flex flex-col items-center m-2">
              <Image src={redux} className="m-2 h-16 w-16" />
              <div className="w-full p-2 text-sm text-center bg-green-700 rounded-lg">
                Redux
              </div>
            </div>
          </div>

          {/* Row Two */}
          <div className="flex w-full justify-evenly">
            <div className="flex flex-col items-center m-2">
              <Image src={html} className="m-2 h-16 w-16" />
              <div className="w-full p-2 text-sm text-center bg-green-700 rounded-lg">
                HTML
              </div>
            </div>
            <div className="flex flex-col items-center m-2">
              <Image src={css} className="m-2 h-16 w-16" />
              <div className="w-full p-2 text-sm text-center bg-green-700 rounded-lg">
                CSS
              </div>
            </div>
            <div className="flex flex-col items-center m-2">
              <Image src={vscode} className="m-2 h-16 w-16" />
              <div className="w-full p-2 text-sm text-center bg-green-700 rounded-lg">
                VSCode
              </div>
            </div>
            <div className="flex flex-col items-center m-2">
              <Image src={git} className="m-2 h-16 w-16" />
              <div className="w-full p-2 text-sm text-center bg-green-700 rounded-lg">
                Git
              </div>
            </div>
            <div className="flex flex-col items-center m-2">
              <Image src={github} className="m-2 h-16 w-16" />
              <div className="w-full p-2 text-sm text-center bg-green-700 rounded-lg">
                GitHub
              </div>
            </div>
          </div>

          {/* Row Three */}
          <div className="flex w-full justify-evenly">
            <div className="flex flex-col items-center m-2">
              <Image src={styledComponentsLogo} className="m-2 h-16 w-16" />
              <div className="w-full text-wrap p-2 text-sm text-center bg-green-700 rounded-lg">
                Styled Components
              </div>
            </div>
            <div className="flex flex-col items-center m-2">
              <Image src={tailwind} className="m-2 h-16 w-16" />
              <div className="w-full p-2 text-sm text-center bg-green-700 rounded-lg">
                Tailwind CSS
              </div>
            </div>
            <div className="flex flex-col items-center m-2">
              <Image src={macos} className="m-2 h-16 w-16" />
              <div className="w-full p-2 text-sm text-center bg-green-700 rounded-lg">
                MacOS
              </div>
            </div>
            <div className="flex flex-col items-center m-2">
              <Image src={windowslogo} className="m-2 h-16 w-16" />
              <div className="w-full p-2 text-sm text-center bg-green-700 rounded-lg">
                Windows OS
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
