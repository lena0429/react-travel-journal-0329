import './style.css';
import Navbar from './components/Navbar';
import data from './data';
import Card from './components/Card';

function App() {
  const cards = data.map(card => <Card key={card.id} card={card} />)
  return (
    <div className="App">
      <Navbar />
      <section className="cards">
         {cards}
      </section>
    </div>
  );
}

export default App;
