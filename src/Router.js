import React, { lazy, Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import { HashRouter, Routes, Route } from "react-router-dom";
import CenteredContainer from './components/utils/Containers/CenteredContainer';
import Navbar from "./components/Common/Navbar/Navbar";

//lazy loading all the required components
const Home = lazy(() => import("./components/pages/Home/Home"));

//loader to handle fallback of UI
const Loader = () => {
    return <CenteredContainer>
        <Spinner animation="border" >
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </CenteredContainer>

}

//lazyLoaded component needed fallback UI either can't displayed by react-route-dom
const lazyLoaded = (component) => {
    return <Suspense fallback={<Loader />} >
        {component}
    </Suspense>
}

const Router = () => {
    return (
        <HashRouter basename="https://bhadresh-malankiya.github.io/Portfolio/">
            <Navbar/>
            <Routes>
                <Route path="/" element={lazyLoaded(<Home />)} />
            </Routes>
        </HashRouter>
    )
}






export default Router