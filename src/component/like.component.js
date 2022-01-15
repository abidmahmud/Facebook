import React, { Component } from "react";

class Like extends React.Component {
    getClassName = () => {
        const { like } = this.props;
        let className = like ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up";
        return className;
    };

    handleToggleLike = () => {
        this.props.handleToggleLike(this.props.id);
    };

    render() {
        return (
            <>
                <i
                    onClick={this.handleToggleLike}
                    className={this.getClassName()}
                ></i>
            </>
        );
    }
}

export default Like;
