import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  return (
    <div className="w-2/3 mx-auto border border-gray-400 rounded-full h-10 px-5 flex items-center">
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        placeholder='ፈልግ'
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className='absolute  top-10 left-200 right-89 justify-end'><FaSearch/></button>
    </form>
    </div>
  );
}

export default SearchInput;