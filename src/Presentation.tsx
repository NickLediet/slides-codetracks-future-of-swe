import { Deck, Slide } from '@revealjs/react'
import 'reveal.js/reveal.css'
import 'reveal.js/theme/black.css'

const speaker = {
  name: 'Nicholas Lediet',
  title: 'Senior software engineer @ Trackunit',
  image: '/profile.jpg',
}

const titleBackground = '/title-background.jpg'

export function Presentation() {
  return (
    <Deck
      config={{
        hash: true,
        width: 1280,
        height: 720,
        margin: 0.06,
        transition: 'fade',
      }}
    >
      <Slide
        backgroundColor="#07111f"
        backgroundImage={titleBackground}
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <div className="grid min-h-full grid-rows-[auto_1fr] items-center px-[0.2em] py-[0.45em]">
          <div
            className="inline-flex w-fit items-center gap-[0.5em] rounded-full border border-white/20 bg-slate-950/70 px-[0.55em] py-[0.35em] shadow-2xl backdrop-blur-[18px]"
            aria-label={`${speaker.name}, ${speaker.title}`}
          >
            <img
              className="h-[2em] w-[2em] rounded-full border-[0.08em] border-white/70 object-cover"
              src={speaker.image}
              alt={speaker.name}
            />
            <div>
              <p className="!m-0 text-[0.38em] leading-[1.1] font-extrabold text-slate-50">
                {speaker.name}
              </p>
              <p className="!m-0 !mt-[0.18em] text-[0.24em] leading-[1.25] font-semibold text-slate-300">
                {speaker.title}
              </p>
            </div>
          </div>

          <div className="max-w-[11.5em] self-end">
            <p className="!m-0 text-[0.32em] leading-[1.1] font-extrabold tracking-[0.18em] text-amber-400 uppercase">
              CodeTracks
            </p>
            <h1 className="!m-0 !mt-[0.12em] !text-[1.75em] !leading-[0.95] !font-black !tracking-[-0.045em] !text-slate-50 !normal-case [text-shadow:0_0.12em_0.5em_rgb(2_6_23_/_42%)]">
              Musings and Predictions on the future of software engineering
            </h1>
            <p className="!m-0 !mt-[1em] max-w-[22em] text-[0.46em] leading-[1.25] font-semibold text-blue-100">
              It's the end of the world as we know it and I feel fine
            </p>
          </div>
        </div>
      </Slide>
    </Deck>
  )
}
