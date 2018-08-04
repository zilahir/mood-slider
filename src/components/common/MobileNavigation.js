import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

class MobileNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = { isTop: true, menuOpen: false };
    }
    componentDidMount()  {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        })
    }
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }
    closeMenu () {
        this.setState({menuOpen: false})
    }
    render() { 
        let backgroundColor = this.state.isTop ? '' : 'black-bg';
        return ( 
            <div>
                <Menu right className={backgroundColor}
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                >
                    <a onClick={() => this.closeMenu()} href="#">
                        <span className="close"></span>
                    </a>
                    <a href="#">demo 1</a>
                </Menu>
            </div>
        );
    }
}
 
export { MobileNavigation };