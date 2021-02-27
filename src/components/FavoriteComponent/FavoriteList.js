import React from 'react'
import styles from './FavoriteContainer.module.css'

const FavoriteList = ({favoriteRequests, onFavoriteClick}) => {
    return (
        <ul className={styles.ul}>
            {!!favoriteRequests.length ? favoriteRequests.map(req =>
                <li
                    onClick={() => {
                        onFavoriteClick(req.id)
                    }}
                    className={styles.li} key={req.id}
                    id={req.id}>{req.requestName}
                </li>) : "Вы еще ничего не сохранили"}
        </ul>
    )
}
export default FavoriteList