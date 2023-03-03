import About from "./About/About";
import Intro from "./Intro/Intro";
import Portfolio from "./Portfolio/Portfolio";
import ambassadorPortfolio, {
  ambassadorPortfolioSwiper,
} from "../assets/ambassadorPortfolio";
import projectsPortfolio, {
  projectsPortfolioSwiper,
} from "../assets/projectsPortfolio";
import { useEffect, useState } from "react";

const Main = ({ ambassadors, projects, about }) => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const isSlider = size <= 549;

  return (
    <main className="main">
      <Intro />
      <About refValue={about} />
      <Portfolio
        refValue={ambassadors}
        isSlider={isSlider}
        title="Ambassador Portfolio"
        items={isSlider ? ambassadorPortfolioSwiper : ambassadorPortfolio}
      />
      <Portfolio
        refValue={projects}
        isSlider={isSlider}
        title="Projects Portfolio"
        items={isSlider ? projectsPortfolioSwiper : projectsPortfolio}
      />
    </main>
  );
};

export default Main;
