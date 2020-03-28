import React, { useState } from 'react'
import MapGL from 'react-map-gl'

const HomePage = () => {
  const MAPBOX_TOKEN =
    'pk.eyJ1IjoiZGVsYWcwMTAiLCJhIjoiY2s4Ynd0ZGFzMGNwbzNubGVkeHdwb2kyayJ9.b06ryTcLddTGD2JCZOSJTA'

  const [viewport, setViewport] = useState({
    latitude: 27.959394,
    longitude: -82.460111,
    zoom: 8,
    bearing: 0,
    pitch: 0,
  })
  return (
    <>
      <section>
        <section className="hero"></section>
      </section>
      <main>
        <aside className="Map">
          <MapGL
            {...viewport}
            width="40vw"
            height="40vw"
            mapStyle="mapbox://styles/mapbox/satellite-v9"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          />
        </aside>
        <section className="callToAction">
          <h5>
            Come find the murals of Tampa Bay with us! Sign up or Sign in below
            to start finding Murals!
          </h5>
          <button>Sign Up!</button>
          <button>Sign In!</button>
        </section>
      </main>
      <footer>
        <p>Made with care and 💙💜🖤</p>
      </footer>
    </>
  )
}

export default HomePage
