import './App.css';
import Image from './Image';

const imageUrl = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
const altText = 'Cute cat staring';

function App() {
  return (
    <main>
      <Image source={imageUrl} alternativeText={altText} />
    </main>
  )}

export default App;
