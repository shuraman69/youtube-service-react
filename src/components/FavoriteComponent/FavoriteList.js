import React from 'react'
import styles from './FavoriteContainer.module.css'

const FavoriteList = ({favoriteRequests, onFavoriteClick, onEditClick}) => {
    return (
        <ul className={styles.ul}>
            {!!favoriteRequests.length ? favoriteRequests.map(req =>
                <div>
                    <li
                        onClick={() => {
                            onFavoriteClick(req.id)
                        }}
                        className={styles.li} key={req.id}
                        id={req.id}>{req.requestName}

                    </li>
                    <span className={styles.edit} onClick={() => onEditClick(req.id)}>Редактировать &#8593;</span>
                </div>
            ) : "Вы еще ничего не сохранили"}
        </ul>
    )
}
export default FavoriteList