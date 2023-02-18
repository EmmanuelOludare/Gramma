import arrowIcon from './images/back-arrow.png';

const FallBack = () => {
    const handleReload = (props) => {
        window.location.reload();
    }

  return (
    <div className="FallBack">
        <img src={arrowIcon} alt="arrow back" className="back__arrow" onClick={handleReload}/>
        <p className="error__message">We’re sorry, we couldn’t find any results for your search.</p>
    </div>
  )
}

export default FallBack