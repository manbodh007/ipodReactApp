import React from 'react'
import Clock from 'react-live-clock';
import ReactAudioPlayer from 'react-audio-player';

class screen extends React.Component {

    constructor() {
        super();
        this.audio = '';
    }


    componentDidMount() {
        //     console.log('screen ');
        //    const {play} = this.props.Display;
        // //    console.log('play',play);
        //    if(play){
        //       this.audio.audioEl.current.paused = true;
        //    }
        console.log('audio', this.audio);
    }


    render() {
        const { isPlaying, screenImg, index, songs, menu } = this.props.Display;
       
        let Classname;
        if (index != -1)
            Classname = 'fullscreen';
        else
            Classname = 'screen'

        if (Classname == 'screen') {
            return (
                <div className={Classname}>
                    <div id="clock"><Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} /></div>
                    {
                        menu == 'level3' ?
                            <ReactAudioPlayer
                                src=''
                                autoPlay
                                controls
                                className='audio'
                            />
                            : <img src={screenImg} />
                    }
                </div>
            )
        } else {
            return (
                <div className={Classname}>
                    {

                        menu == 'level3' ?
                            <div>
                                <ReactAudioPlayer
                                src={songs[index]}
                                autoPlay
                                ref = {(element)=>{this.audio = element}}
                                controls
                                className='audio'
                            />
                               
                                <img src={screenImg} className="song-img" />
                            </div>
                            : <img src={screenImg} />
                    }
                </div>
            )
        }
    }
}
export default screen;