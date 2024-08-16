import { Buffer } from "buffer";

const CONFIG = {
  GITUHB: "https://github.com/retouching",
  AVATAR_URL: `https://wsrv.nl/?url=${encodeURI("avatars.githubusercontent.com/u/33735357")}&w=250&h=250&maxage=1d&output=webp`,
  BENTO: "https://bento.me/arch",
  ANILIST: "https://anilist.co/user/cpp/",
  TWITTER: "https://x.com/kessokubandstar",
  LETTERBOXD: "https://letterboxd.com/kessokuband/",
  PROFIL_BG: `https://wsrv.nl/?url=${encodeURI("files.catbox.moe/uey5kd.png")}&w=1600&h=900&maxage=1d&output=webp`,
  SKILLS_BG: `https://wsrv.nl/?url=${encodeURI("files.catbox.moe/efrte1.png")}&w=1600&h=900&maxage=1d&output=webp`,
  CONTACT_BG: `https://wsrv.nl/?url=${encodeURI("files.catbox.moe/6fmf7u.jpg")}&w=1600&h=534&maxage=1d&output=webp`,
  CONTACT_DISCORD: Buffer.from("kessokubandstarry", "utf-8").toString("base64"),
  CONTACT_EMAIL: Buffer.from("kessokubandstarry@proton.me", "utf-8").toString("base64"),
  REPO: "https://github.com/retouching/retouching.github.io",
};

const PROJECTS = [
  {
    title: "Majin",
    description: "Mini games and UHC minecraft server",
    url: "https://majin.fr",
  },
  {
    title: "Spoffline",
    description: "Download spotify content up to 320kbps",
    url: "https://github.com/retouching/spoffline",
  },
  {
    title: "TVOD",
    description: "Download any Twitch VOD for free",
    url: "https://github.com/retouching/tvod",
  },
  {
    title: "FlareSolverr Python",
    description: "Integrate FlarSolverr in any python project",
    url: "https://github.com/retouching/FlareSolverr-Python",
  },
  {
    title: "Devine services",
    description: "Devine services for download content from various VOD services like Mangadon, ADN etc.",
  },
  {
    title: "CFW Proxy",
    description: "Use Cloudflare to proxy any URL body",
    url: "https://github.com/retouching/cfw-proxy",
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
