import { useState } from 'react';
import './App.scss'
import Search from './components/Search';
import Word from './components/Word';
import FallBack from './components/FallBack';
import Logo from './components/images/logo.svg';
import axios from 'axios';

function App() {
  const [word,setWord] = useState({"word":"time","phonetic":"/tɑem/","phonetics":[{"text":"/tɑem/","audio":"https://api.dictionaryapi.dev/media/pronunciations/en/time-au.mp3","sourceUrl":"https://commons.wikimedia.org/w/index.php?curid=6871204"},{"text":"/taɪm/","audio":""},{"text":"/taɪm/","audio":""},{"text":"/taɪm/","audio":"https://api.dictionaryapi.dev/media/pronunciations/en/time-us.mp3","sourceUrl":"https://commons.wikimedia.org/w/index.php?curid=1197439","license":{"name":"BY-SA 3.0","url":"https://creativecommons.org/licenses/by-sa/3.0"}}],"meanings":[{"partOfSpeech":"noun","definitions":[{"definition":"The inevitable progression into the future with the passing of present and past events.","synonyms":[],"antonyms":[],"example":"Time stops for nobody.   the ebb and flow of time"},{"definition":"A duration of time.","synonyms":[],"antonyms":[]},{"definition":"An instant of time.","synonyms":[],"antonyms":[]},{"definition":"The measurement under some system of region of day or moment.","synonyms":[],"antonyms":[],"example":"Let's synchronize our watches so we're not on different time."},{"definition":"Ratio of comparison.","synonyms":[],"antonyms":[],"example":"your car runs three times faster than mine;  that is four times as heavy as this"},{"definition":"(grammar) Tense.","synonyms":[],"antonyms":[],"example":"the time of a verb"},{"definition":"The measured duration of sounds; measure; tempo; rate of movement; rhythmical division.","synonyms":[],"antonyms":[],"example":"common or triple time;   the musician keeps good time."}],"synonyms":[],"antonyms":[]},{"partOfSpeech":"verb","definitions":[{"definition":"To measure or record the time, duration, or rate of.","synonyms":[],"antonyms":[],"example":"I used a stopwatch to time myself running around the block."},{"definition":"To choose when something begins or how long it lasts.","synonyms":[],"antonyms":[],"example":"The President timed his speech badly, coinciding with the Super Bowl."},{"definition":"To keep or beat time; to proceed or move in time.","synonyms":[],"antonyms":[]},{"definition":"To pass time; to delay.","synonyms":[],"antonyms":[]},{"definition":"To regulate as to time; to accompany, or agree with, in time of movement.","synonyms":[],"antonyms":[]},{"definition":"To measure, as in music or harmony.","synonyms":[],"antonyms":[]}],"synonyms":["set","clock"],"antonyms":[]},{"partOfSpeech":"interjection","definitions":[{"definition":"Reminder by the umpire for the players to continue playing after their pause.","synonyms":[],"antonyms":[]},{"definition":"The umpire's call in prizefights, etc.","synonyms":[],"antonyms":[]},{"definition":"A call by a bartender to warn patrons that the establishment is closing and no more drinks will be served.","synonyms":[],"antonyms":[]}],"synonyms":[],"antonyms":[]}],"license":{"name":"CC BY-SA 3.0","url":"https://creativecommons.org/licenses/by-sa/3.0"},"sourceUrls":["https://en.wiktionary.org/wiki/time"]});
  const [formData, setFormData] = useState({
    word:"time",
  });
  const [images, setImages] = useState([{"id":39396,"width":3056,"height":2304,"url":"https://www.pexels.com/photo/clear-glass-with-red-sand-grainer-39396/","photographer":"Pixabay","photographer_url":"https://www.pexels.com/@pixabay","photographer_id":2659,"avg_color":"#BDB5B7","src":{"original":"https://images.pexels.com/photos/39396/hourglass-time-hours-sand-39396.jpeg","large2x":"https://images.pexels.com/photos/39396/hourglass-time-hours-sand-39396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","large":"https://images.pexels.com/photos/39396/hourglass-time-hours-sand-39396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","medium":"https://images.pexels.com/photos/39396/hourglass-time-hours-sand-39396.jpeg?auto=compress&cs=tinysrgb&h=350","small":"https://images.pexels.com/photos/39396/hourglass-time-hours-sand-39396.jpeg?auto=compress&cs=tinysrgb&h=130","portrait":"https://images.pexels.com/photos/39396/hourglass-time-hours-sand-39396.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800","landscape":"https://images.pexels.com/photos/39396/hourglass-time-hours-sand-39396.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200","tiny":"https://images.pexels.com/photos/39396/hourglass-time-hours-sand-39396.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"},"alt":"Clear Glass with Red Sand Grainer"},{"id":707676,"width":2056,"height":2790,"url":"https://www.pexels.com/photo/black-and-white-photo-of-clocks-707676/","photographer":"Andrey Grushnikov","photographer_url":"https://www.pexels.com/@andrey-grushnikov-223358","photographer_id":223358,"avg_color":"#8D8D8D","src":{"original":"https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg","large2x":"https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","large":"https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","medium":"https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&h=350","small":"https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&h=130","portrait":"https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800","landscape":"https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200","tiny":"https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"},"alt":"Black And White Photo Of Clocks"},{"id":1037993,"width":5866,"height":3916,"url":"https://www.pexels.com/photo/gray-double-bell-clock-1037993/","photographer":"Moose Photos","photographer_url":"https://www.pexels.com/@moose-photos-170195","photographer_id":170195,"avg_color":"#D9CBC8","src":{"original":"https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg","large2x":"https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","large":"https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","medium":"https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&h=350","small":"https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&h=130","portrait":"https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800","landscape":"https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200","tiny":"https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"},"alt":"Gray Double-bell Clock"},{"id":745365,"width":6016,"height":4000,"url":"https://www.pexels.com/photo/analog-clock-sketch-in-black-surface-745365/","photographer":"Miguel Á. Padriñán","photographer_url":"https://www.pexels.com/@padrinan","photographer_id":2072,"avg_color":"#1B2227","src":{"original":"https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg","large2x":"https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","large":"https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","medium":"https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg?auto=compress&cs=tinysrgb&h=350","small":"https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg?auto=compress&cs=tinysrgb&h=130","portrait":"https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800","landscape":"https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200","tiny":"https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"},"alt":"Analog Clock Sketch in Black Surface"},{"id":707582,"width":6980,"height":4267,"url":"https://www.pexels.com/photo/wall-clock-at-5-50-707582/","photographer":"Cats Coming","photographer_url":"https://www.pexels.com/@catscoming","photographer_id":116286,"avg_color":"#D0D7DC","src":{"original":"https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg","large2x":"https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","large":"https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","medium":"https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg?auto=compress&cs=tinysrgb&h=350","small":"https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg?auto=compress&cs=tinysrgb&h=130","portrait":"https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800","landscape":"https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200","tiny":"https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"},"alt":"Wall Clock at 5:50"},{"id":33930,"width":5049,"height":3557,"url":"https://www.pexels.com/photo/person-holding-burning-paper-in-dark-room-33930/","photographer":"Eugene Shelestov","photographer_url":"https://www.pexels.com/@bocman","photographer_id":2983,"avg_color":"#0D0904","src":{"original":"https://images.pexels.com/photos/33930/pexels-photo.jpg","large2x":"https://images.pexels.com/photos/33930/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","large":"https://images.pexels.com/photos/33930/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940","medium":"https://images.pexels.com/photos/33930/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350","small":"https://images.pexels.com/photos/33930/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=130","portrait":"https://images.pexels.com/photos/33930/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800","landscape":"https://images.pexels.com/photos/33930/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200","tiny":"https://images.pexels.com/photos/33930/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"},"alt":"Person Holding Burning Paper in Dark Room"}]);

  function handleChange(event) {
    const {name, value,} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name] : value
        }
    })
  };

  async function getWord() {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${formData.word}`);
      const jsonData = await response.json();
      setWord(jsonData[0]);
    } catch (error) {
      console.error(error);
    }

    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${formData.word}&per_page=6&page=1`,
      {
        headers: {
          Authorization: '563492ad6f91700001000001a87bbc80415d44bb8d015c2d95d0f30e',
        },
      }
    );

    setImages(response.data.photos);
  }

  return (
    <div className="App">
      <div className="logo__container">
      <img src={Logo} alt="gramma logo"/>
      </div>
      {word === undefined ? <FallBack /> : 
      <div>
        <Search formData={formData} handleChange={handleChange} getWord={getWord}/>
        <Word word={word} images={images}/>
      </div>
      }
      <p className='attribution'>Made with ❤️ by <a href="https://twitter.com/theHybridCoder" target="_blank">the Hybrid</a>.</p>
    </div>
  )
}

export default App
