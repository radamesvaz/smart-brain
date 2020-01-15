import React from 'react';
import './imagelinkform.css';


const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
    return(
        <div>
        <p className='f3'>
            {'This App will detect a face when you give it a picture. Go ahead and try!'}
        </p>
            <div className='center'>
                <div className='form pa4 br3 shadow-3'>
                 <input className='f4 pa2 w-70 center' type='text' placeholder='Insert image URL here' onChange={onInputChange}/>
                 <button 
                    onClick={onButtonSubmit}
                    className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue'>Detect</button>
                 </div>
            </div>
        </div>
    );
}

export default ImageLinkForm