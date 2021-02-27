import React from 'react'
import style from '../LoginForm/LoginForm.module.css'

const SearchForm = ({setVisible, onSubmit, searchValue, onSearchChange}) => {
    return (
        <form onSubmit={event => onSubmit(event)} style={style}>
            <label htmlFor="search">
                <div onClick={() => setVisible(true)} className={style.customInput}>
                    <input value={searchValue} onChange={onSearchChange} placeholder='Что хотите посмотреть?'
                           type="text"
                           name='search'/>
                </div>
            </label>
            <button type='submit'>Поиск</button>
        </form>
    )
}

export default SearchForm