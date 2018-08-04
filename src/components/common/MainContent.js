import React, { Component } from 'react';
import Card from './Card';
import profile from './../../img/profile.png';

class MainContent extends Component {    
    render() {
        return (
            <div>                
                <Card name="John Doe" profilePic={profile} id="1"/>
                <Card name="Jane Doe" profilePic={profile} id="2"/>
            </div>
        );
    }
};

export { MainContent };