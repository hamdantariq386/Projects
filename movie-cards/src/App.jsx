import './App.css'
import Header from './components/Header'
import Movie from './components/Movie'
import movies from './movie'
function App() {
  return (
    <div className='app'>
      <Header />
      <div className='main'>
        {
          movies.map((element) => {
            return (
              <Movie
              title={element.Title}
              year={element.Year}
              img={element.Poster}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
