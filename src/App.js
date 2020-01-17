import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude"/>
            </div>
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude"/>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/745073?v=4" alt="Fabricio Oliveira"/>
              <div className="user-info">
                <strong>Fabricio Oliveira</strong>
                <span>C# ReactJS</span>
              </div>
            </header>
            <p>Bio do meu usuário orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices aliquam odio, a condimentum elit iaculis non.</p>
            <a href="https://github.com/frolivei">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/745073?v=4" alt="Fabricio Oliveira"/>
              <div className="user-info">
                <strong>Fabricio Oliveira</strong>
                <span>C# ReactJS</span>
                <p>Bio do meu usuário</p>
              </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/745073?v=4" alt="Fabricio Oliveira"/>
              <div className="user-info">
                <strong>Fabricio Oliveira</strong>
                <span>C# ReactJS</span>
                <p>Bio do meu usuário</p>
              </div>
            </header>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;