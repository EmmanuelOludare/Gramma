import searchIcon from './images/search.svg';

const Search = (props) => {
  return (
    <div className="Search">
      <p className="input__prompt">What word do you seek?</p>
      <div className="input-container">
        <input type="text" placeholder="time" className="search__input"
          name="word"
          onChange={props.handleChange}
          value={props.formData.message}
        />
        <div className="search-icon" onClick={props.getWord}><img src={searchIcon} alt="search icon" /></div>
      </div>
    </div>
  )
}

export default Search