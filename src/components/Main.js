import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MainContent, MobileNavigation } from './common/';

const Main = () => (
    <div id="outer-container">
        <MobileNavigation />
        <main>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={()=><MainContent />}/>                
                </Switch>
            </BrowserRouter>
        </main>
    </div>
)

export { Main }