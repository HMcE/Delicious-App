import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';




function Search() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('./searched/' + input)
    };



    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />

            </div>
        </FormStyle>
    )
}


const FormStyle = styled.form`
    margin: 0  10rem;
   
    div{
        width: 100%;
        position: relative;
    }
    input{
        border: none;
        background-color: black;
        font-size: 1.5rem;
        color: white;
        padding: 0.5rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%
    }
    svg{
        font-size: 1.5rem;
        margin-left: 1rem;
        position: absolute;
        top: 25%; 
        left: 0%;
        tranform: translate(100%, -50%);
        color: white;
    }
    `;

export default Search