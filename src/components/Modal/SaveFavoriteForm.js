const SaveFavoriteForm = ({
                              onRequestValueChange,
                              onRangeValueChange,
                              onRequestNameValueChange,
                              request,
                              requestName,
                              range,
                              onSubmit
                          }) => {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="request">
                Запрос
                <input onChange={event => onRequestValueChange(event)} value={request} type="text" name='request'/>
            </label>
            <label htmlFor="requestName">
                *Название
                <input onChange={event => onRequestNameValueChange(event)} value={requestName} type="text"
                       name='requestName'/>
            </label>
            <label htmlFor="range">
                Количество
                <input onChange={event => onRangeValueChange(event)} type="range" name='range' min='0' max='50'
                       value={range}/>
            </label>
            <button type='submit'>Сохранить</button>
        </form>
    )
}
export default SaveFavoriteForm