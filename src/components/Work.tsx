import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Graphic Design Portfolio",
    category: "Graphic Design",
    tools: "Posters, Packaging, Logos, Typography",
    image: "./projects/graphic_designing_thumb-01.jpg",
    link: "https://drive.google.com/YOUR_DRIVE_LINK_HERE"
  },
  {
    title: "Shulikina",
    category: "Branding",
    tools: "Fashion Brand, Sustainable Luxury",
    image: "./projects/Shulikina_thumb-01.jpg",
    link: "https://drive.google.com/YOUR_DRIVE_LINK_HERE"
  },
  {
    title: "GOFORSYS Technologies",
    category: "Branding",
    tools: "IT Company Identity, Guidelines",
    image: "./projects/GOFORSYS_thumb-01.jpg",
    link: "https://drive.google.com/YOUR_DRIVE_LINK_HERE"
  },
  {
    title: "Shivaneel Hospitality",
    category: "Branding",
    tools: "Hospitality Branding, Monogram",
    image: "./projects/Shivaneel_thumb-1.jpg",
    link: "https://drive.google.com/YOUR_DRIVE_LINK_HERE"
  },
  {
    title: "Box Tech",
    category: "Branding",
    tools: "Brand Strategy, Scalable Minimalism",
    image: "./projects/Box_Tech_thumb-01.jpg",
    link: "https://drive.google.com/YOUR_DRIVE_LINK_HERE"
  },
  {
    title: "LIVA IS LIVE",
    category: "Social Media",
    tools: "YouTube Analytics, Growth, Engagement",
    image: "./projects/social_media_analytics.jpg",
    link: "./projects/social_media_analytics.jpg"
  }
];

const Work = () => {
  // Removed GSAP ScrollTrigger to allow normal vertical scrolling
  useGSAP(() => {
    // No animation needed, relying on native CSS horizontal scrolling
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Skills & Deliverables</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
