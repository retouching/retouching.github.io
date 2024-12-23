"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import { faArrowUp, faAt, faBars } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONFIG, PROJECTS, EXPERIENCES } from "@/config";
import BounceBtn from "@/components/bouncebtn";
import { useEffect, useState } from "react";
import NavBtn from "@/components/navbtn";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import InputCopy from "@/components/inputcopy";

function MenuBar() {
  const [openned, setOpenned] = useState(false);

  return (
    <div className="fixed z-[9999] h-screen" onMouseLeave={() => setOpenned(false)}>
      <div className="grid top-4 left-4 fixed sm:grid-flow-col">
        <Button aria-label="Burger button" className={`${openned ? "sm:rounded-l-[0.5rem] sm:rounded-tr-none rounded-bl-none rounded-t-[0.5rem] rounded-e-none" : "bg-transparent text-white hover:text-black"} transition-all ease-in-out duration-200`} onClick={() => setOpenned(!openned)}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <div className={`${openned ? "opacity-100 last-of-type:rounded-e-[0.5rem]" : "opacity-0 pointer-events-none"} transition-opacity ease-in-out duration-200 sm:grid-flow-col grid`}>
          <NavBtn name="Profil" target="profil" />
          <NavBtn name="Projects" target="projects" />
          <NavBtn name="Skills" target="skills" />
          <NavBtn name="Experience" target="experience" />
          <NavBtn name="Contact" target="contact" />
        </div>
      </div>
    </div>
  );
}

