import React from 'react';

//Wheel UI
const Wheel=(props)=>{
    return(
        //Main Div
        <div className="container">
            {/*div containig outer circle with buttons and inner circle */}
            <div className="outer-circle" id="outer-circle" onClick={props.handleRotate}>
                <span id="menu" className="menu" onClick={props.handleMenu} >MENU</span>
                <img id="play-pause" className="play-pause" src="https://as2.ftcdn.net/jpg/00/98/69/33/500_F_98693323_3UYg7H6Os6ygn338NLSFLsQndXn56zO0.jpg" alt="play-pause"/>
                <img id="rewind" className="rewind" src="https://as1.ftcdn.net/jpg/01/91/74/34/500_F_191743426_lfnAOvUQc1maauoYUqAR9OfHoGifixdK.jpg" alt="rewind"/>
                <img id="forward" className="forward" src="https://as1.ftcdn.net/jpg/01/91/74/34/500_F_191743424_dK3kngkcthidj78UOY5QhzwzIlATS9lv.jpg" alt="forward"/>
                <div id="inner-circle" className="inner-circle" onClick={props.handleInnerCircle}></div>
            </div>
        </div>
    );
    }
export default Wheel;