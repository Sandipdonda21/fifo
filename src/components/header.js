import React from 'react';

function header() {
  return (
    <div className='main_header d-flex justify-content-between py-4 px-4'>
        <div className='d-flex'> 
            <div className='header_logo'>
            <svg version="1.2" style={{fill:'#95a5a6'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="19" height="19"><path class="s0" d="m18.3 18.5h-17.7l-0.1-0.7c0-0.1-0.3-4 1.6-6.1q1.2-1.4 3.2-1.4h0.3l0.2 0.3c1 1.2 2 2 3.7 2c1.6 0 2.5-0.8 3.5-2l0.2-0.3h0.4q2.3 0 3.6 1.5c1.8 2.2 1.2 5.9 1.2 6.1zm-16.4-1.4h15.1c0.1-1.1 0.1-3.2-1-4.4q-0.7-0.9-2.1-1c-1 1.2-2.3 2.3-4.5 2.3c-2.2 0-3.5-1.1-4.5-2.3q-1.1 0.1-1.8 0.9c-1.1 1.2-1.2 3.3-1.2 4.5zm7.7-6.1c-2.6 0-4.4-4.1-4.4-6.3c0-2.3 2-4.2 4.4-4.2c2.5 0 4.5 1.9 4.5 4.2c0 2.2-1.8 6.3-4.5 6.3zm0-9.2c-1.7 0-3.1 1.3-3.1 2.8c0 1.8 1.6 5.1 3.1 5.1c1.5 0 3.1-3.3 3.1-5.1c0-1.5-1.4-2.8-3.1-2.8z" /></svg>
            </div>
            <div className='header_logo'>
            <svg version="1.2" style={{fill:'#95a5a6'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="19" height="19"><path class="s0" d="m6.2 18.1q-0.3 0-0.5-0.2c-0.3-0.2-0.3-0.6-0.1-0.9l1.5-2.6c-3.8-0.8-6.6-3.5-6.6-6.6c0-3.8 4-6.9 9-6.9c5 0 9 3.1 9 6.9c0 2.8-2.2 5.3-5.6 6.4l-6.3 3.8q-0.2 0.1-0.4 0.1zm3.3-15.7c-4.1 0-7.5 2.4-7.5 5.4c0 2.6 2.8 4.9 6.4 5.3c0.3 0.1 0.5 0.2 0.6 0.4c0.1 0.3 0.1 0.5 0 0.8l-0.5 0.8l3.7-2.2q0-0.1 0.1-0.1c2.9-0.9 4.7-2.8 4.7-5c0-3-3.4-5.4-7.5-5.4zm4.5 5.2h-7.5c-0.5 0-0.8-0.3-0.8-0.7c0-0.4 0.3-0.8 0.8-0.8h7.5c0.4 0 0.7 0.4 0.7 0.8c0 0.4-0.3 0.7-0.7 0.7zm-2.3 2.3h-5.2c-0.5 0-0.8-0.3-0.8-0.8c0-0.4 0.3-0.7 0.8-0.7h5.2c0.4 0 0.8 0.3 0.8 0.7c0 0.5-0.4 0.8-0.8 0.8z" /></svg>
            </div>
            <div className='header_logo position-relative'>
            <svg version="1.2"style={{fill:'#95a5a6'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="19" height="19"><path class="s0" d="m6.8 18.5q-0.8 0-1.2-0.4c-0.2-0.2-0.3-0.5-0.2-0.7c0-0.1 0.5-3.4-3.5-7.4c-1.8-1.8-2.1-5.6 0.2-7.9c1-1 2.4-1.6 4-1.6c1.5 0 3 0.6 4 1.5c3.3 3.3 7 3.4 7.4 3.4c0.2 0 0.5 0.1 0.6 0.2c1.5 1.5-1.5 6.9-3.6 9c-2 2-5.7 3.9-7.7 3.9zm-0.7-16.5c-1.2 0-2.2 0.4-2.9 1.1c-1.7 1.7-1.5 4.6-0.2 5.9c3.5 3.5 3.9 6.7 3.9 8c1.4 0 4.7-1.6 6.5-3.4c2.1-2.1 3.7-5.6 3.7-6.8c-1.4-0.1-5-0.6-8-3.7c-0.7-0.7-1.8-1.1-3-1.1zm9.9 10.6q0.3 0.5 0.3 1.1c0 0.7-0.3 1.4-0.8 1.8c-0.8 0.8-2 1-3 0.5z" />
            </svg>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2
                <span class="visually-hidden">unread messages</span>
            </span>
            </div>
        </div>
        <div>
        <svg version="1.2" style={{fill:'#27ad5f'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 44" width="36" height="44"><path class="s0" d="m36 0v44h-12l-6-17h9v4h-3l3 9h5v-36h-5v20h-14v20h-13v-44h12l6 17h-9v-4h3l-3-9h-5v37h5v-21h14v-20z" /></svg>
        </div>
        <div className='d-flex align-items-center'>
            <input type='text' placeholder='type for search'/>
            <svg version="1.2"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path class="s0" d="m0 6.4c0-3.5 2.8-6.4 6.3-6.4c3.5 0 6.3 2.8 6.4 6.3c0 3.5-2.8 6.4-6.3 6.4c-3.5 0.1-6.4-2.8-6.4-6.3zm6.3-4.9c2.7 0 4.9 2.1 4.9 4.9c0 2.7-2.1 4.9-4.8 5c-2.8 0-5-2.2-5-4.9c0-2.8 2.2-5 4.9-5zm6.7 9.9q0.2 0.1 0.4 0.3l4.2 4.2c0.5 0.5 0.5 1.3 0.1 1.7c-0.5 0.5-1.3 0.5-1.8 0l-4.2-4.2q-0.2-0.1-0.3-0.3q1-0.7 1.6-1.7zm-10.4-5.7c0-1.7 1.3-3 2.9-3c0.2 0 0.4 0.1 0.4 0.4c0 0.2-0.2 0.3-0.4 0.3c-1.2 0-2.2 1-2.2 2.3c0 0.2-0.1 0.4-0.3 0.4c-0.2 0-0.4-0.2-0.4-0.4z" /></svg>
        </div>
    
    </div>
    );
}

export default header;
