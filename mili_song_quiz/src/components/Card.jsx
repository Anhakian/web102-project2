import React, { useEffect , useState } from 'react';

const Card = ({ question , answer , flip , album , color }) => {
  const [isFlipped, setIsFlipped] = useState(flip);

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  };

  useEffect( () => {
    setIsFlipped(flip);
  }, [flip]);

  const questionHtml = React.Children.toArray(question.props.children).join('');

  const sentences = questionHtml.split('<br/>');

  return (
    
    <div className={`card ${isFlipped ? 'flip' : ''} ${color}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">
          {sentences.map((sentence, index) => (
            <div key={index}>
              {sentence}
            </div>
          ))}
          <div>
            <h5>Appears in Album:</h5>  
            <img src={`../src/assets/${album}.jpg`} height="80px" weight="80px"/>
          </div>
        </div>
        <div className="card-back">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Card;