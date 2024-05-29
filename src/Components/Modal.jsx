import { forwardRef } from "react";

const Modal = forwardRef(function Modal({ obj, onclose }, ref) {
  function myfunc(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  return (
    <dialog ref={ref} onClose={onclose}>
      <div className="dialog-box">
        <div className="img-box">
          <img src={obj.sprites.other.dream_world.front_default} alt="" />
        </div>
        <div className="content-box">
          <h1>{myfunc(obj.name)}</h1>
          <ul>
            <li key={0}>Height : {obj.height}</li>
            <li key={1}>Weight : {obj.weight}</li>
            <li key={2}>Base Experience : {obj.base_experience}</li>
            <li key={3}>Type : {myfunc(obj.types[0].type.name)}</li>
          </ul>
        </div>
      </div>
      <button onClick={onclose}>Close</button>
    </dialog>
  );
});
export default Modal;
