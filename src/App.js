
import IntroContent from './components/IntroContent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200">
      <Navbar />
      <IntroContent />
    </div>
  );
}

export default App;
