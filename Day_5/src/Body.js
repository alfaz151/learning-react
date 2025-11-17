import { MOCK_JSON_DATA } from "../constant"
import SearchBar from "./SearchBar"; 


const Body = () => {
    return (
        <>
            <div className='main-body'>
                <div className='body-container'>
                    <SearchBar mockJsonData={MOCK_JSON_DATA} />
                </div>
            </div>
        </>
    )
}

export default Body;