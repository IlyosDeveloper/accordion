import { useState } from "react";

function Accordion({ title, text }) {
  const [show, setShow] = useState(false);

  return (
    <div className='accordion'>
      <div className='header'>
        <h2 className='title'>{title}</h2>
        <div>
        <button onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>
        </div>
      </div>
      {show && <p className="text">{text}</p>}
    </div>
  );
}

export default Accordion;