import React, { Component } from "react";
import './Nav.scss'

class Nav extends React.Component {
    render() {
        return (
            <>
                <div className="topnav">
                    <a className="active" href="/">Home</a>
                    <a href="/todos">To Do Apps</a>
                    <a href="/joblists">Job Lists</a>
                </div>
            </>
        )
    }
}
export default Nav;