import './App.css';
import one from './assets/one.jpg';
import two from './assets/two.jpg';
import three from './assets/three.jpg';
import four from './assets/four.jpg';
import five from './assets/five.jpg';
import six from './assets/six.jpg';
import seven from './assets/seven.jpg';
import eight from './assets/eight.jpg';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const pics = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
  ];

  return (
    <div>
      <Navbar />
    <div className="main min-h-screen grid grid-cols-2 gap-4 place-content-center h-48">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-10 px-9 gap-y-20 py-9 glass">
      {pics.map((pic, i) => {
        return (
          <div className="relative" key={i}>
            <img src={pic} alt={`Image ${i + 1}`} className='object-cover h-60 w-96' />
          </div>
        );
      })}
    </div>
  </div>
      <Footer />
  </div>
  );
}

export default App;
