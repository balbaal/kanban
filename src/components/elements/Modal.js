import React from "react";
import PropTypes from "prop-types";

const Modal = ({ children, title, idTarget, onClick }) => {
  return (
    <div
      class="modal fade"
      id={idTarget}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">{children}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button onClick={onClick} type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  title: PropTypes.string,
  idTarget: PropTypes.string,
};

export default Modal;
