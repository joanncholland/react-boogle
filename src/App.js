import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import SearchResults from './SearchResults'

import Header from './Header';

function App() {
	const [results, setResults] = useState([])

  return (
    <div className="App">
      <Header setResults={setResults} />
		<SearchResults results={results} />

    </div>
  );
}

export default App;
