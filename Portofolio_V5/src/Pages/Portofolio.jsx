import React, { useEffect, useState, useCallback } from "react";
import { db, collection } from "../firebase";
import { getDocs } from "firebase/firestore";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
    { icon: "typescript.png", language: "TypeScript" },
        { icon: "django.png", language: "Django" },
    { icon: "expresssjs.png", language: "ExpressJs" },
        { icon: "mongodb.png", language: "MongoDB" },



  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false, // This will make animations occur only once
    });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      // const projectCollection = collection(db, "projects");
      // const certificateCollection = collection(db, "certificates");

      // const [projectSnapshot, certificateSnapshot] = await Promise.all([
      //   getDocs(projectCollection),
      //   getDocs(certificateCollection),
      // ]);

      // const projectData = projectSnapshot.docs.map((doc) => ({
      //   id: doc.id,
      //   ...doc.data(),
      //   TechStack: doc.data().TechStack || [],
      // }));

      // const certificateData = certificateSnapshot.docs.map((doc) => doc.data());

const projectData = [
  {
    "id": "Aritmatika Solver",
    "Img": "https://lh3.googleusercontent.com/pw/AP1GczN8nCgz3uDAYTz959bL9wjcgXhPsT2-czigri6o-HkkyyIJ2uEagCkxFUsJtdcFFKoSblBWf0VUi_UY2bgrcHCmgG-cFxBz8zH7CM9AM0B6YpxmkMJ1gmL6dGSzzb0efVgKBcnDg_4eWmhmv0TSypNx=w1326-h679-s-no-gm?authuser=0",
    "Link": "https://replit.com/@EkiZR/Aritmatika-Project",
    "Github": "https://github.com/EkiZR/Aritmatika-Solver",
    "Description": "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara otomatis dengan menggunakan bahasa pemrograman Python. Tujuan utama dari program ini adalah untuk membantu pengguna, terutama pelajar, dalam menyelesaikan soal-soal Aritmatika dengan lebih cepat dan mudah",
    "Features": [
      "Menghitung suku tertentu dari barisan aritmatika dengan menggunakan rumus suku ke-n.",
      "Menentukan suku pertama atau beda jika hanya dua suku diketahui dalam barisan aritmatika.",
      "Menghitung jumlah n suku pertama dari deret aritmatika dengan langkah perhitungan yang jelas."
    ],
    "Title": "Aritmatika Solver",
    "TechStack": ["Python"]
  },
  {
    "id": "AutoChat-Discord",
    "TechStack": ["ReactJS", "AOS", "Tailwind CSS", "Material UI", "Python", "Firebase", "Sweetalert2", "Vite", "CSS"],
    "Github": "Private",
    "Description": "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal. Pengguna dapat menentukan saluran tujuan, isi pesan, dan interval penundaan pengiriman pesan. Program ini berjalan 24/7, memungkinkan pengiriman pesan otomatis tanpa intervensi manual, sehingga memudahkan promosi atau komunikasi di Discord secara efisien.",
    "Title": "AutoChat-Discord",
    "Link": "https://autochat.my.id/",
    "Features": [
      "Customize the message content as needed.",
      "Send messages to multiple Discord channels simultaneously.",
      "Set custom delay intervals between messages for controlled messaging.",
      "AutoChat runs non-stop to ensure continuous messaging."
    ],
    "Img": "https://lh3.googleusercontent.com/pw/AP1GczO_D4RyZJmuV6r6cm1-gD4VURTIzUUvBa5JAbV7On4tJ60rL5KCvn-5QWIlZ2McjdcJ75QaZJdgM79d2_5XfEVQC_D1XCJZkh7pKX4aPLHzRnI2SsywyzU7NaapNLcCwrMjuHO3CD899cIgQGtizeQj=w1920-h983-s-no-gm"
  },
  {
    "id": "Buku Catatan",
    "Link": "https://github.com/EkiZR/Buku-Catatan",
    "Features": [
      "Pengguna dapat membuat, mengedit, dan mengatur catatan dengan mudah sesuai kebutuhan.",
      "Memungkinkan pengguna untuk menemukan catatan dengan cepat menggunakan kata kunci."
    ],
    "Title": "Buku Catatan",
    "TechStack": ["ReactJS", "Vite", "CSS"],
    "Img": "https://lh3.googleusercontent.com/pw/AP1GczM9nypDGzHROBamkpFL4a4H0w9LDD4FEvC1rPTRcUPunmWp6VTHwxrh88soMRZkTClx1bEEH7e9GZvjzltP5Pij4P4ou2e3wTvgIbggRxxdghrLfb5xuJnUiio_aZ6EHM5oF70Rv6ZbfsgXwPibBgrM=w1326-h679-s-no-gm?authuser=0",
    "Description": "Buku Catatan adalah website yang memungkinkan pengguna untuk membuat, menyimpan, dan mengelola catatan secara digital. Dengan antarmuka yang sederhana, pengguna dapat menulis, mengedit, dan mengakses catatan mereka kapan saja. Fitur pencarian juga memudahkan dalam menemukan catatan dengan cepat, menjadikannya solusi praktis untuk menyimpan ide dan informasi penting.",
    "Github": "ekizr.vercel.app"
  },
  {
    "id": "Growtopia-Calculator",
    "TechStack": ["GSAP", "AOS", "HTML", "CSS", "Javascript"],
    "Title": "Growtopia-Calculator",
    "Description": "Growotopia Surgery Shop Calculator membantu pemain Growtopia menghitung keuntungan dari penjualan tools di vending shop surgery. Cukup masukkan jumlah pack dan harga per pack untuk menghitung modal, profit kotor, dan profit bersih, sehingga memudahkan perencanaan dan strategi penjualan.",
    "Features": [
      "Menghitung modal awal, profit kotor, dan profit bersih secara otomatis dari penjualan tools.",
      "Mensimulasikan jumlah pack yang dijual dan harga per pack untuk merencanakan strategi penjualan.",
      "Memberikan ringkasan data penjualan untuk membantu analisis performa toko vending."
    ],
    "Github": "https://github.com/EkiZR/Growtopia-Surgery-Shop-Calculator",
    "Link": "https://growtopiacalculator.vercel.app/",
    "Img": "https://lh3.googleusercontent.com/pw/AP1GczNqjVfSWMu1M2XRNLeL3KM7soqBzsarT1lhi3rQWyKx6yp5YfK-nJhcdrsy2e-Dim1YtF0qwltbhY8y8RxZAADymL7Tjd2vtmI8gQIDBdrfcxkXf07Y00sCs-8c4Gq-Oq4l_HgiQk2vkmCk9nTP9_IM=w1920-h983-s-no-gm?authuser=0"
  }
]
const certificateData = [
  {
    "Img": "https://lh3.googleusercontent.com/pw/AP1GczPiUoU6qqqzKhC-RJ6HRlqj8-3Jh2cPYOcRjZ9pXy7YBrHlQlZQrdhnlfzAKq1M1_BafAoy5X5PSgR4OubWL1Ue82RIg_bUSh_sC1aT3RpFDkYISJtGWaMD6sBaGmD0h9YYGcGj8KMKGu5XGC8A0_Jz=w960-h679-s-no-gm?authuser=0"
  },
  {
    "Img": "https://lh3.googleusercontent.com/pw/AP1GczP-TgH0oy_J8vnPvZ3ZAXl2i8b8Ail_t9pIm9oWHT6nblmdmRmOtEm8FVxEBDOTc3s3mxbN5YlkkE6oy3WBw5Ue3d7_1U1EsM9Z_UovjTVrmStOd2Ij-DuMIa0MdaVdc0wAUpD0wObUl_Fa3J9i3N_0=w960-h679-s-no-gm?authuser=0"
  },
  {
    "Img": "https://lh3.googleusercontent.com/pw/AP1GczP_YGpKJMKHjPpNlR82hP8efPoNS2l5a61DsFDY9zvFb3W9CuUYADYocDX3uCkW4MnI6jEv2KTfb6Nf6q2X6rmONUBi4ZXrADWIEY-TcX_rGWgJQdwDU1uf-4nk6KHckkB7UykSsvX3qQeFOoFbMbI3=w960-h679-s-no-gm?authuser=0"
  },
  {
    "Img": "https://lh3.googleusercontent.com/pw/AP1GczPJOSoW2o3Jp83Aq1jSLfPOgO4ReuABqxyIjSoRb8lX7hFb_Q2DoY0XH7UhzLIVkrsWTkCkGn5YiIduXbSl2h9sA6J_4HgLtK_O5yKZbRogBqUexW0-9dZOLZX-0hchZrjUhN3y9Ifykm9JtYMzZpZ2=w960-h679-s-no-gm?authuser=0"
  }
]


      setProjects(projectData);
      setCertificates(certificateData);

      // Store in localStorage
      localStorage.setItem("projects", JSON.stringify(projectData));
      localStorage.setItem("certificates", JSON.stringify(certificateData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header section - unchanged */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section - unchanged */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          {/* Tabs remain unchanged */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              // Existing styles remain unchanged
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('projects')}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}