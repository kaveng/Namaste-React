import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("child constructor");
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    console.log("Child component did mount");
    const data = await fetch("https://api.github.com/users/kaveng");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: kavit@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
