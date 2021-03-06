import React, { useContext, useState, useEffect } from "react";
import { ModalContext } from "./../../Context/Modal.Context";

const Modal = () => {
  const { data = [] } = useContext(ModalContext);
  const [state, setState] = useState({});
  const { data: dataV = [] } = data;



  const Item = () => {
    return (
      <div className="jumbotron">
        {dataV.map((item, i) => {
          console.log(item);
          if (item.type === "button") {
            return (
              <button
                key={i}
                type="button"
                className="btn btn-primary"
                onClick={(e) =>{console.log('asd')}}
              >
                {item.label}
              </button>
            );
          }
          return (
            <div key={i} className="form-group">
              <label htmlFor={item.label}>{item.label}</label>
              <input
                type={item.type}
                value={item.value}
                onChange={()=>{}}
                className="form-control"
                id={item.label}
                aria-describedby="emailHelp"
                placeholder={item.placeholder}
              />
            </div>
          );
        })}
      </div>
    );
  };

  const Form = () => {
    return (
      <>
        <form>
          <Item />
        </form>
      </>
    );
  };
  return (
    <>
      <div
        className="modal fade"
        id="ModalGlobal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="ModalGlobalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalGlobalTitle">
                {data.typeModal}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Form />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
