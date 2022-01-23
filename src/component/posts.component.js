import React, { Component } from 'react';
import Navbar from './navbar.component';
import Post from './post.component';
import Form from './form.component';

class Posts extends React.Component {
    state = {
        CountLike: 0,
        CountDislike: 0,
        length: 3,
        showForm: false,
        posts: [
            {
                id: 1,
                like: false,
                dislike: false,
                name: "Bangladesh Win Over NZ in Mount Maunganui.",
                date: "12-01-201",
                content: "A seminal moment in Bangladesh cricket history and this is also their first WTC win in this current cycle. "
            },
            {
                id: 2,
                like: false,
                dislike: false,
                name: "Omicron Wave.",
                date: "05-10-2020",
                content: "Bangladesh has reported a sharp rise in COVID-19 infections and virus-related deaths over the past week amid fears of omicron variant spreading throughout the country."
            },
            {
                id: 3,
                like: false,
                dislike: false,
                name: "Annual Picnic of BS-23.",
                date: "17-01-2022",
                content: "If you’re happy to put a little ‘sand’ into your ‘sandwich’ Weston Beach is a lovely spot with views of Wales across the water. Whilst spending the day out you can unfold your picnic blanket and sit in the sun."
            },
        ],
    }

    handleRemove = (id) => {
        const posts = [...this.state.posts];
        const post = posts.find(post => post.id === id);

        if (post.like === true)
            this.setState({ CountLike: this.state.CountLike - 1 });
        if (post.dislike === true)
            this.setState({
                CountDislike: this.state.CountDislike - 1,
            });

        const updatedPosts = posts.filter((post) => {
            return post.id === id ? false : true;
        }, id);
        this.setState({ posts: updatedPosts });
    }

    handleAdd = (newPost) => {
        this.showForm();

        const posts = [...this.state.posts];
        posts.push({
            id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
            like: posts.like,
            dislike: newPost.dislike,
            name: newPost.name,
            date: newPost.date,
            content: newPost.content,
        });
        console.log(posts);
        this.setState({ posts });
    }

    showForm = () => {
        const showForm = !this.state.showForm;
        this.setState({ showForm })
    }

    handleToggleLike = (id) => {
        const posts = [...this.state.posts];
        const post = posts.find((post) => post.id === id);
        post.like = !post.like;

        if (post.like === true)
            this.setState({ CountLike: this.state.CountLike + 1 });
        else
            this.setState({ CountLike: this.state.CountLike - 1 });

        if (post.dislike === true) {
            this.setState({
                CountDislike: this.state.CountDislike - 1,
            });
            post.dislike = !post.dislike;
        }

        this.setState({ posts });
    };

    handleToggleDislike = (id) => {
        const posts = [...this.state.posts];
        const post = posts.find((post) => post.id === id);
        post.dislike = !post.dislike;

        if (post.dislike === true)
            this.setState({
                CountDislike: this.state.CountDislike + 1,
            });
        else
            this.setState({
                CountDislike: this.state.CountDislike - 1,
            });

        if (post.like === true) {
            this.setState({ CountLike: this.state.CountLike - 1 });
            post.like = !post.like;
        }

        this.setState({ posts });
    };

    render() {
        return (
            <>
                <Navbar count={this.state.CountLike} count1={this.state.CountDislike} />

                <button
                    style={{ marginLeft: '1rem' }}
                    className='btn btn-primary m-3 '
                    onClick={this.showForm}>
                    Add New Post
                </button>

                {this.state.showForm === true ? (
                    <Form handleAdd={this.handleAdd} />
                ) : null}

                {
                    this.state.posts.map(post => {
                        return (
                            <React.Fragment key={post.id}>
                                <Post
                                    post={post}
                                    id={post.id}
                                    name={post.name}
                                    date={post.date}
                                    like={post.like}
                                    dislike={post.dislike}
                                    content={post.content}
                                    handleRemove={this.handleRemove}
                                    handleToggleLike={this.handleToggleLike}
                                    handleToggleDislike={this.handleToggleDislike}
                                />
                            </React.Fragment>
                        )
                    })
                }
            </>
        );
    }
}

export default Posts;