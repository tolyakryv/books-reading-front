import s from "../Modal/Modal.module.css";

const Modal = ({ children }) => {
  return (
    <div className={s.Overlay}>
      <div className={s.Modal}>{children}</div>
    </div>
  );
};

export default Modal;
