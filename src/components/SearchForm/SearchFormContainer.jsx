import React, {useState} from 'react'
import {connect} from "react-redux";
import SearchForm from "./SearchForm";
import {getVideosThunk} from "../../store/reducers/searchReducer";

const SearchFormContainer = ({getVideosThunk, setVisible,setSubmitId}) => {
    const [searchValue, setSearchValue] = useState("")
    const onSearchChange = (event) => {
        setSearchValue(event.target.value)
    }
    const onSaveFavoriteClick=()=>{
        setVisible(true)
        setSubmitId(0)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        getVideosThunk(searchValue)
    }
    return (
        <SearchForm onSaveFavoriteClick={onSaveFavoriteClick}
                    onSubmit={onSubmit}
                    onSearchChange={onSearchChange}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}/>
    )
}

const SearchFormContainerConnect = connect(null, {getVideosThunk})(SearchFormContainer)
export default SearchFormContainerConnect