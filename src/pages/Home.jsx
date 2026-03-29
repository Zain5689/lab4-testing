import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/users").then((res) => {
      res
        .json()
        .then((data) => {
          setUsers(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Customer Portal</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
      <Link to="/about">Go to About</Link>
    </div>
  );
};
export default Home;
