import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Outro = () => {
  useGSAP(() => {
    gsap.set(".final-message", { marginTop: "-100vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".final-message",
        start: "top 30%",
        end: "top 10%",
        scrub: true,
      },
    });

    tl.to(".final-content", { opacity: 0, duration: 1, ease: "power1.inOut" });
    tl.to(
      ".final-message",
      { opacity: 1, duration: 1, ease: "power1.inOut" },
      "<"
    );
  });
  return (
    <section className="final-message">
      <div className="h-full col-center gap-6 sm:gap-10 px-4">
        <img src="/images/logo.webp" alt="logo" className="w-40 sm:w-52 md:w-72" />

        <div>
          <h3 className="gradient-title">
            Coming <br /> May 26 <br /> 2026
          </h3>
        </div>

        <div className="flex-center gap-6 sm:gap-10">
          <img src="/images/ps-logo.svg" className="w-16 sm:w-20 md:w-32" />
          <img src="/images/x-logo.svg" className="w-28 sm:w-40 md:w-52" />
        </div>
      </div>
    </section>
  );
};

export default Outro;
