import React, {useState} from 'react'
import cog from "./Screenshot 2022-08-18 at 21.18.01.png";
import menu from "./Screenshot 2022-08-18 at 21.18.30.png";
import avatar from "./Screenshot 2022-08-18 at 21.18.51.png";
import search from "./Screenshot 2022-08-18 at 21.45.23.png";

export default function Header({setResults}) {
	const [query, setQuery] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(
      `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${query}&pageNumber=1&pageSize=10`,
      {
        headers: {
          "X-RapidAPI-Key":
            "d405797a71msh7591fc11f1ab558p1f914cjsn1425ba7bb7db",
          "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setResults(data));
	};

  return (
    <header>
      <div className="top-header">
        <div className="top-left-header">
          <h1>Boogle</h1>
          <form>
            <input type="text" name="search" id="search" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>S</button>
          </form>
        </div>
        <div className="top-right-header">
          <ul>
            <li>
              <img src={cog} alt="settings" />
            </li>
            <li>
              <img src={menu} alt="menu" />
            </li>
            <li>
              <img src={avatar} alt="avatar" />
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-header">
        <ul>
          <li>All</li>
          <li>News</li>
          <li>Images</li>
          <li>Videos</li>
          <li>Shopping</li>
          <li>More</li>
          <li className='tools'>Tools</li>
        </ul>
      </div>
    </header>
  );
}
