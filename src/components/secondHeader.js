import React from 'react';

function secondHeader(props) {
  return (
  <div className='sec_header d-flex justify-content-between'>
      <div className='person_image d-flex'>
      <img className='rounded-circle' src= {props.value} height="100px" width="100px" alt=''/> 
      <div className='person_info mx-4'>
        <h4>HOANG NGUYEN <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span></h4>
        <p>Student <span><a href='#'>Learn more</a></span></p>
        <div className='d-flex align-items-center'>
        <svg version="1.2" style={{fill:'#9ba3af'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" width="12" height="16"><path className="s0" d="m6 11.3c-0.3 0-0.5-0.1-0.6-0.4l-1-2.3l-2.5 0.7c-0.3 0.1-0.6 0-0.7-0.2c-0.2-0.2-0.2-0.5-0.1-0.8l1.3-2.1l-2.1-1.4c-0.3-0.2-0.4-0.4-0.3-0.7c0-0.3 0.3-0.5 0.5-0.5l2.6-0.4l-0.2-2.5c0-0.2 0.2-0.5 0.4-0.6c0.3-0.2 0.5-0.1 0.8 0.1l1.9 1.7l1.9-1.7c0.3-0.2 0.5-0.3 0.8-0.1c0.2 0.1 0.4 0.4 0.4 0.6l-0.2 2.5l2.6 0.4c0.2 0 0.5 0.2 0.5 0.5c0.1 0.3 0 0.5-0.3 0.7l-2.1 1.4l1.3 2.1c0.1 0.3 0.1 0.6-0.1 0.8c-0.1 0.2-0.4 0.3-0.7 0.2l-2.5-0.7l-1 2.3c-0.1 0.3-0.3 0.4-0.6 0.4zm-1.2-4.2c0.3 0 0.5 0.2 0.6 0.4l0.6 1.4l0.6-1.4c0.1-0.3 0.5-0.5 0.8-0.4l1.4 0.4l-0.7-1.2c-0.2-0.3-0.1-0.7 0.2-0.9l1.2-0.8l-1.4-0.2c-0.4 0-0.6-0.3-0.6-0.7l0.1-1.4l-1.2 1c-0.2 0.2-0.6 0.2-0.8 0l-1.2-1l0.1 1.4c0 0.4-0.2 0.7-0.6 0.7l-1.4 0.2l1.2 0.8c0.3 0.2 0.4 0.6 0.2 0.9l-0.7 1.2l1.4-0.4q0.1 0 0.2 0zm3.1 8.9q-0.2 0-0.4-0.1l-1.5-1.1l-1.4 1.1q-0.2 0.1-0.4 0.1c-0.6 0-1.5-0.5-1.5-1.3v-6.5c0-0.4 0.2-0.7 0.6-0.7c0.4 0 0.7 0.3 0.7 0.7v6.3q0 0.1 0.1 0.1l1.5-1.1c0.2-0.2 0.5-0.2 0.8-0.1l1.6 1.2q0 0 0 0v-6.4c0-0.4 0.3-0.7 0.7-0.7c0.3 0 0.6 0.3 0.6 0.7v6.5c0 0.7-0.8 1.3-1.4 1.3z" /> </svg><p style={{margin:'0px',marginLeft:'15px'}}>8782 exp</p>
        </div>
      </div>        
      </div>
      <div className='edit_logout'>
            <a className='edit' href='#'>
            <svg version="1.2" style={{fill:'#9ba3af'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" width="18" height="19"><path className="s0" d="m1.3 18.5c-0.4 0-0.8-0.2-1.1-0.6c-0.2-0.4-0.3-0.8-0.1-1.2c0.2-0.5 2.4-4.9 2.8-5.8l0.1-0.1l9.6-9.7c0.8-0.8 2.3-0.8 3.2 0.1l1.5 1.5c0.9 0.9 0.9 2.2 0 3l-9.6 9.8h-0.2c0 0-5.2 2.6-5.7 2.9q-0.2 0.1-0.5 0.1zm2.7-6.6c-0.5 1.1-1.2 2.5-1.8 3.6c-0.3 0.6 0.2 1.1 0.8 0.8c1.5-0.7 3.2-1.6 3.6-1.8l9.7-9.8c0.3-0.3 0.3-0.6 0-0.9l-1.5-1.6c-0.3-0.3-0.8-0.3-1.1 0zm10.3-3.9q-0.3 0-0.5-0.2l-3.1-3.1c-0.3-0.2-0.3-0.7 0-1c0.3-0.3 0.8-0.3 1.1 0l3 3c0.3 0.3 0.3 0.8 0 1.1q-0.2 0.2-0.5 0.2z" /></svg>
            </a>
            <a className='logout' href='#'>
            <svg version="1.2" style={{fill:'#9ba3af'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" width="19" height="19"><path className="s0" d="m5.2 0.5h8.6c2.6 0 4.7 2.1 4.7 4.7v8.6c0 2.6-2.1 4.7-4.7 4.7h-8.6c-2.6 0-4.7-2.1-4.7-4.7v-2.8c0.4 0 6.7 0 6.8 0c0.4 0 0.7 0.4 0.7 0.8v1.4c0 0.2 0.4 0.3 0.6 0l3.2-3.2c0.2-0.2 0.2-0.7-0.1-1l-3-3.2c-0.3-0.3-0.7-0.2-0.7 0v1.4c0 0.5-0.3 0.8-0.7 0.8c-0.1 0-6.4-0.1-6.8-0.1v-2.7c0-2.6 2.1-4.7 4.7-4.7zm8.7 1.4c1.7 0 3.2 1.5 3.2 3.2v8.8c0 1.8-1.5 3.2-3.2 3.2h-8.8c-1.8 0-3.2-1.4-3.2-3.2v-1.5h4.7v0.7c0 1 0.6 1.7 1.6 1.7c0.6 0 1.2-0.3 1.5-0.7l3-3c0.4-0.5 0.6-1 0.6-1.6c0-0.5-0.2-1.1-0.6-1.5l-2.9-3.1c-0.4-0.4-1-0.6-1.6-0.6c-1 0-1.7 0.7-1.7 1.7v0.5h-4.6v-1.4c0-1.7 1.4-3.2 3.2-3.2z" /></svg>
            </a>
      </div>
  </div>
  );
}

export default secondHeader;
