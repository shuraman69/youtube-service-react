import React from 'react'
import style from '../LoginForm/LoginForm.module.css'

const SearchForm = ({onSaveFavoriteClick, onSubmit, searchValue, onSearchChange}) => {
    return (
        <form onSubmit={event => onSubmit(event)} style={style}>
            <label htmlFor="search">
                <input value={searchValue} onChange={onSearchChange} placeholder='Что хотите посмотреть?'
                       type="text"
                       name='search'/>
                    <span onClick={() => onSaveFavoriteClick()} className={style.customInput}></span>
            </label>
            <button type='submit'>Поиск</button>
        </form>
    )
}

export default SearchForm