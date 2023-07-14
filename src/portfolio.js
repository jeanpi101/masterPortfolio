/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Bartosz's Portfolio",
  description:
    "Aspiring robotics engineer skilled in designing and developing cutting-edge robotic systems. Proficient in multiple programming languages and equipped with a deep understanding of robotics principles and algorithms. Committed to pushing the boundaries of innovation and creating solutions for complex challenges in automation and artificial intelligence.",
  og: {
    title: "Ashutosh Hathidara Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Bartosz Rzępała",
  logo_name: "Bartosz Rzepala",
  nickname: "but call me Bartek",
  subTitle:
    "Aspiring robotics engineer skilled in designing and developing cutting-edge robotic systems. Proficient in various programming languages and equipped with a deep understanding of robotics principles and algorithms. Committed to pushing the boundaries of innovation and creating solutions for complex challenges in automation and artificial intelligence.",
  resumeLink:
    "https://drive.google.com/file/d/1ymWozZrwVYVat7X6X_OGHuZhg6uh23nj/view?usp=sharing",
  portfolio_repository: "https://github.com/jeanpi101/masterPortfolio",
  githubProfile: "https://github.com/jeanpi101",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/jeanpi101",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bartosz-rzępała-2bba00212/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:bartosz.rzepala@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing Computer Vision models for robotics applications",
        "⚡ Experience in training custom Deep Learning Models as well as utilisation of the pre-existing industry standards",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Robotics and Embedded Systems",
      fileName: "FullStackImg",
      skills: [
        "⚡ Mathematical modelling and execution of robotic systems control",
        "⚡ Creating data exchange protocols for embedded systems",
        "⚡ Wireless communication via radio and Bluetooth",
        "⚡ Creating power supply systems for robots ahha",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "devicon:cplusplus",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "devicon:c",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "skill-icons:arduino",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Raspberry Pi",
          fontAwesomeClassname: "devicon:raspberrypi",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Nvidia Jetson",
          fontAwesomeClassname: "logos:nvidia",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Bluetooth",
          fontAwesomeClassname: "logos:bluetooth",
          style: {
            color: "#E34F26",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/jeanpi101/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Imperial College London",
      subtitle: "MEng Electronic and Information Engineering",
      logo_path: "IMP_ML_1CS_4CP.png",
      alt_name: "Imperial",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied computer architecture, high level programming, mathematics, algorithms and the foundations of analogue electronics",
        "⚡ Apart from that, I took courses from the Department of Computing: Computer Vision, Simulation and Modelling, Operations Research",
        "⚡ I completed a range of projects, some of which can be found in section Projects",
      ],
      website_link: "https://www.imperial.ac.uk",
    },
    {
      title: "33 Copernicus Bilingual High School",
      subtitle: "International Baccalaureate graduate.",
      logo_path: "copernicus.jpg",
      alt_name: "Kopernik",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ Grades obtained: Mathematics HL - 7, Physics HL - 7, Chemistry HL - 7, Extended Essay - A, overall grade - 40/45",
        "⚡ Worked as a sound engineer in the staging of the play 'A Christmas Carol' by Charles Dickens",
      ],
      website_link: "https://kopernik.edu.pl/#",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with a number of companies from different fields of industry (robotics, app development, teaching). Here is a summary of my experience.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Mathematics/Physics Tutor",
          company: "GoStudent",
          company_url: "https://www.gostudent.org/en-gb/home/",
          logo_path: "Gostudent_Logo.jpg",
          duration: "June 2020 - ",
          location: "Work from Home",
          description:
            "I am working as a Further Mathematics, Mathematics and Physics tutor. I mainly work with A-Levels and IB students in their final years. My responsibilities include: ⚡ Preparing students for their final exams ⚡ Exam stress mentorship ⚡ Coordinating a group of tutors",

          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Android Developer Intern",
          company: "ProtonDX",
          company_url: "https://protondx.com/about/",
          logo_path: "icon-512x512.png",
          duration: "April 2023 - June 2023",
          location: "London, UK",
          description:
            "With a group of five, I developed a mobile interface app for a diagnostic device, Lacewing. I was responsible for the data exchange protocol, as well as the Bluetooth connection protocol between the tablet and the device.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Mentor",
          company: "Zero Gravity",
          company_url: "https://www.zerogravity.co.uk",
          logo_path: "ZeroGravity_Logo_RGB_Colour_Black-600x306.png",
          duration: "June 2023 - ",
          location: "Work from home",
          description:
            "I mentor students from low economic backgrounds on the path to get into their dream universities.",
          color: "#4285F4",
        },
        {
          title: "Imperial College Polish Society Vice-President",
          company: "Imperial College Polish Society",
          company_url:
            "https://www.imperialcollegeunion.org/activities/a-to-z/polish",
          logo_path: "polsoc.png",
          duration: "October 2022 - April 2023",
          location: "London, United Kingdom",
          description:
            "Representing the Polish culture and traditions at Imperial College London. Responsible for builiding keeping good relations with other Imperial Societies. I have been elected to become the president of the society for the academic year 2023-2024.",

          color: "#4285F4",
        },
        {
          title: "Mathematics Tutor",
          company: "OSB Bielany",
          company_url: "https://ochotnicy.waw.pl/profile/profil/941",
          logo_path: "bielany.png",
          duration: "October 2018 - April 2020",
          location: "Warsaw, Poland",
          description:
            "I tutored an 8th grade student with special educational needs. He was able to pass his exams with satisfactory grades and get into his dream high school.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Extracurricular Projects Positions",
      experiences: [
        {
          title: "Head Electronic Engineer",
          company: "Imperial Planetary Robotics Lab",
          company_url:
            "https://www.linkedin.com/company/imperial-planetary-robotics-lab/",
          logo_path: "iprl_logo.jpeg",
          duration: "October 2022 - ",
          location: "London, United Kingdom",
          description:
            "Responsible for the power delivery system and hardware-software coordination (including, but not limited to, the operation of the robotic arm, real-time radio data transfer, steering system) for a rover, named Harbinger, participating in the 2023 European Rover Challenge in Kielce, Poland",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Bartholometo.png",
    description:
      "I am available on LinkedIn and via e-mail. Message me there and I guarantee to answer within 24h.",
  },
  blogSection: {},
  addressSection: {
    title: "Address",
    subtitle:
      "Imperial College London, Exhibition Road, SW7 2AZ, Greater London, United Kingdom",
    country: "UK",
    region: "Greater London",
    postalCode: "SW7 2AZ",
    streetAddress: "Exhibition Road",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Imperial+College+London/@51.4988222,-0.1774484,17z/data=!3m2!4b1!5s0x47d8cc700f626631:0x955981a81618aba8!4m6!3m5!1s0x48760567da220a01:0x31911b371c692e86!8m2!3d51.4988222!4d-0.1748735!16zL20vMGdsNng?entry=ttu",
  },
  phoneSection: {
    title: "+44 7500 518749",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
