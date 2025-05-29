import "./ProfileRecommendations.css";
import Link from 'next/link';
// import { useProfile } from "./useProfileRecommendations";

const ProfileRecommendations = () => {
  return (
    <div className="MainContent">
      <h1>Witaj w aplikacji!</h1>
      <ul>
        {/* {posts.map((post) => (
          <li key={post.id}>
            {post.message}
            <br />
            <small>{new Date(post.createdAt).toLocaleString()}</small>
          </li>
        ))} */}
      </ul>
      {/* <button onClick={() => addPost("Nowy post!")}>Dodaj post</button> */}
    </div>
  );
};

export default ProfileRecommendations;