function HeadBlock() {
  return (
    <div className="flex min-h-screen justify-center relative z-0" id="profil">
      <div className="h-full w-full absolute bg-center bg-cover z-[-1] opacity-15" style={{
        backgroundImage: `url(${CONFIG.PROFIL_BG})`,
      }} />

      <div className="text-center z-10 content-center">
        <div
          style={{
            backgroundImage: `url(${CONFIG.AVATAR_URL})`,
          }}
          className="w-[150px] h-[150px] bg-cover mx-auto mb-4 border-4 rounded-md hover:scale-110 ease-out duration-300 z-10 relative"
        />
        <h1 className="text-5xl">retouching</h1>
        <h2 className="text-xl">web developer</h2>

        <div className="space-x-4 mt-4 text-2xl">
          <a aria-label="Twitter" target="_blank" href={CONFIG.TWITTER} className="hover:scale-150 ease-out duration-150 inline-block">
            <Image src="/icons/twitter.svg" alt="Twitter" width={150} height={150} className="w-[1em] inline-block align-[-0.125em] pointer-events-none" />
          </a>

          <a aria-label="Github" target="_blank" href={CONFIG.GITUHB} className="hover:scale-150 ease-out duration-150 inline-block">
            <Image src="/icons/github.svg" alt="Github" width={150} height={150} className="w-[1em] inline-block align-[-0.125em] pointer-events-none" />
          </a>

          <a aria-label="Bento.me" target="_blank" href={CONFIG.BENTO} className="hover:scale-150 ease-out duration-150 inline-block">
            <Image src="/icons/bentome.svg" alt="Bento.me" width={150} height={150} className="w-[1em] inline-block align-[-0.125em] pointer-events-none" />
          </a>

          <a aria-label="Anilist" target="_blank" href={CONFIG.ANILIST} className="hover:scale-150 ease-out duration-150 inline-block">
            <Image src="/icons/anilist.svg" alt="Anilist" width={150} height={150} className="w-[1em] inline-block align-[-0.125em] pointer-events-none" />
          </a>

          <a aria-label="Letterboxd" target="_blank" href={CONFIG.LETTERBOXD} className="hover:scale-150 ease-out duration-150 inline-block">
            <Image src="/icons/letterboxd.svg" alt="Letterboxd" width={150} height={150} className="w-[1em] inline-block align-[-0.125em] pointer-events-none" />
          </a>
        </div>
        <BounceBtn target="projects" position="bottom" />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id="projects" className="min-h-screen content-center relative z-0">
      <div className="space-y-2 my-20">
        <h1 className="text-5xl text-center">Projects</h1>
        <h2 className="text-2xl text-center">Things I have done</h2>
      </div>
      <div className="grid xl:grid-cols-3 my-24 gap-y-4 gap-x-4 mx-4 2xl:max-w-[1280px] 2xl:mx-auto">
        {PROJECTS.map((project, index) => (
          <Card className={`bg-zinc-900/55 m-auto w-full text-center h-full xl:hover:scale-105 ease-out duration-150 ${project.url ? "cursor-pointer" : ""}`} key={index} onClick={() => {
            if (project.url) window.open(project.url, "_blank")?.focus();
          }}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="space-y-2 my-20">
        <h2 className="text-base text-center"><i>Most of projects available on my <a target="_blank" href={CONFIG.GITUHB} className="font-bold">Github</a></i></h2>
      </div>
      <BounceBtn target="skills" position="bottom" />
    </div>
  );
}

function Skills() {
  return (
    <div id="skills" className="min-h-screen flex justify-center relative z-0">
      <div className="h-full w-full absolute bg-center bg-cover z-[-1] opacity-15" style={{
        backgroundImage: `url(${CONFIG.SKILLS_BG})`,
      }} />
      <div className="content-center w-full my-24">
        <div className="space-y-2 xl:mb-10 mt-20 text-center mx-4">
          <h1 className="text-5xl text-center">Skills</h1>
          <h2 className="text-2xl text-center font-serif italic">❝ I don't know everything, I just know what I know ❞</h2>
        </div>
        <div className="grid xl:grid-cols-3 mt-24 gap-y-4 gap-x-4 mx-4 2xl:max-w-[1280px] 2xl:mx-auto">
          <Card className="m-auto w-full h-full xl:hover:scale-105 ease-out duration-150 bg-orange-950/40 border-red-900/40">
            <CardHeader className="text-center">
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-1">
                <li className="space-x-2 block">
                  <Image src="/icons/js.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">JavaScript / TypeScript</p>
                </li>
                <li className="space-x-2">
                  <Image src="/icons/py.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">Python</p>
                </li>
                <li className="space-x-2">
                  <Image src="/icons/java.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">Java</p>
                </li>
                <li className="space-x-2">
                  <Image src="/icons/html.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">HTML / CSS</p>
                </li>
                <li className="space-x-2">
                  <Image src="/icons/php.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">PHP</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="m-auto w-full h-full xl:hover:scale-105 ease-out duration-150 bg-orange-950/40 border-red-900/40">
            <CardHeader className="text-center">
              <CardTitle>Frameworks / Librairies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-1">
                <li className="space-x-2">
                  <Image src="/icons/vuejs.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">Vue / Nuxt</p>
                </li>
                <li className="space-x-2">
                  <Image src="/icons/react.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">React / Next</p>
                </li>
                <li className="space-x-2">
                  <Image src="/icons/fastapi.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">Flask / FastAPI</p>
                </li>
                <li className="space-x-2">
                  <Image src="/icons/expressjs.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none invert" />
                  <p className="inline">Express.js</p>
                </li>
                <li className="space-x-2">
                  <Image src="/icons/tailwindcss.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">Bulma / Bootstrap / Tailwind CSS</p>
                </li>
                <li className="space-x-2">
                  <Image src="/icons/symfony.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none invert" />
                  <p className="inline">Symfony</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="m-auto w-full h-full xl:hover:scale-105 ease-out duration-150 bg-orange-950/40 border-red-900/40">
            <CardHeader className="text-center">
              <CardTitle>Other</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-1">
                <li className="space-x-2">
                  <Image src="/icons/docker.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">Docker</p>
                </li>
                <li className="space-x-2">
                  <Image src="/icons/postgresql.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">MySQL / MariaDB / PostgreSQL</p>
                </li>
                <li className="space-x-2">
                  <Image src="/icons/mongodb.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">MongoDB / RethinkDB</p>
                </li>
                <li className="space-x-2">
                  <Image src="/icons/redis.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">Redis / RabbitMQ</p>
                </li>
                <li className="space-x-2">
                  <Image src="/icons/nodejs.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">NodeJS</p>
                </li>
                <li className="space-x-2">
                  <Image src="/icons/git.svg" alt="icon" width={150} height={150} className="w-[1.3rem] h-[1.3rem] inline pointer-events-none" />
                  <p className="inline">Git / Github</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <BounceBtn target="experience" position="bottom" />
    </div>
  );
}

function Experience() {
  return (
    <div id="experience" className="min-h-screen flex justify-center relative">
      <div className="content-center w-full">
        <div className="space-y-2 xl:mb-10 mt-24 text-center mx-4">
          <h1 className="text-5xl text-center">Experiences</h1>
          <h2 className="text-2xl text-center">What works I achieve until now</h2>
        </div>
        <div className="mx-4 content-center my-24">
          <Accordion type="single" collapsible className="lg:w-[550px] m-auto mt-10">
            {EXPERIENCES.map((experience, index) => {
              return (
                <AccordionItem key={index} value={index.toString()}>
                  <AccordionTrigger className="hover:no-underline">{experience.title}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm">Date: {experience.date}</p>
                    <p className="text-sm">Description: {experience.description}</p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
      <BounceBtn target="contact" position="bottom" />
    </div>
  );
}

function Contact() {
  const [email, setEmail] = useState(CONFIG.CONTACT_EMAIL);
  const [discord, setDiscord] = useState(CONFIG.CONTACT_DISCORD);

  useEffect(() => {
    setEmail(window.atob(CONFIG.CONTACT_EMAIL));
    setDiscord(window.atob(CONFIG.CONTACT_DISCORD));
  }, []);

  return (
    <div id="contact" className="relative z-0">
      <div className="h-full w-full absolute bg-top bg-cover z-[-1] opacity-15" style={{
        backgroundImage: `url(${CONFIG.CONTACT_BG})`,
      }} />
      <div className="content-center w-full py-24">
        <div className="space-y-2 text-center">
          <h1 className="text-5xl">Contact</h1>
          <h2 className="text-2xl">If you want to get in touch with me</h2>
        </div>
        <div className="mt-12 lg:mx-auto mx-8 lg:max-w-[500px] space-y-2">
          <InputCopy value={email} icon={faAt} />
          <InputCopy value={discord} icon={faDiscord} />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="justify-center relative">
      <div className="space-y-2 text-center m-4">
        <h2 className="text-xs">
          Realized with <span className="font-bold text-sm italic px-[0.2rem]">Tailwind</span>,
          <span className="font-bold text-sm italic px-[0.2rem]">React</span>,
          <span className="font-bold text-sm italic px-[0.2rem]">Next</span> and <span className="font-bold text-sm italic px-[0.2rem]">Shadcn</span>
        </h2>
        <h2 className="text-xs">Available on <a target="_blank" href={CONFIG.REPO} className="font-bold text-sm italic">Github</a></h2>
      </div>
    </div>
  );
}

export default function Home() {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowGoTop(window.scrollY > 0 ? true : false);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main>
      <MenuBar />

      <HeadBlock />
      <hr />
      <Projects />
      <hr />
      <Skills />
      <hr />
      <Experience />
      <hr />
      <Contact />
      <hr />
      <Footer />

      <div className={`fixed bottom-4 right-0 transform -translate-x-1/2 -translate-y-1/2 ${showGoTop ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-150`}>
        <Button className="rounded-full shadow-md" variant="secondary" onClick={() => window.scrollTo({ top: 0 })} aria-label="Go to the top of the page">
          <FontAwesomeIcon icon={faArrowUp} />
        </Button>
      </div>
    </main>
  );
}
