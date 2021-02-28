import {Layout} from 'antd';
import React, {useState} from 'react'
import SearchFormContainerConnect from "../SearchForm/SearchFormContainer";
import VideoListContainerConnect from "../VideoList/VideoListContainer";
import ModalComponent from "../Modal/Modal";
import {connect} from "react-redux";
import {saveFavoriteRequest} from "../../store/reducers/favoriteReducer";

const {Content} = Layout;
const SearchContainer = ({totalResult, saveFavoriteRequest, submitId, setSubmitId}) => {
    const [visible, setVisible] = useState(false)
    const [request, setRequest] = useState("")
    const [requestName, setRequestName] = useState("")
    const [range, setRange] = useState(12)
    const onSearchSubmit = (event) => {
        event.preventDefault()
        const favoriteRequest = {request, requestName, range};
        saveFavoriteRequest(favoriteRequest)
        setVisible(false)
    }
    return (
        <Layout className="layout">
            <Content>
                <SearchFormContainerConnect setSubmitId={setSubmitId} setVisible={setVisible}/>
                {totalResult ? <VideoListContainerConnect/> : null}
                <ModalComponent request={request} requestName={requestName}
                                range={range} setRequest={setRequest}
                                setRequestName={setRequestName} setRange={setRange}
                                setVisible={setVisible} visible={visible}
                                onSearchSubmit={onSearchSubmit} submitId={submitId}
                />
            </Content>
        </Layout>

    )
}

let SearchContainerConnect = connect(null, {saveFavoriteRequest})(SearchContainer)
export default SearchContainerConnect