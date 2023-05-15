import { useState,useEffect } from 'react';
import './App.scss'
import Search from './components/Search';
import Word from './components/Word';
import FallBack from './components/FallBack';
import Logo from './components/images/logo.svg';
import axios from 'axios';

function App() {
  const [word,setWord] = useState();
  const [formData, setFormData] = useState({
    word:"time",
  });
  const [images, setImages] = useState();
  const [isLoading,setIsLoading] = useState(true);
  const [isNightMode, setIsNightMode] = useState(false);
  const apiURL = `https://gramma.netlify.app/`;

  useEffect(() => {
    const searchWord = formData.word;
    const wordOptions = {
      method: 'GET',
      url: `${apiURL}/search`,
      params: {searchWord},
  }

  axios.request(wordOptions).then((response) => {
      setWord(response.data)
  }).catch((error) => {
      console.error(error)
  })

  const imageOptions = {
    method: 'GET',
    url: `${apiURL}/images`,
    params: {searchWord},
}

  axios.request(imageOptions).then((response) => {
      setImages(response.data)
  }).catch((error) => {
      console.error(error)
  })
  setIsLoading(false);
  },[])

  function handleChange(event) {
    const {name, value,} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name] : value
        }
    })
  };

  const getWord = () =>  {
    setWord(null)
    setIsLoading(true);
    const searchWord = formData.word;
    if(searchWord) {
      const wordOptions = {
        method: 'GET',
        url: 'http://localhost:4000/search',
        params: {searchWord},
    }

    axios.request(wordOptions).then((response) => {
        setWord(response.data)
    }).catch((error) => {
        console.error(error)
    })

    const imageOptions = {
      method: 'GET',
      url: 'http://localhost:4000/images',
      params: {searchWord},
  }

    axios.request(imageOptions).then((response) => {
        setImages(response.data)
    }).catch((error) => {
        console.error(error)
    })
    }
    setIsLoading(false);
  }

  const toggleMode = () => {
    setIsNightMode(!isNightMode);
  }

  return (
    <div className={`App ${isNightMode ? `App__dark` : ``}`}>
      <div className="logo__container">
      <img src={Logo} alt="gramma logo"/>
      <div className={`dark-mode-toggler ${isNightMode ? 'dark-mode' : ''}`}>
        <label className="switch">
          <input type="checkbox" checked={isNightMode} onChange={toggleMode} aria-label=''/>
          <span className="slider round"></span>
        </label>
    </div>
      </div>
      <div>
        <Search formData={formData} handleChange={handleChange} isLoading={isLoading} getWord={getWord}/>
        {!word ? <FallBack /> : 
        <Word word={word} images={images} isLoading={isLoading}/>}
      </div>
      <p className='attribution'>Made with ❤️ by <a href="https://twitter.com/theHybridCoder" target="_blank">the Hybrid</a>.</p>
    </div>
  )
}

export default App
