import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from "./sections/Hero";
import NavBAr from "./sections/NavBAr";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBAr />
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
    </main>
  );
};

export default App;
