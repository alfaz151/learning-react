import { useState } from 'react';
import { MOCK_JSON_DATA } from '../constant';

function filterData(searchText, searchlist) {
    return searchlist.filter(data => data.title.toLowerCase().includes(searchText.toLowerCase()));
}

const SearchBar = () => {
    const [searchText, setSearchText] = useState("");
    const [searchList, setSearchList] = useState(MOCK_JSON_DATA);

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button onClick={() => {
                const filteredData = filterData(searchText, searchList);
                setSearchList(filteredData);
            }}>Search</button>
            {
                searchList.map(post => {
                    return (
                        <div className='post-card' key={post.id}>
                            <h2 className='post-title'>{post.title}</h2>
                            <p className='post-body'>{post.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SearchBar;