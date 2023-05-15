import errorImage from './images/404.svg';

const FallBack = () => {
 return (
    <div className="FallBack">
        <img src={errorImage} alt="404 illustration" className="" />
        <p className="error__message">Sorry, we couldn't find the word you were looking for. This may be due to poor internet connectivity or unavailability of the word on our part.</p>
    </div>
  )
}

export default FallBack