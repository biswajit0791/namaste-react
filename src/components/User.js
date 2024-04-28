import {useEffect} from 'react';

const User = ({name}) => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Namaste React");
        }, 1000);
        return () => {
            clearInterval(timer);
            console.log("useEffect Return");
        };
    }, []);
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Bhubaneswar</h3>
      <h4>Contact: @biswajit0791</h4>
    </div>
  );
};
export default User;
