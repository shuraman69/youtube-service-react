import React from 'react'
import {connect} from "react-redux";
import styles from './SearchResult.module.css'

const SearchResult = ({setIsColumn, searchRequest, totalResult}) => {
    return (
        <div className={styles.container}>
            <div className={styles.results}>
                <span>{`Видео по запросу: ${searchRequest}   ${totalResult}`}</span>
            </div>
            <div className={styles.view}>
                <span onClick={() => setIsColumn(true)} className={styles.view_list}/>
                <span onClick={() => setIsColumn(false)} className={styles.view_grid}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        totalResult: state.search.videos.totalResult,
        searchRequest: state.search.videos.searchRequest
    }
}
export const SearchResultConnect = connect(mapStateToProps, {})(SearchResult);
