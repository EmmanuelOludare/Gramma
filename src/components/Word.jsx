import { useRef } from 'react';
import { FaPlay } from "react-icons/fa";

const Word = ({word,images,}) => {
    const audioRef = useRef(null);
  const handleClick = () => {
    audioRef.current.play();
  };

  return (
    <div className='Word'>
        <div className="word__display__audio">
            <div className="word__audio">
                <p className="word__text">{word.word.toUpperCase()}</p>
                <button onClick={handleClick} className='play__button'><FaPlay/></button>
                <audio ref={audioRef} src={word.phonetics.length === 0 ? "" : word.phonetics[0].audio}/>
            </div>
            <p className="word__phonetic">{word.phonetic}</p>
        </div>
        <div className="meanings">
        {word.meanings.map((meaning, index) => (
        <div key={index} className="meaning__example">
          <p className="part__of__speech">{meaning.partOfSpeech.charAt(0).toUpperCase() + meaning.partOfSpeech.slice(1)}</p>
          {meaning.definitions.map((definition, index) => (
            <div key={index} className='definition__example'>
              <ul className='definition__container'>
                <li className="word__definition"><b>Meaning:</b>{` ` + definition.definition}</li>
              </ul>
              {definition.example && <p className="word__example"><b>Example:</b> "{definition.example}"</p>}
            </div>
          ))}
        </div>
      ))}
        </div>
        {images.length > 1 &&
        <div className="image__container">
            {images.map((image) => (
            <img
                className="image"
                key={image.id}
                src={image.src.medium}
            />
            ))}
      </div>}
    </div>
  )
}

export default Word