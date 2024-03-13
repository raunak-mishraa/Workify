import { useEffect, useState } from "react";
import axios from 'axios'
function useSearch(searchValue) {
    const [searchData, setSearchData] = useState(null);
        const query = searchValue;
        useEffect(() => { 
            axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/search/client_posts/search?query=${query}`)
        .then((res)=>{
            if(res){
                // console.log(res.data.data)
                setSearchData(res.data.data)
                // dispatch(searchClientPosts(res.data.data))
                // navigate('/search')
            }
        })
        .catch((error)=>{
            // navigate('/search')
            setSearchData('')
            // dispatch(searchClientPosts([]))
            console.log(error)
        })
        }, [query]);
  return searchData;
}

export default useSearch;