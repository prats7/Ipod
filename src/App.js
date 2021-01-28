import React from 'react';
import Wheel from './js/wheel';
import Display from './js/display';
import ZingTouch from 'zingtouch';

class App extends React.Component {

  constructor() {
    super();
    //Adding and Intializing states
    this.state = {
      mainMenu: false,
      cover: false,
      song: false,
      games: false,
      setting: false,
      musicSubmenu: false,
      allsong: false,
      album: false,
      artist: false,
      gameSubmenu: false,
      ludo: false
    }
  }


  //Event Listener on handle rotate
  OnHandleRotate = (props) => {
    const containerElement = document.getElementById('outer-circle');
    const activeRegion = new ZingTouch.Region(containerElement);
    let angle = 0;
    activeRegion.bind(containerElement, 'rotate', (e) => {
      angle = angle + e.detail.distanceFromLast;
      if (!this.state.mainMenu && !this.state.musicSubmenu && !this.state.gameSubmenu) {
        return;
      }


      //Cover flow
      if (((angle <= 30 && angle >= 0) || (angle <= 0 && angle > -30)) && (this.state.mainMenu && !this.state.musicSubmenu && !this.state.gameSubmenu)) {
        console.log('cover selected');
        let cover = document.getElementById('cover');
        let song = document.getElementById('song');
        let games = document.getElementById('games');
        let setting = document.getElementById('setting');

        cover.classList = 'select';
        song.classList = 'unselect';
        games.classList = 'unselect';
        setting.classList = 'unselect';

        //Set state function
        this.setState({
          coverFlow: true,
          song: false,
          games: false,
          setting: false
        })
      }

      //Select song according to angle
      if (((angle <= 60 && angle >= 30) || (angle <= -30 && angle > -60)) && (this.state.mainMenu && !this.state.musicSubmenu && !this.state.gameSubmenu)) {
        let cover = document.getElementById('cover');
        let song = document.getElementById('song');
        let games = document.getElementById('games');
        let setting = document.getElementById('setting');

        cover.classList = 'unselect';
        song.classList = 'select';
        games.classList = 'unselect';
        setting.classList = 'unselect';

        //set State function
        this.setState({
          cover: false,
          song: true,
          games: false,
          setting: false
        })
      }

      //Select game according to angle
      if (((angle <= 90 && angle >= 60) || (angle <= -60 && angle > -90)) && (this.state.mainMenu && !this.state.musicSubmenu && !this.state.gameSubmenu)) {
        let cover = document.getElementById('cover');
        let song = document.getElementById('song');
        let games = document.getElementById('games');
        let setting = document.getElementById('setting');

        //select game
        cover.classList = 'unselect';
        song.classList = 'unselect';
        games.classList = 'select';
        setting.classList = 'unselect';

        //set state function
        this.setState({
          cover: false,
          song: false,
          games: true,
          setting: false
        })
      }

      //Selecting setting according to angle
      if (((angle <= 120 && angle >= 90) || (angle <= -90 && angle > -120)) && (this.state.mainMenu && !this.state.musicSubmenu && !this.state.gameSubmenu)) {
        let cover = document.getElementById('cover');
        let song = document.getElementById('song');
        let games = document.getElementById('games');
        let setting = document.getElementById('setting');

        cover.classList = 'unselect';
        song.classList = 'unselect';
        games.classList = 'unselect';
        setting.classList = 'select';

        //set state function
        this.setState({
          cover: false,
          song: false,
          games: false,
          setting: true
        })
      }

      //music submenu
      if (this.state.musicSubmenu) {
        if (((angle <= 30 && angle >= 0) || (angle <= 0 && angle >= -30))) {
          let allsong = document.getElementById('allsong');
          let album = document.getElementById('album');
          let artist = document.getElementById('artist');
          let favplay = document.getElementById('favplay');

          allsong.classList = 'select';
          album.classList = 'unselect';
          artist.classList = 'unselect';
          favplay.classList = 'unselect';

          //set state function
          this.setState({
            allsong: true,
            album: false,
            artist: false,
            favplay: false
          })
        }

        //Selecting album according to cursor
        if (((angle <= 60 && angle >= 30) || (angle <= -30 && angle >= -60))) {
          let allsong = document.getElementById('allsong');
          let album = document.getElementById('album');
          let artist = document.getElementById('artist');
          let favplay = document.getElementById('favplay');

          allsong.classList = 'unselect';
          album.classList = 'select';
          artist.classList = 'unselect';
          favplay.classList = 'unselect';

          //set state function
          this.setState({
            allsong: false,
            album: true,
            artist: false,
            favplay: false
          })
        }

        //selecting artist according to angle
        if (((angle <= 90 && angle >= 60) || (angle <= -60 && angle >= -90))) {
          let allsong = document.getElementById('allsong');
          let album = document.getElementById('album');
          let artist = document.getElementById('artist');
          let favplay = document.getElementById('favplay');

          allsong.classList = 'unselect';
          album.classList = 'unselect';
          artist.classList = 'select';
          favplay.classList = 'unselect';

          //set state function
          this.setState({
            allsong: false,
            album: false,
            artist: true,
            favplay: false
          })
        }

        //Selecting playlist according to angle
        if (((angle <= 120 && angle >= 90) || (angle <= -90 && angle >= -120))) {
          let allsong = document.getElementById('allsong');
          let album = document.getElementById('album');
          let artist = document.getElementById('artist');
          let favplay = document.getElementById('favplay');

          allsong.classList = 'unselect';
          album.classList = 'unselect';
          artist.classList = 'unselect';
          favplay.classList = 'select';

          //set state function
          this.setState({
            allsong: false,
            album: false,
            artist: false,
            favplay: true
          })
        }
      }


      //Selecting games according to angle
      if (this.state.gameSubmenu) {
        if (((angle <= 30 && angle >= 0) || (angle <= 0 && angle >= -30))) {
          let ludo = document.getElementById('ludo');

          ludo.classList = 'select';

          //set state function
          this.setState({
            ludo: true
          })
        }
      }
    });
  }

