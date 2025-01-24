import { motion } from "framer-motion";
import { default as React, } from "react";

const OtherProjects = () => {
  const projectData = [
    {
      title: "Task Tracker",
      description: "Developed a task tracker app in React Native with Expo and Reanimated, enabling team task management and assignment.",
      tech: ["React Native", "Reanimated"],
      link: "https://github.com/Neel2107/react-native-journal-app",
      image: "./folder.svg"
    },
    {
      title: "Pomo-Time",
      description: "Pomo-Time is a web app that helps increase productivity using the Pomodoro Technique with customizable timers and progress tracking.",
      tech: ["ReactJS", "CSS"],
      link: "https://github.com/Neel2107/PomoTime",
      image: "./folder.svg"
    },
    {
      title: "Quillaudits",
      description: "Crafted a fully responsive web homepage for Quillaudits using Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://github.com/Neel2107/QuillAudits",
      image: "./folder.svg"
    },
    {
      title: "Image Gallery",
      description: "Created an intuitive image gallery website utilizing the Unsplash API, enabling users to easily search and discover high-quality images.",
      tech: ["React JS", "Unsplash API"],
      link: "https://image-gallery-neel2107.vercel.app/",
      image: "./folder.svg"
    },
    {
      title: "JokeBox",
      description: "Designed and developed an engaging web app featuring a sleek, modern interface, delivering a continuous stream of humor with a single click.",
      tech: ["React JS", "API"],
      link: "https://github.com/Neel2107/JokeBox.git",
      image: "./folder.svg"
    },
    {
      title: "Tirupur Homes",
      description: "Crafted a captivating and responsive landing page using HTML, CSS, and JavaScript for a client in the real estate industry.",
      tech: ["HTML", "CSS"],
      link: "https://tirupur-homes.vercel.app/",
      image: "./folder.svg"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col mt-[10%] text-center w-full items-center">
      <motion.h1
        className="text-[1.875em] mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Other Noteworthy Projects
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] lg:w-[60%] mt-[6%]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="h-[300px] backdrop-blur-xl bg-[rgba(17,25,40,0.75)] rounded-xl border border-white/[0.125] p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_30px_0_rgba(74,150,194,0.23)]"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center">
                <a href={project.link}>
                  <img
                    loading="lazy"
                    className="w-[34px] h-auto"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
                <a
                  href={project.link}
                  className="group"
                >
                  <motion.img
                    loading="lazy"
                    className="w-6 h-6 invert transition-all group-hover:drop-shadow-[0_0_10px_#FFD700]"
                    src="newGithub.png"
                    alt="GitHub"
                    whileHover={{ scale: 1.1 }}
                  />
                </a>
              </div>

              <div className="flex flex-col h-full pt-4">
                <a
                  href={project.link}
                  className="text-white text-xl font-semibold tracking-wide my-2.5 no-underline hover:text-[#89bbfe] transition-colors text-start"
                >
                  {project.title}
                </a>
                <p className="text-white/[0.545] text-base font-medium min-h-[120px] overflow-y-auto text-left">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-white/[0.345] text-sm font-medium p-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OtherProjects;

