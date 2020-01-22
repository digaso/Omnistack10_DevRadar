import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      }, (err) => {
        console.log(err);
      }, {
      timeout: 3000,
    }
    )
  }, [])
  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });
    setGithubUsername('');
    setTechs('');
  }
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  return (

    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do github</label>
        <input
          name="github_username"
          id="github_username"
          required
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)} />
      </div>

      <div className="input-group" >
        <div className="input-block">
          <label htmlFor="Latitude">Latitude</label>
          <input

            name="Latitude"
            id="Latitude"
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            required />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)} />
        </div>
      </div>

      <button type="submit">Submeter</button>
    </form>
  )

}
export default DevForm;
