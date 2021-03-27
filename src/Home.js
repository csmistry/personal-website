import React from 'react'
import {JumbotronHome} from './components/JumbotronHome';
import './components/Layout.css'

export const Home = () => (     //if you use parenthesis react thinks its one line so you can omit brackets
    
    <div id="home" className="layout-element">
        <JumbotronHome/>
    </div>
)