import React from "react";
import axios from "axios";
import Profil from "./pages/Profil.js";
import Create from "../src/pages/Create.js";
import Feed from "../src/pages/Feed.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: [],
        show: "Home",
        change: false,
        post: [],
    };

    this.changeView = this.changeView.bind(this)
  }

  componentDidMount() {
      
    let getPost = axios.get("http://localhost:3000/api/post").then((res) => {
        this.setState({ post: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    let getUser = axios.get("http://localhost:3000/api/user").then((res) => {
      this.setState({ user: res.user });
    })
    .catch((err) => console.log(err));
  }

//   addOnePost(Id, title, desc) {
//     axios
//       .post(
//         "api/post",
//         { ID_post: Id },
//         { Title: title },
//         { description: desc }
//       )
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => console.log(err));
//   }

//   createOneUser(em, ps, pass) {
//     axios
//       .post("api/user", { email: em }, { pseudo: ps }, { password: pass })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => console.log(err));
//   }

  changeView(option, p) {
    this.setState({
      show: option,
    });
    this.setState({ p: p });
  }

  handleChange() {
    this.setState({ change: !this.state.change });
  }



  renderView() {
    const { show } = this.state;
    if (show === "Home") {
      return (
        <Feed
        all={this.state.post}
          handleClick={(p) => this.changeView("anychange", p)}
        />
      );
    } else if (show === "Create") {
        console.log("hey")
      return (
        <Create add={this.handleChange} />
      );
    } else if (show === "Profil") {
      return <Profil Change={this.handleChange} login={this.handelLogin} />;
    }
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo" onClick={() => this.changeView("Home")}>
            Home
          </span>
          <span
            className={
              this.state.show === "Create" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("Create")}
          >
            Create a Post
          </span>
          <span
            className={
              this.state.show === "Profil" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("Profil")}
          >
            Profil
          </span>
          <span
            className={
              this.state.show === "signin" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("signin")}
          >
            Sign Up
          </span>
        </div>

        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}
