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
        <div className="title-slide">
          <div className="speaker-card" aria-label={`${speaker.name}, ${speaker.title}`}>
            <img className="speaker-photo" src={speaker.image} alt={speaker.name} />
            <div>
              <p className="speaker-name">{speaker.name}</p>
              <p className="speaker-title">{speaker.title}</p>
            </div>
          </div>

          <div className="talk-heading">
            <p className="eyebrow">CodeTracks</p>
            <h1>Musings and Predictions on the future of software engineering</h1>
            <p className="subtitle">It's the end of the world as we know it and I feel fine</p>
          </div>
        </div>
      </Slide>
    </Deck>
  )
}
