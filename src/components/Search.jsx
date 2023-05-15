import searchIcon from './images/search.svg';

const Search = ({formData,handleChange,getWord,isLoading}) => {
  const getWordWithEnterKey = (e) => {
    if (e.key === 'Enter') {
      getWord();
    }
  }
  return (
    <div className="Search">
      <p className="input__prompt">What word do you seek?</p>
      <div className="input-container">
        <input type="text" placeholder="time" className="search__input"
          name="word"
          onChange={handleChange}
          value={formData.message}
          onKeyUp={getWordWithEnterKey}
        />
        <button className="search-icon" disabled={isLoading} onClick={getWord}><img src={searchIcon} alt="search icon" /></button>
      </div>
    </div>
  )
}

export default Search