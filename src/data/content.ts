import travelImg from "../../public/images/work-travel.jpg";
import milkshakeImg from "../../public/images/work-milkshake.jpg";
import christmasImg from "../../public/images/work-christmas.jpg";
import eventImg from "../../public/images/work-event.jpg";
import burgerImg from "../../public/images/work-burger.jpg";

import portraitImg from "../../public/images/portrait.png";
import idPhotoImg from "../../public/images/id-photo.jpg";

export const portraitSrc = portraitImg;
export const idPhotoSrc = idPhotoImg;

export const person = {
  name: "Muhammad Arslan",
  firstName: "Arslan",
  lastName: "Arslan",
  role: "DEVELOPER · AI ENGINEER · CREATOR",
  shortRole: "Developer & Creator",
  location: "Toba Tek Singh, Pakistan",
  email: "marslan0299@gmail.com",
  phone: "+92 329 6521799",
  phoneRaw: "923296521799",
  instagram: "@arslan0299",
  instagramUrl: "https://instagram.com/arslan0299",
  tiktok: "@arslan0299",
  tiktokUrl: "https://tiktok.com/@arslan0299",
  facebook: "arslan0299",
  facebookUrl: "https://facebook.com/arslan0299",
  whatsappUrl: "https://wa.me/923296521799",
};

export const about = {
  heading: "About me",
  bio: "Hey! I'm Muhammad Arslan, a full-stack developer, AI engineer and digital creator from Toba Tek Singh, Pakistan. I build fast MERN and Next.js web apps, connect Google Gemini and other LLMs into custom workflows, and edit cinematic videos with custom colour grading and kinetic typography. For the past two years I've worked with 12+ clients to help them launch faster and stand out.",
  highlight: "Great work is part engineering, part storytelling.",
};

export const skills = [
  { id: "re", label: "Re", name: "React", color: "#0EA5E9" },
  { id: "nx", label: "Nx", name: "Next.js", color: "#1a1814" },
  { id: "no", label: "No", name: "Node.js", color: "#3C873A" },
  { id: "ts", label: "Ts", name: "TypeScript", color: "#3178C6" },
  { id: "tw", label: "Tw", name: "Tailwind", color: "#06B6D4" },
  { id: "ge", label: "Ge", name: "Gemini API", color: "#8E75FF" },
];

export const experience = [
  {
    years: "2024 — Present",
    role: "Full-Stack Developer, AI Engineer & Digital Creator",
    company: "Freelance · Remote",
  },
];

export const services = [
  { title: "Full-Stack Web Development", desc: "Fast, responsive web apps with the MERN stack, Next.js, TypeScript and Tailwind.", icon: "code" },
  { title: "AI Engineering & Integration", desc: "Gemini and LLM integrations, custom middleware, client hubs and model fine-tuning.", icon: "ai" },
  { title: "Video Editing & Colour", desc: "Cinematic edits with custom LUT colour grading and kinetic typography.", icon: "play" },
  { title: "Digital Marketing", desc: "Social media management, growth strategy and audience engagement that builds a brand.", icon: "growth" },
  { title: "Brand Identity", desc: "Logos, systems and visual languages that feel handmade and unforgettable.", icon: "star" },
  { title: "Poster Design", desc: "Editorial posters with bold type, collage energy and print-ready craft.", icon: "poster" },
  { title: "Social Media Design", desc: "Scroll-stopping posts and campaigns that still feel designed, not templated.", icon: "spark" },
  { title: "Packaging", desc: "Tactile packaging concepts with color, type and a little paper magic.", icon: "box" },
  { title: "Motion Graphics", desc: "Short-form motion that makes still ideas breathe and stick.", icon: "layout" },
];

export const works = [
  {
    id: "01",
    title: "Explore the World",
    category: "Travel Poster",
    image: travelImg,
    desc: "A vintage-inspired travel poster built around warm light, grand architecture and analog grain.",
  },
  {
    id: "02",
    title: "Strawberry Milkshake",
    category: "Food Poster",
    image: milkshakeImg,
    desc: "Soft pastel food advertising with appetizing photography and playful type hierarchy.",
  },
  {
    id: "03",
    title: "Merry Christmas",
    category: "Christmas Poster",
    image: christmasImg,
    desc: "A festive greeting piece with hanging ornaments, holly and elegant seasonal typography.",
  },
  {
    id: "04",
    title: "Wabi Sabi",
    category: "Event Poster",
    image: eventImg,
    desc: "Experimental collage poster mixing Japanese type, xerox texture and stamped details.",
  },
  {
    id: "05",
    title: "Burger Hours",
    category: "Social Media Post",
    image: burgerImg,
    desc: "High-contrast campaign visual for a limited burger drop — loud type, juicier photography.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#notes", label: "Notes" },
  { href: "#contact", label: "Contact" },
];

export const marqueeWords = [
  "web apps", "AI", "video", "code", "color grading", "MERN", "Next.js", "branding", "growth", "motion", "automation", "craft",
];

export const stats = [
  { n: "2+", l: "years making" },
  { n: "50+", l: "videos produced" },
  { n: "12+", l: "happy clients" },
  { n: "4.9", l: "average rating" },
];

export const process = [
  { n: "01", title: "Listen", desc: "I start with the brief, the audience and the goal. The real problem is usually hiding between the lines." },
  { n: "02", title: "Plan", desc: "Wireframes, architecture or a storyboard. One clear plan before a single line of code or frame of footage." },
  { n: "03", title: "Build", desc: "Then the real work. Clean code, careful edits, colour and motion tuned until it feels right." },
  { n: "04", title: "Deliver", desc: "Tidy files, a clear handover and revisions that make it sharper, never noisier." },
];

export const principles = [
  { t: "Clarity first", d: "Good work explains itself. Clean interfaces, clear code and clear stories." },
  { t: "Speed matters", d: "Fast sites, quick replies and delivery that respects your deadline." },
  { t: "Details are the craft", d: "Colour grades, spacing, timing: the small things people feel without noticing." },
  { t: "Build to last", d: "Modular, tidy and easy to hand over, so it keeps working long after launch." },
];

// Add real client reviews here when you have them. While empty, the "Client notes" block stays hidden.
export const testimonials: { quote: string; name: string; role: string; rotate: number }[] = [];

export const journal = [
  { date: "2026", title: "Speed is a feature", body: "A site that loads in a second feels better designed than one that took a week to polish." },
  { date: "2026", title: "Colour tells the story", body: "A good LUT can change the mood of a whole video before a single word is spoken." },
  { date: "2026", title: "AI as a teammate", body: "The best LLM integrations quietly remove the boring parts of a workflow." },
];

export const faqs = [
  {
    q: "Do you take freelance work?",
    a: "Yes. Web apps, AI integrations, video editing and social media growth. If it's a fit, we'll start with a short chat.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the scope. Send me the brief and I'll reply with a clear timeline and plan.",
  },
  {
    q: "Do you work remotely?",
    a: "Always. Based in Toba Tek Singh, Pakistan, working with clients over WhatsApp, Instagram and email.",
  },
  {
    q: "What's the starting point?",
    a: "Send a note on WhatsApp or email with the idea, deadline and budget range. I'll reply with a simple plan.",
  },
];

export const brands = ["Hive", "Brandix", "Wabi", "Burger Hours", "North", "Studio 14", "Milk & Co", "Jun Ang"];

