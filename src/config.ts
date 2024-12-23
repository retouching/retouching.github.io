import { Buffer } from "buffer";

const CONFIG = {
  GITUHB: "https://github.com/retouching",
  AVATAR_URL: `https://wsrv.nl/?url=${encodeURI("avatars.githubusercontent.com/u/33735357")}&w=250&h=250&maxage=1d&output=webp`,
  BENTO: "https://bento.me/arch",
  ANILIST: "https://anilist.co/user/cpp/",
  TWITTER: "https://x.com/kessokubandstar",
  LETTERBOXD: "https://letterboxd.com/kessokuband/",
  PROFIL_BG: `https://wsrv.nl/?url=${encodeURI("i.kek.sh/r4CpjIP4QpH.png")}&w=1600&h=900&maxage=1d&output=webp`,
  SKILLS_BG: `https://wsrv.nl/?url=${encodeURI("i.kek.sh/Zdv8yC9u5SX.png")}&w=1600&h=900&maxage=1d&output=webp`,
  CONTACT_BG: `https://wsrv.nl/?url=${encodeURI("i.kek.sh/o9Q2eqAL7Yh.jpg")}&w=1600&h=534&maxage=1d&output=webp`,
  CONTACT_DISCORD: Buffer.from("kessokubandstarry", "utf-8").toString("base64"),
  CONTACT_EMAIL: Buffer.from("kessokubandstarry@proton.me", "utf-8").toString("base64"),
  REPO: "https://github.com/retouching/retouching.github.io",
};

const PROJECTS = [
  {
    title: "nf-msl-reader",
    description: "Intercept and parse MSL requests and responses from Netflix",
    url: "https://github.com/retouching/nf-msl-reader",
  },
  {
    title: "nginx-installer",
    description: "Fast and complete NGINX installer",
    url: "https://github.com/retouching/nginx-installer",
  },
  {
    title: "FlareSolverr-Python",
    description: "Python API for FlareSolverr service",
    url: "https://github.com/retouching/FlareSolverr-Python",
  },
  {
    title: "cfw-proxy",
    description: "Use Workers to proxy urls body",
    url: "https://github.com/retouching/cfw-proxy",
  },
  {
    title: "colab-torrent",
    description: "Download torrent in Google Drive with Colab",
    url: "https://github.com/retouching/colab-torrent",
  },
  {
    title: "Devine services",
    description: "Devine services for download content from various VOD services.",
  },
];

const EXPERIENCES = [
  {
    title: "Freelance",
    date: "Sep. 2021 to now",
    description: "Working as a freelance developer",
  },
  {
    title: "Majin.fr",
    date: "Aug. 2021 to now",
    description: "Creation of a Minecraft server (UHC & mini-games)",
  },
  {
    title: "Commission for Microsoft",
    date: "May 2022",
    description: "Creation of a Minecraft mini-game (treasure hunt) for the \"Build 2022\" event",
  },
  {
    title: "Commission for Coca Cola",
    date: "Oct. 2021 to Nov. 2021",
    description: "Creation of a Minecraft mini-game for an event for Coca Cola and \"Wankil Studio\"",
  },
  {
    title: "Internship at Lactalis",
    date: "October 2020",
    description: "Creation of an internal web software",
  },
];

export {
  CONFIG, PROJECTS, EXPERIENCES,
};
