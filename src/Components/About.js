import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component did Mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>Kavit Learning React</h2>

        <UserClass name={"Kavit Agarwal (class)"} location={"India (Class)"} />
        {/* <UserClass name={"Kavit  (class)"} location={"India (Class)"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>Kavit Learning React</h2>
//       {/* <User name={"Kavit Agarwal (function)"} /> */}
//       <UserClass name={"Kavit Agarwal (class)"} location={"India (Class)"} />
//     </div>
//   );
// };

export default About;
