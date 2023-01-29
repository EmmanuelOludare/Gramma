import { useState,useEffect } from 'react';
import './App.scss'
import Search from './components/Search';
import Word from './components/Word';
import Logo from './components/images/logo.svg';

function App() {
  const [word,setWord] = useState({"word":"time","phonetic":"/tɑem/","phonetics":[{"text":"/tɑem/","audio":"https://api.dictionaryapi.dev/media/pronunciations/en/time-au.mp3","sourceUrl":"https://commons.wikimedia.org/w/index.php?curid=6871204"},{"text":"/taɪm/","audio":""},{"text":"/taɪm/","audio":""},{"text":"/taɪm/","audio":"https://api.dictionaryapi.dev/media/pronunciations/en/time-us.mp3","sourceUrl":"https://commons.wikimedia.org/w/index.php?curid=1197439","license":{"name":"BY-SA 3.0","url":"https://creativecommons.org/licenses/by-sa/3.0"}}],"meanings":[{"partOfSpeech":"noun","definitions":[{"definition":"The inevitable progression into the future with the passing of present and past events.","synonyms":[],"antonyms":[],"example":"Time stops for nobody.   the ebb and flow of time"},{"definition":"A duration of time.","synonyms":[],"antonyms":[]},{"definition":"An instant of time.","synonyms":[],"antonyms":[]},{"definition":"The measurement under some system of region of day or moment.","synonyms":[],"antonyms":[],"example":"Let's synchronize our watches so we're not on different time."},{"definition":"Ratio of comparison.","synonyms":[],"antonyms":[],"example":"your car runs three times faster than mine;  that is four times as heavy as this"},{"definition":"(grammar) Tense.","synonyms":[],"antonyms":[],"example":"the time of a verb"},{"definition":"The measured duration of sounds; measure; tempo; rate of movement; rhythmical division.","synonyms":[],"antonyms":[],"example":"common or triple time;   the musician keeps good time."}],"synonyms":[],"antonyms":[]},{"partOfSpeech":"verb","definitions":[{"definition":"To measure or record the time, duration, or rate of.","synonyms":[],"antonyms":[],"example":"I used a stopwatch to time myself running around the block."},{"definition":"To choose when something begins or how long it lasts.","synonyms":[],"antonyms":[],"example":"The President timed his speech badly, coinciding with the Super Bowl."},{"definition":"To keep or beat time; to proceed or move in time.","synonyms":[],"antonyms":[]},{"definition":"To pass time; to delay.","synonyms":[],"antonyms":[]},{"definition":"To regulate as to time; to accompany, or agree with, in time of movement.","synonyms":[],"antonyms":[]},{"definition":"To measure, as in music or harmony.","synonyms":[],"antonyms":[]}],"synonyms":["set","clock"],"antonyms":[]},{"partOfSpeech":"interjection","definitions":[{"definition":"Reminder by the umpire for the players to continue playing after their pause.","synonyms":[],"antonyms":[]},{"definition":"The umpire's call in prizefights, etc.","synonyms":[],"antonyms":[]},{"definition":"A call by a bartender to warn patrons that the establishment is closing and no more drinks will be served.","synonyms":[],"antonyms":[]}],"synonyms":[],"antonyms":[]}],"license":{"name":"CC BY-SA 3.0","url":"https://creativecommons.org/licenses/by-sa/3.0"},"sourceUrls":["https://en.wiktionary.org/wiki/time"]});
  const [formData, setFormData] = useState({
    word:"time",
  });

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
  }
  

  return (
    <div className="App">
      <div className="logo__container">
      <img src={Logo}/>
      </div>
      <Search formData={formData} handleChange={handleChange} getWord={getWord}/>
      <Word word={word}/>
    </div>
  )
}

export default App
