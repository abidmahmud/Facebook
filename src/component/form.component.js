import React, { useState } from 'react';

const Form = (props) => {
    const [post, setPost] = useState({});

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setPost((values) => ({ ...values, [fieldName]: fieldValue }));
    }

    const handleSubmit = (event) => {
        props.handleAdd(post);
        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={post.name || ""}
                    onChange={(event) => handleChange(event)}
                />

                <input
                    type="date"
                    placeholder="Content"
                    value={post.date}
                    onChange={(event) => handleChange(event)}
                />
                <input type="submit" />
            </form>
        </>
    );

};

// const handleChange = (event) => {
//     const fieldName = event.target.name;
//     const fieldValue = event.target.value;

//     setInputs((values) => ({ ...values, [fieldName]: fieldValue }))
// };



export default Form;