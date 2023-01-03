import React from 'react';
import './ImageLinkForms.css';

const ImageLinkForm = ({onInputChange, onBtnSubmit}) => {
    return(
        <section id='input_form'>
            <p>Enter an image link, We'll detect the faces for you!</p>
            <div className='center'>
                <div id='input_box' style={{display: 'flex', justifyContent: 'center'}} className='shadow-5'>
                    <input id='analyse_text' type='text' onChange={onInputChange}></input>
                    <button id='analyse_button' onClick={onBtnSubmit}>ANALYSE</button>
                </div>
            </div>
        </section>
    );
}

export default ImageLinkForm;