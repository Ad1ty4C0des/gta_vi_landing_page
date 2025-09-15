import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from "./sections/Hero";
import NavBAr from "./sections/NavBAr";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBAr />
      <Hero />
      <FirstVideo />
      <Jason />
    </main>
  );
};

export default App;
