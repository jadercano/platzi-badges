import React from "react";
import Modal from "./Modal";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Are you sure?</h1>
        <p>{`You are about to delete ${props.name} badge.`}</p>
        <div>
          <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
            Delete
          </button>
          <button onClick={props.onClose} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
