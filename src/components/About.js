import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is Namaste React Web Series</h2>
      {/* <User name={"Biswajit (function)"} /> */}
      <UserClass name={"Biswajit (class)"} />
    </div>
  );
};
export default About;
