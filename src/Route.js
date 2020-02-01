import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomeComponent } from './components/pages/home/Home';
import { AboutComponent } from './components/pages/home/About';
function RouteConfig() {
    return (
        <div>
            <Route exact path="/" component={HomeComponent} ></Route>
            <Route path="/about" component={AboutComponent} ></Route>
        </div>

    );
}
export default RouteConfig;