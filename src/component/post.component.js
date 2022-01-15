import React, { Component } from 'react';
import Dislike from './dislike.component';
import Like from './like.component';

class Post extends React.Component {
    render() {
        const { post, id, like, dislike, content, date, name, handleToggleLike, handleToggleDislike, handleRemove } = this.props;
        return (
            <>
                <div className='card' style={{ marginLeft: '1rem', marginBottom: '1rem', width: '25rem' }}>
                    <div className='card-body'>
                        <h5 className='card-title'>{name}</h5>

                        <hr />

                        <h5>{date}</h5>

                        <hr />

                        <img style={{ width: "20rem" }} src="https://cdn.mos.cms.futurecdn.net/Ed7DoSJNMYrTXT9d8yUyQo-1200-80.jpg.webp" alt="Photo" />

                        <hr />

                        <p className='card-text'>{content}</p>

                        <hr />

                        <div className='d-flex justify-content-between'>
                            <input type="comment" className="form-control" id="comment" placeholder="Type Here"></input>
                            <Like
                                handleToggleLike={handleToggleLike}
                                like={like}
                                id={id}
                            />

                            <Dislike
                                handleToggleDislike={handleToggleDislike}
                                dislike={dislike}
                                id={id}
                            />
                            {/* <button className='btn btn-warning' >Remove</button> */}
                            <i onClick={() => handleRemove(id)} className="bi bi-shield-fill-x"></i>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Post;