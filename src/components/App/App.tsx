import './reset.css'
import './App.scss'

function App() {

  return (
    <>
      <header>
        <section className='title'>
          <h1>Marine Le Bec</h1>
          <p>Développeuse web</p>
          <p>full-stack</p>
        </section>
        <section className='tools'>
          <h2>Tools</h2>
        </section>
      </header>
      <main>
        <section className='projects'>
          <h2>Projects</h2>
        </section>
        <section className='blog'>
          <h2>Blog</h2>
        </section>
        <section className='resume'>
          <h2>CV</h2>
        </section>
        <section className='about'>
          <h2>About</h2>
        </section>
      </main>
      <footer>
        <section className='contact'>
          <h2>Contact</h2>
        </section>
        <section className='social'>
          <h2>Social</h2>
        </section>
      </footer>
    </>
  )
}

export default App