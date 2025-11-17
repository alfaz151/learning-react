import { use, useState } from 'react';

function filterData(searchText, searchlist) {
    if (!searchText) {
        return searchlist;
    }
    return searchlist.filter(data => data.title.toLowerCase().includes(searchText.toLowerCase()));
}

const SearchBar = ({ mockJsonData }) => {
    const [searchText, setSearchText] = useState("");
    const [searchList, setSearchList] = useState(mockJsonData);
    const [filteredData, setFilteredData] = useState(mockJsonData);


    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button onClick={() => {
                const filteredData = filterData(searchText, searchList);
                setFilteredData(filteredData);
            }}>Search</button>
            {
                filteredData.map(post => {
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