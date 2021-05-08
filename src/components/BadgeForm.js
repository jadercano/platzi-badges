import React from "react";

class BadgeForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              onChange={this.props.onChange}
              type="email"
              className="form-control"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title:</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter:</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button className="btn btn-primary">Save</button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
