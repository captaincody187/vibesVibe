import '../Hero.css'
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/four.jpg';
import five from '../assets/five.jpg';
import six from '../assets/six.jpg';
import seven from '../assets/seven.jpg';
import eight from '../assets/eight.jpg';


const Hero = () => {

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
    <div className='overflow-y-hidden px-3'>
        <div className=''>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 px-9 gap-y-20 py-9 glass">
            {pics.map((pic, i) => {
              return (
                <div className="glass" key={i}>
                  <div className='vibePics'>
                  <img src={pic} alt={`Image ${i + 1}`} />
                  </div>
                </div>
              );
            })}
          </div>
       </div>
    </div>
  )
}

export default Hero