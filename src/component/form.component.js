import React, { useState } from 'react';

const Form = ({ handleSave }) => {
    const [inputs, setInputs] = useState({});
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        const obj = {
            title: title,
            content: content,
        };
        handleSave(obj);
        console.log(obj);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                        console.log(event);
                    }}
                />

                <input
                    type="text"
                    placeholder="Content"
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
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