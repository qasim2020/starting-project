import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

function App() {

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map( (val, index) => <CoreConcept key={index} {...val} /> )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
