import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-content-in">
              <h3>GRAPHIC DESIGN</h3>
              <h4>Description</h4>
              <p>
                From striking posters to elegant packaging, I create visual designs that capture attention and communicate your message clearly and beautifully.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Posters</div>
                <div className="what-tags">Packaging</div>
                <div className="what-tags">Banners</div>
                <div className="what-tags">Brochures</div>
                <div className="what-tags">Flyers</div>
                <div className="what-tags">Logos</div>
                <div className="what-tags">Typography</div>
                <div className="what-tags">Vectors</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-content-in">
              <h3>BRANDING</h3>
              <h4>Description</h4>
              <p>
                I build scalable and timeless brand identities. I help you define your brand's voice, aesthetic, and strategy to foster trust and connect with your audience.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Brand Identity</div>
                <div className="what-tags">Strategy</div>
                <div className="what-tags">Case Studies</div>
                <div className="what-tags">Guidelines</div>
                <div className="what-tags">Storytelling</div>
                <div className="what-tags">Logo Design</div>
                <div className="what-tags">Minimalism</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-content-in">
              <h3>SOCIAL MEDIA</h3>
              <h4>Description</h4>
              <p>
                I manage and grow digital channels with data-driven strategies, engaging content, and active audience building to ensure measurable success and client satisfaction.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Analytics</div>
                <div className="what-tags">Audience Growth</div>
                <div className="what-tags">Engagement</div>
                <div className="what-tags">Content Strategy</div>
                <div className="what-tags">YouTube Management</div>
                <div className="what-tags">Campaigns</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
