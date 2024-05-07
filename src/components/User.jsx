import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";

export async function loader({ params: { id } }) {

  // fetch the User with the given id
  const { data } = await axios.get(`https://6633a294f7d50bbd9b4a24d3.mockapi.io/Todo/${id}`);
    
  // return the User object
  return data;
}

const User = () => {
  
  // get the User object from the loader
  const user = useLoaderData();

  return (
      <div>
        <h1>{user.username}</h1>
        <p>email: {user.email}</p>
        <p>Country: {user.country}</p>
    </div>
  )
}

export default User;