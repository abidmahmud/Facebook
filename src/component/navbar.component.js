import React, { Component } from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="d-flex justify-content-between navbar navbar-light bg-light" >
                    <div className="d-flex justify-content-between" >
                        <i
                            style={{ marginLeft: '1.5rem', color: "blue", fontSize: "50px" }}
                            className="bi bi-facebook">
                        </i>
                        <div className='p-4'>
                            <span  > Like : {this.props.count}</span>
                            <span> Dislike : {this.props.count1}</span>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;