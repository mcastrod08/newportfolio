export const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Work Experience",
    link: "#work",
  },
  {
    name: "Contact",
    link: "#contact",
  },

]

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center",
    img: "/main2.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zone communications",
    description: "",
    className: "lg:col-span-1 md:col-span-6 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Open to continue learning",
    className: "lg:col-span-1 md:col-span-6 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "My softs skills",
    description: "",
    className: "lg:col-span-1 md:col-span-6 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },

  {
    id: 5,
    title: "Currently developing small projects",
    description: "Let's grow together",
    className: "lg:col-span-1 md:col-span-6 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-1 md:col-span-6 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center sm:max-w-full items-center text-center sm:text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Restaurant",
    des: "Landing page of a restaurant",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg"],
    github: "https://github.com/mcastrod08/iphone_website_react_gsap_threejs.git",
    demo: "https://mc08restaurant.netlify.app/"
  },
  {
    id: 2,
    title: "Video App",
    des: "Youtube clone ",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg" ],
    github: "https://github.com/mcastrod08/youtubeclone",
    demo: "https://mc08youtube-clone.netlify.app/"
  },
  {
    id: 3,
    title: "Iphone",
    des: "Iphone website clone",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    github: "https://github.com/mcastrod08/iphone_website_react_gsap_threejs",
    demo: "https://mciphonecopy.netlify.app/"
  },
  {
    id: 4,
    title: "Movies App",
    des: "Movie App with APi connection. If the API fails, i have a video demo",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", ],
    github: "https://github.com/mcastrod08/movies.git",
    demo: ""
  },
  {
    id: 5,
    title: "Brainwave",
    des: "Demo of an new AI",
    img: "/p5.png",
    iconLists: ["/re.svg", "/tail.svg", ],
    github: "https://github.com/mcastrod08/brainwaveMC.git",
    demo: "https://mcbrainwave.netlify.app/"
  },
  {
    id: 6,
    title: "Old Portfolio",
    des: "Old portfolio develop in the pasts few years, ",
    img: "/p6.png",
    iconLists: ["/re.svg", "/tail.svg", ],
    github: "",
    demo: "https://mcastrod.netlify.app/home"
  },

];


export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Developed fully functional websites based on UI prototypes using HTML, CSS, Bootstrap, JavaScript, and PHP.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Web Developer",
    desc: "Developed a responsive web application for course management using React JS, SASS, and Material UI — currently in active use.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Project Manager",
    desc: "Led and manage a cross-functional team of 10 professionals in over 30 projects, achieving a 50% reduction in delivery times, consistently meeting deadlines and budget constraints",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Web Designer",
    desc: "Designed and built custom WordPress websites tailored to client goals and brand identity.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
