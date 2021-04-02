import React from 'react'
import './components/Layout.css'
import './components/JumbotronHome.css'
import Badge from 'react-bootstrap/Badge'

export const Home = () => (     //if you use parenthesis react thinks its one line so you can omit brackets
    
    <div id="home" className="layout-element">
        <div className="jumbo">
            <h2><Badge className="jumbo-text">Computer Engineering Student @ University of Waterloo</Badge></h2>
            <br/>
            <h2><Badge className="jumbo-text">Software Developer @ Arctic Wolf Networks</Badge></h2>
            <br/>
            <h5><Badge className="jumbo-notice">This site currently only supports browser viewing. Mobile coming soon!</Badge></h5>
        </div>
    </div>
)