import React from 'react';

const Display =(props)=>{
    const{mainMenu, musicSubmenu, gameSubmenu}=props;
    return(
        <div className="display-screen" id="display-screen">
            {mainMenu ?
            <div className="mainMenu">
                {/*onClick of menu button*/}
              <span className="heading">iPod</span>
              <ul className="menu-list" id="menu-list">
                <li id="cover" className = "" >Cover Flow</li>
                <li id="song" className = "" >Music</li>
                <li id="games" className = "" >Games</li>
                <li id="setting" className = "" >Settings</li>
              </ul>
            </div>
            : null
            }

            {/*if musicSubmenu=true then show musicSubmenu which contains allsong,album,artist,favplay*/}
            {
              !mainMenu &&  !gameSubmenu && musicSubmenu ?
              <div className="mainMenu">
                <span className="heading">Music</span>
                <ul className="menu-list" id="menu-list">
                  <li id="allsong" className = "" >All Song</li>
                  <li id="album" className = "" >Album</li>
                  <li id="artist" className = "" >Artist</li>
                  <li id="favplay" className= "">Favourite Playlist</li>
                </ul>
              </div>
              :null
            }

            { /*gameSubmenu=true then show gameSubmenu which contains ludo,snake,suduko,scrabble */}
            {
              !mainMenu && !musicSubmenu && gameSubmenu ?
              <div className="mainMenu">
                <span className="heading">Games</span>
                <ul className="menu-list" id="menu-list">
                  <li id="ludo" className = "" >Ludo</li>
                </ul>
              </div>
              :null
            }
        </div>
    );
}
export default Display;