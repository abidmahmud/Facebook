import React, { Component } from "react";

class Dislike extends React.Component {

    getClassName = () => {
        const { dislike } = this.props;
        let className = dislike ? "bi bi-hand-thumbs-down-fill" : "bi bi-hand-thumbs-down";
        return className;
    };

    handleToggleDislike = () => {
        this.props.handleToggleDislike(this.props.id);
    };

    render() {
        return (
            <>
                <i
                    onClick={this.handleToggleDislike}
                    className={this.getClassName()}
                ></i>
            </>
        );
    }
}

export default Dislike;
