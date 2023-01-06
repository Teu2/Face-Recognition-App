import React from 'react';
import './ImageLinkForms.css';
import 'aos/dist/aos.css'

const ImageLinkForm = ({onInputChange, onBtnSubmit}) => {
    return(
        <section id='input_form' data-aos="fade-up">
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