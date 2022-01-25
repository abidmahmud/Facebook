import React, { useState } from 'react';

function Form(props) {
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
            <div className='card' style={{ marginLeft: '1rem', marginBottom: '1rem', width: '25rem' }}>
                <div className='card-body'>
                    <input
                        type="text"
                        placeholder="Title"
                        name='name'
                        className="form-control"
                        value={post.name || ""}
                        onChange={(event) => handleChange(event)}
                    />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name='content'
                            placeholder="Content"
                            value={post.content || ""}
                            onChange={(event) => handleChange(event)}
                        />

                        <input
                            type="date"
                            placeholder="Content"
                            name='date'
                            className="form-control"
                            value={post.date || ""}
                            onChange={(event) => handleChange(event)}
                        />
                        <input className='btn btn-primary' type="submit" />
                    </form>
                </div>

            </div >


        </>
    );

};

// const handleChange = (event) => {
//     const fieldName = event.target.name;
//     const fieldValue = event.target.value;

//     setInputs((values) => ({...values, [fieldName]: fieldValue }))
// };



export default Form;