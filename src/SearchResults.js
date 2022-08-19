import React from 'react'

export default function SearchResults({results}) {

	let regex = `/https://[a-z]+.[a-z]+/g`;


  return (
    <ul className="search-results">
      {results != "" &&
        results.value.map((result) => (
          <li className="result">
            <h2>
              <a target="_blank" href={`${result.url}`}>
                <span className="result-url">
                  {result.url}
                </span>
                <br />
                {result.title}
              </a>
            </h2>
            <p>{result.description}</p>
          </li>
        ))}
    </ul>
  );
}
