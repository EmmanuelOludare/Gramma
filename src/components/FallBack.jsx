import arrowIcon from './images/back-arrow.png';

const FallBack = () => {
    const handleReload = (props) => {
        window.location.reload();
    }

  return (
    <div className="FallBack">
        <img src={arrowIcon} alt="arrow back" className="back__arrow" onClick={handleReload}/>
        <p className="error__message">Sorry, we couldn't find the word you were looking for.</p>
    </div>
  )
}

export default FallBack