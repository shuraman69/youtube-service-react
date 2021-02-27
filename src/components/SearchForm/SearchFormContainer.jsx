import React, {useState} from 'react'
import {connect} from "react-redux";
import SearchForm from "./SearchForm";
import {getVideosThunk} from "../../store/reducers/searchReducer";

const SearchFormContainer = ({getVideosThunk, setVisible}) => {
    const [searchValue, setSearchValue] = useState("")
    const onSearchChange = (event) => {
        setSearchValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        getVideosThunk(searchValue)
    }
    return (
        <SearchForm setVisible={setVisible}
                    onSubmit={onSubmit}
                    onSearchChange={onSearchChange}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}/>
    )
}

const SearchFormContainerConnect = connect(null, {getVideosThunk})(SearchFormContainer)
export default SearchFormContainerConnect