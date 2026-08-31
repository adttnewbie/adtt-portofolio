import { site } from "../../data/site";
import Lanyard from "../Lanyard";

export default function About() {
  return (
    <section
      id="about"
      data-reveal
      className="relative overflow-hidden py-8 md:py-16"
      style={{ scrollMarginTop: 80 }}
    >
      <div
        className="pointer-events-none absolute top-[34%] left-1/2 hidden -translate-x-1/2 select-none md:block"
        aria-hidden="true"
      >
        <p
          className="leading-none font-black tracking-[-0.06em] whitespace-nowrap"
          style={{
            fontSize: "clamp(6rem, 13vw, 12rem)",
            color: "rgba(88,85,246,0.045)",
          }}
        >
          ABOUT
        </p>
      </div>

      <div className="relative mx-auto max-w-340 px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-12 md:gap-10">
          <div className="relative md:col-span-5">
            <p
              className="mb-3 font-mono text-xs tracking-[0.14em] uppercase"
              style={{ color: "var(--color-primary)" }}
            >
              About Me
            </p>
            {/* Lanyard — transparent parent, no bg/border */}
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ background: "transparent", border: "none" }}
            >
              <Lanyard
                position={[0, 0, 13]}
                gravity={[0, -40, 0]}
                fov={22}
                transparent
                frontImage="/lanyard-biodata-front.png"
                backImage="/adtt.png"
                imageFit="cover"
                className="h-105 md:h-130"
              />
            </div>
            <div
              className="mt-3 flex items-center gap-3 text-xs"
              style={{ color: "var(--fg-muted)" }}
            >
              <span
                className="h-px w-8"
                style={{ background: "var(--color-primary)" }}
              />
              <span className="font-mono">
                SMK RPL — Based in Indonesia · Software Engineer for UMKM
              </span>
            </div>
          </div>

          <div className="md:col-span-7 flex gap-6 md:gap-8">
            <div className="flex flex-1 flex-col justify-center">
              <h2
                className="text-[2rem] leading-[0.95] font-black tracking-[-0.03em] md:text-[2.5rem]"
                style={{ color: "var(--fg)" }}
              >
                About Me
                <br />
                As A Software Engineer.
              </h2>
              <div
                className="mt-4 h-px w-12"
                style={{ background: "var(--color-primary)" }}
              />
              <p
                className="mt-6 max-w-xl text-[15px] leading-7"
                style={{ color: "var(--fg-muted)" }}
              >
                i&apos;m aditya, a software engineer who believes good software
                is defined by precision. clean architecture, reliable systems,
                and thoughtful interfaces shape the way i work, because every
                decision should have a reason and every detail should earn its
                place.
              </p>
              <p
                className="mt-4 max-w-xl text-[15px] leading-7"
                style={{ color: "var(--fg-muted)" }}
              >
                i build digital products that are fast, accessible,
                maintainable, and quietly refined, turning practical ideas into
                software that feels larger than where it started.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-[0.96]"
                  style={{ background: "var(--color-primary)" }}
                >
                  Work with me →
                </a>
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border px-6 py-3 text-sm font-medium transition hover:border-(--color-primary)"
                  style={{ borderColor: "var(--border)", color: "var(--fg)" }}
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Dekor kanan — vertical typography ADITYA */}
            <div
              className="hidden shrink-0 items-center justify-center border-l md:flex md:w-37"
              style={{ borderColor: "var(--border)" }}
              aria-hidden="true"
            >
              <p
                className="select-none font-black tracking-[-0.06em]"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  fontSize: "clamp(3rem, 5vw, 4.2rem)",
                  lineHeight: 1,
                  color: "rgba(88,85,246,0.09)",
                }}
              >
                ADITYA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
