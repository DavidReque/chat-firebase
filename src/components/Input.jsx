import React from 'react';

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <img src="src/assets/img/attach.png" alt="" />
        <input type="file" style={{display: 'none'}} id='file'/>
        <label htmlFor="file">
          <img src="src/assets/img/img.png" alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
