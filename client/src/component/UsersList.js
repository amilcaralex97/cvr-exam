import "bootstrap/js/src/collapse.js";
import React, { Component } from "react";
import axios from "axios";

export default class UsersList extends Component {
  state = {
    users: [],
    username: "",
    password: "",
    isAdmin: false,
  };

  async componentDidMount() {
    this.getUsers();
  }

  getUsers = async (id) => {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({
      users: res.data,
    });
  };

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/users", {
      username: this.state.username,
      password: this.state.password,
      isAdmin: this.state.isAdmin,
    });
    this.setState({
      username: "",
    });
    this.getUsers();
  };

  deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/api/users/${id}`);
    this.getUsers();
  };

  render() {
    return (
      <div className="container">
        <div className="row top-buffer">
          <div className="col-12 offset-3">
            <h1>UsersList</h1>
          </div>
        </div>
        <div className="row top-buffer">
          <div className="col-12">
            <div>
              {this.state.users.map((user) => (
                <div
                  key={user._id}
                  className="card container"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    {user.isAdmin ? (
                      <h5 className="card-title">Admin</h5>
                    ) : (
                      <h5 className="card-title">Common User</h5>
                    )}
                    <h6 className="card-subtitle mb-2 text-muted">
                      {user.username}
                    </h6>
                    <div className="row top-buffer">
                      <div className="col-sm-6 col-6">
                        <button
                          className="btn btn-danger"
                          onClick={() => this.deleteUser(user._id)}
                        >
                          Delete
                        </button>
                      </div>
                      <div className="col-sm-6 col-6">
                        <button className="btn btn-primary ">Update</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 sol-md-">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
