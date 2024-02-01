//* Styles
import './reset.css'
import './App.scss'

//* Hooks
import { useState } from 'react';

//* Composants
import Tools from '../Tools/Tools';

function App() {
  //TODO Animate Title at hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <header>
        <section
          className={`title ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1>Marine Le Bec</h1>
          <h2>Développeuse web</h2>
          <h2>full-stack</h2>
        </section>
          <Tools />
      </header>
      <main>
        <section className='projects'>
          <h3>Projects</h3>
        </section>
        <section className='blog'>
          <h3>Blog</h3>
        </section>
        <section className='resume'>
          <h3>CV</h3>
        </section>
        <section className='about'>
          <h3>About</h3>
        </section>
      </main>
      <footer>
        <section className='contact'>
          <h3>Contact</h3>
        </section>
        <section className='social'>
          <h3>Social</h3>
        </section>
      </footer>
    </>
  )
}

export default App