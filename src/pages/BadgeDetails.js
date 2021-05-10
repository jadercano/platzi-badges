import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeDetails.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function BadgeDetails(props) {
  const badge = props.badge;

  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img
                src={header}
                className="BadgeDetails__hero-image img-fluid"
                alt="Logo"
              />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
              email={badge.email}
            />
          </div>
          <div className="col-6">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/edit/${badge.id}`}>
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                  name={`${badge.firstName} ${badge.lastName}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;
