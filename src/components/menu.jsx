import { ShowMore } from "./common/button";
import { useState, useEffect } from "react";
import "./menu.css";

const Menu = () => {
  const sections = [
    {
      section: "Co Nowego?",
      items: [
        "Burger Drwala",
        "McMuffin Avocado",
        "Herbata Zimowa",
        "Choco Latte",
        "Apple Pie",
        "łódeczki",
      ],
    },
    { section: "McZestawy", items: ["McZestaw"] },
    {
      section: "Burgery",
      items: [
        "Burger Drawla",
        "Big Mac",
        "Podwójny WieśMac",
        "WieśMac",
        "Podwójny McRoyal",
        "McRoyal",
        "McCrispy Supreme",
        "McCrispy",
      ],
    },
    {
      section: "McWrapy i Sałatki",
      items: [
        "McWrap",
        "McWrap Bekon",
        "Veggie McWrap",
        "sałatka Kuczak Premium",
      ],
    },
    {
      section: "Kurczak",
      items: [
        "McCrispy Supreme",
        "McCrispy",
        "McChicken",
        "Chicken Box",
        "McCrispy Tenders",
        "McNuggets",
        "Chikker",
      ],
    },
    { section: "2 For U", items: ["2 for U"] },
    {
      section: "Frytki i dodatki",
      items: [
        "Chrupiące łódeczki",
        "Frytki",
        "kubuś mus",
        "jabłka",
        "marchewki",
        "keczup",
        "sos barbecue",
        "sos czosnkowy",
      ],
    },
    {
      section: "McCafe",
      items: [
        "Herbata Zimowa",
        "Choco Latte",
        "Cafe Latte",
        "Apple Pie",
        "flat White",
        "kawa z Mlekiem",
        "espresso",
        "herbata",
      ],
    },
    {
      section: "Lody i desery",
      items: [
        "Lody z polewa",
        "ciastko jabłkowe",
        "shake",
        "muffin z truskawkami",
      ],
    },
    {
      section: "Napoje",
      items: [
        "herbata zimowa",
        "choco latte",
        "apple pie",
        " coca-cola",
        "woda mineralna",
        "sok jablkowy",
        "shake",
      ],
    },
    { section: "Happy Meal", items: ["happy meal", "happy meal sniadaniowy"] },
    {
      section: "Śniadania",
      items: [
        "mcZestaw",
        "kajzerka",
        "sniadaniowy mcwrea",
        "kajzerka kurczak premium",
        "kajzerka jajko i pieczarki",
      ],
    },
  ];

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 1;
      console.log(scrollPosition);

      sections.forEach((section, index) => {
        const element = document.getElementById(section.section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.section);
            const el = document.getElementById(index);
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleScroll);
    };
  }, [sections]);
  return (
    <section>
      <h1 className="bg-gray-700 p-10">Nasze menu</h1>
      <div className="overflow-auto m-3 pb-5 sticky top-0">
        <div className="inline-flex gap-2 h-10 overflow-clip">
          {sections.map((section, index) => (
            <ShowMore
              id={index}
              href={`#${section.section}`}
              className={
                activeSection === section.section
                  ? "active-section"
                  : "not-active-section"
              }
              content={section.section}
            />
          ))}
        </div>
      </div>
      <div>
        {sections.map((section) => (
          <section>
            <h2 id={section.section} className="font-bold pt-10">
              {section.section}
            </h2>
            <div className="grid grid-cols-2">
              {section.items.map((item) => (
                <a className="">{item}</a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

const Sections = () => {
  return <div></div>;
};
export default Menu;
