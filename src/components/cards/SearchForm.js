
import { useState } from 'react'

const SearchForm = ({setSearchTerm}) => {
  const [term, setTerm] = useState()
    const onSubmit = (e) => {
        e.preventDefault()
        setSearchTerm(term)
    }

    return (
      <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form onSubmit={onSubmit} className="w-full max-w-sm">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input
            //   onChange={e => setText(e.target.value)}
              type="text"
              className="appearance-none bg-transparent border-none w-full text-white placeholder-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Search Drinks..."
              value={term}
              onChange= {(e) => {setTerm(e.target.value)}}
            />
            <button
              className="max-w-auto bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-md border-4 text-white py-1 px-3 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
}

export default SearchForm