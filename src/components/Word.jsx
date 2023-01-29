import { useRef } from 'react';
import { FaPlay } from "react-icons/fa";

const Word = (props) => {
    const audioRef = useRef(null);
  const handleClick = () => {
    audioRef.current.play();
  };

  return (
    <div className='Word'>
        <div className="word__display__audio">
            <div className="word__audio">
                <p className="word__text">{props.word.word}</p>
                <button onClick={handleClick} className='play__button'><FaPlay/></button>
                <audio ref={audioRef} src={props.word.phonetics.length === 0 ? "" : props.word.phonetics[0].audio}/>
            </div>
            <p className="word__phonetic">{props.word.phonetic}</p>
        </div>
        <div className="meanings">
        {props.word.meanings.map((meaning, index) => (
        <div key={index} className="meaning__example">
          <p className="part__of__speech">{meaning.partOfSpeech}</p>
          {meaning.definitions.map((definition, index) => (
            <div key={index}>
              <p className="word__definition">{definition.definition}</p>
              {definition.example && <p className="word__example">Example: <i>{definition.example}</i></p>}
            </div>
          ))}
        </div>
      ))}
        </div>
    </div>
  )
}

export default Word