  //onHandleMenu button
  onHandleMenu = (props) => {
    const { mainMenu } = this.state;
    this.setState({
      mainMenu: !mainMenu,
      musicSubmenu: false,
      gameSubmenu: false
    })
    let display = document.getElementById('display-screen');
    display.style.backgroundImage = "url('https://www.macworld.co.uk/cmsdata/features/3793151/apple_logo_thumb1200_4-3.jpg')";
  }

  //hiding main menu on selection of other menu
  handlechangestate = () => {
    const { mainMenu } = this.state;
    this.setState({
      mainMenu: !mainMenu
    })
  }

  //handleMusic
  handleMusicSubmenuState = () => {
    this.setState({
      musicSubmenu: false
    })
  }

  //handleGame
  handleGameSubmenuState = () => {
    this.setState({
      gameSubmenu: false
    })
  }

  //handle small circle
  onHandleInnerCircle = (props) => {
    props.stopPropagation(onclick);

    const { mainMenu, cover, song, games, setting, musicSubmenu, allsong, album, artist, favplay, gameSubmenu, ludo } = this.state;
    let display = document.getElementById('display-screen');

    if (mainMenu) {
      //on select cover flow
      if (cover) {
        display.style.backgroundImage = "url('https://lh3.googleusercontent.com/proxy/c_4gYpc_p--9lnQcaesEfoIcVpW8MfodkzYiV5VHKo4bmr5udiPaHlq5aKAar-dzIp7KS-tCJnSERl9Fg2STujBkbG8uiiohYug8eYWoSSIkOyFfy32F0lseB32ZGRoYnZ50vgdFRV0Zw_mDVGfHzAV1j9Tfjd9GatSbk1I')";
        this.handlechangestate();
      }
      //on song select
      else if (song) {
        display.style.backgroundImage = "url('https://www.macworld.co.uk/cmsdata/features/3793151/apple_logo_thumb1200_4-3.jpg')";
        this.handlechangestate();
        this.setState({
          musicSubmenu: !musicSubmenu
        })
      }
      //on game select
      else if (games) {
        display.style.backgroundImage = "url('https://www.macworld.co.uk/cmsdata/features/3793151/apple_logo_thumb1200_4-3.jpg')";
        this.handlechangestate();
        this.setState({
          gameSubmenu: !gameSubmenu
        })
      }
      //on setting select
      else if (setting) {
        display.style.backgroundImage = "url('https://www.iconfinder.com/data/icons/apple-apps/100/Apple_Settings-512.png')";
        this.handlechangestate();
      }
    }

    if (musicSubmenu) {
      if (allsong) {
        display.style.backgroundImage = "url('https://e7.pngegg.com/pngimages/972/699/png-clipart-coldplay-vida-la-vida-music-play-icon-flowerpot-poster-icon-music-player-psd-other-text.png')";
        this.handleMusicSubmenuState();
      }
      if (album) {
        display.style.backgroundImage = "url('https://f4.bcbits.com/img/0016073391_10.jpg')";
        this.handleMusicSubmenuState();
      }
      if (artist) {
        display.style.backgroundImage = "url('https://assets.smoothradio.com/2017/26/ed-sheeran-1498662806-editorial-short-form-0.jpg')";
        this.handleMusicSubmenuState();
      }
      if (favplay) {
        display.style.backgroundImage = "url('https://i.pinimg.com/736x/e2/aa/84/e2aa845904d157c0a8f3582617e48009.jpg')";
        this.handleMusicSubmenuState();
      }
    }

    //on game select
    if (gameSubmenu) {
      if (ludo) {
        display.style.backgroundImage = "url('https://lh3.googleusercontent.com/proxy/_gW4MIXyJloel7-ET9bs-A4lC-M5VYxAMmS8cYYFEjTog7MDdhKyyFed3LLZKQmlZvHuILa_ABW5idspXGPMGqgX7t7yPet47WnLrBvhN1pEEJTnMEMn0KE8_lORRH8jq9U')";
        this.handleGameSubmenuState();
      }
    }
  }



  //Rendering components Wheels and Display
  render() {

    const { mainMenu , musicSubmenu , gameSubmenu} = this.state;

    return (
      <div className="App">
        <Display 
        mainMenu = { mainMenu }
        musicSubmenu = { musicSubmenu } 
        gameSubmenu = { gameSubmenu } 
        />
        <Wheel 
        handleMenu = {this.onHandleMenu} 
        handleRotate = {this.OnHandleRotate} 
        handleInnerCircle = {this.onHandleInnerCircle} 
        />
      </div>
    );
  }

}

export default App;
