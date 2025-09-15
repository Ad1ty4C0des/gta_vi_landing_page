import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from "./sections/Hero";
import NavBAr from "./sections/NavBAr";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBAr />

      <Hero />
    </main>
  );
};

export default App;
