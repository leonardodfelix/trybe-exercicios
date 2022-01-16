import { useEffect, useState } from 'react';

function App() {
  const [randomNum, setNum] = useState(0);
  const [numMessage, setMessage] = useState('')
  
  const checkNumber = (random) => (random % 3 === 0 || random % 5 === 0) ? setMessage('Acerto') : '';

  useEffect(() => {
    const interval = setTimeout(() => {
      const random = Math.floor(Math.random() * 100) + 1;
      checkNumber(random);
      setNum(random)
    }, 10000);
    return () => clearInterval(interval);
  }, [randomNum])
  
  useEffect(() => {
    const msgInterval = setTimeout(() => setMessage(''), 4000);
    return () => clearInterval(msgInterval);
  }, [numMessage])

  return (
    <div>
      <h1>{randomNum}</h1>
      <p>{numMessage}</p>
    </div>
  );
}

export default App;
