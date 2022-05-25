import { useState, useEffect } from "react";
import Link from "../components/Link";
import List from "../components/List";
import "./Profile.css";

function Profile({ userName }) {

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);

  const items = [
    {
      field : 'Profile',
      value : <Link url={profile.html_url} title={profile.html_url} />
    },
    {
      field : 'Repositories',
      value : <Link url={profile.repos_url} title={profile.repos_url} />
    },
    {field : 'Name', value: profile.name},
    {field : 'Location', value:profile.location},
    {field : 'Bio', value: profile.bio},
  ];

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://api.github.com/users/${userName}`);
      const result = await data.json();

      if (result) {
        setProfile(result);
        setLoading(false);
      }
    };
    fetchData();
  }, [userName]);

  return (
    <div className="Profile-container">
      <h2>About Me</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <img
            className="Profile-avatar"
            alt={profile.name}
            src={profile.avatar_url}
          />
          <List items={items} />
        </div>
      )}
    </div>
  );
}

export default Profile;
