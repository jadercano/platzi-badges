import React from "react";

class BadgeForm extends React.Component {
  state = {
    jobTitle: "Software Engineer",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {};

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="formcontrol"
              name="firstName"
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="formcontrol"
              name="lastName"
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              onChange={this.handleChange}
              type="email"
              className="formcontrol"
              name="email"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title:</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="formcontrol"
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter:</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="formcontrol"
              name="twitter"
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
