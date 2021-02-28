import './App.css';
import {Button, Layout} from 'antd';
import {Route} from 'react-router-dom'
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import Login from "./components/Login/Login";
import SearchContainerConnect from "./components/Search/SearchContainer";
import FavoriteContainerConnect from "./components/FavoriteComponent/FavoriteContainer";
import {Redirect} from "react-router";
import VideoDetail from "./components/VideoDetail/VideoDetail";

const {Header, Content} = Layout;
const styleDiv = {
    display: 'flex',
    justifyContent: 'space-between'
}
const styleBtn = {
    marginTop: "15px"
}

function App({login, logout, totalResult, videoId,setSubmitId,submitId}) {
    return (
        <Layout className="layout">
            <Header style={{marginBottom: "20px"}}>
                <div style={styleDiv}>
                    <HeaderMenu/>
                    <div style={{color: "white"}}>
                        {login ? <h3 style={{color: "white", margin: 0}}>{login}</h3> : "Авторизуйтесь"}
                    </div>
                    <Button onClick={() => logout()} style={styleBtn} type='primary'>Выйти</Button>
                </div>
            </Header>
            <Content style={{padding: '0 50px', minHeight: '700px'}}>
                <div className="site-layout-content">
                    <Route path={'/login'} render={Login}/>
                    <Route path={'/search'} render={() => login ? <SearchContainerConnect submitId={submitId} setSubmitId={setSubmitId} totalResult={totalResult}/> :
                        <Redirect to={"/login"}/>}/>
                    <Route path={'/favorite'} render={() => login ? <FavoriteContainerConnect submitId={submitId} setSubmitId={setSubmitId}/> :
                        <Redirect to={"/login"}/>}/>
                    <Route path={'/videoDetail'} render={() => <VideoDetail videoId={videoId}/>}/>
                </div>
            </Content>
        </Layout>
    )
}

export default App;
