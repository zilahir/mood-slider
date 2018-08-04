import React, { Component } from 'react';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import 'rc-menu/assets/index.css';
import animate from 'css-animation';

class TopNavigation extends Component {    
    render() { 
        return ( 
            <Menu className="fin-menu">
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
            </Menu>
         );
    }
}
 
export { TopNavigation };