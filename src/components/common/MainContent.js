import React, { Component } from 'react';
import Card from './Card';
import profile from './../../img/profile.png';

class MainContent extends Component {    
    render() {
        return (
            <div>                
                <Card name="Ricsko" profilePic={profile} id="1"/>
                <Card name="Emmi" profilePic={profile} id="2"/>
            </div>
        );
    }
};

export { MainContent };