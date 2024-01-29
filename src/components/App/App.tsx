import './reset.css'
import './App.scss'

function App() {

  return (
    <>
      <header>
        <section className='title'>
          <h1>Marine Le Bec</h1>
          <h2>Développeuse web
          full-stack</h2>
        </section>
        <section className='tools'>
          <h3>Tools</h3>
        </section>
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