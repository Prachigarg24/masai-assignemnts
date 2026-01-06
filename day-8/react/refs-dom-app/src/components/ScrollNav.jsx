import { useRef, useEffect, useState } from "react";

export default function ScrollNav() {
  const sectionsRef = useRef({});
  const [active, setActive] = useState("about");

  const sections = ["about", "services", "portfolio", "contact"];

  const scrollToSection = (section) => {
    sectionsRef.current[section].scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = sectionsRef.current[section];
        const rect = el.getBoundingClientRect();

        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, background: "#eee", width: "100%" }}>
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => scrollToSection(sec)}
            style={{
              fontWeight: active === sec ? "bold" : "normal",
              margin: "10px",
            }}
          >
            {sec.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* SECTIONS */}
      <div style={{ marginTop: "60px" }}>
        {sections.map((sec) => (
          <section
            key={sec}
            ref={(el) => (sectionsRef.current[sec] = el)}
            style={{ height: "100vh", padding: "20px" }}
          >
            <h2>{sec.toUpperCase()}</h2>
          </section>
        ))}
      </div>
    </div>
  );
}
