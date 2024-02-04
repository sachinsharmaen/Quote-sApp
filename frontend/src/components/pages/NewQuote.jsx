import React, { useRef } from 'react'
import './NewQuote.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewQuote = () => {
    const authorRef = useRef();
    const quoteRef = useRef();
    const photoRef = useRef();
    const navigate = useNavigate();

    async function submitHandler(e) {
        e.preventDefault();
        console.log(authorRef.current)
        const author = authorRef.current.value;
        const text = quoteRef.current.value;
        const photo = photoRef.current.value;
        console.log(photo)
        
        await axios.post('http://localhost:5000/quotes', {author, text, photo});
        navigate('/');
        
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-control'>
                    <label htmlFor="author">Author Name:</label> <br />
                    <input ref={authorRef} id='author' type="text" placeholder='Enter Author Name' />
                </div>

                <div className='form-control'>
                    <label htmlFor="text">Quote</label> <br />
                    <textarea ref={quoteRef} id="text" cols="30" placeholder='Write your quote here...' rows="5"></textarea>
                </div>

                <div>
                    <label htmlFor='profilepic'>Photo</label>
                    <input ref={photoRef} id='profilepic' type="text" placeholder='paste photo link' />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewQuote