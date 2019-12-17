import React from 'react'

import useDataFetching from "../hooks/useDataFetching"

function RepositoriesHooks() {
    const { loading, results, error } = useDataFetching("https://jsonplaceholder.typicode.com/posts")

    if (loading || error ) {
        return loading ? "Loading..." : error.message
    }

    return (
        <ul>
        {results.map(({ id, title, body }) => (
          <li key={id}>
            <h1>
              {title}
            </h1>
        <p>{body}</p>
          </li>
        ))}
      </ul>
    )
}

export default RepositoriesHooks