import React from 'react';

function navbar() {
  return (
  <div className='navbar'>
      <ul>
          <a href="#"><li className='active_nav'>KNOWLEDGE</li></a>
          <a href="#"><li>COURSE</li></a>
          <a href="#"><li>EXAM</li></a>
          <a href="#"><li>Q&A</li></a>
          <a href="#"><li>NEWS</li></a>
          <a href="#"><li>ACTIVITY</li></a>
          <a href="#"><li>FRIEND</li></a>
      </ul>
  </div>
  );
}

export default navbar;
