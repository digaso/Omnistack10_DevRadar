import React from 'react';
import './style.css';
function DevItem({ dev }) {
  console.log(dev)
  return (
    < li className="DevItem" >
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="userinfo">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>
        {dev.bio}
      </p>
      <a href={`https://github.com/${dev.github_username}`}>Aceder ao GitHub deste Anormal</a>
    </li >
  )

}
export default DevItem;
