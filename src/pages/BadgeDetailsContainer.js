import React from "react";

import PageLoading from "../components/PageLoading";
import api from "../api";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  handleDeleteBadge = async (e) => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      await api.badges.remove(this.props.match.params.badgeId);

      this.setState({
        loading: false,
      });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  handleCloseModal = async (e) => {
    this.setState({ modalIsOpen: false });
  };

  handleOpenModal = async (e) => {
    this.setState({ modalIsOpen: true });
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <BadgeDetails
          onCloseModal={this.handleCloseModal}
          onOpenModal={this.handleOpenModal}
          onDeleteBadge={this.handleDeleteBadge}
          modalIsOpen={this.state.modalIsOpen}
          badge={this.state.data}
        />
      </React.Fragment>
    );
  }
}

export default BadgeDetailsContainer;
