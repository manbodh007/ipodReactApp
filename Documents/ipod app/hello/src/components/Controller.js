import React from 'react';
import ZingTouch from 'zingtouch';
import { moveTopToBottom, moveBottomToTop } from '../action';

class Controller extends React.Component {

    constructor() {
        super();
        this.distanceFrom = 0;
    }



    componentDidMount() {
        var touchArea = document.getElementsByClassName('action-box')[0];
        var myRegion = new ZingTouch.Region(touchArea);

        const self = this;
        myRegion.bind(touchArea, 'rotate', function (event) {

            console.log('event', event.detail);

            const { menu } = self.props.store.getState();

            console.log("activeMenu", menu.activeMenu);
            const { activeMenu } = menu;
            self.distanceFrom += event.detail.distanceFromLast;
            console.log('distance from', self.distanceFrom);

            if (self.distanceFrom > 15) {
                // move menu top to bottom or clockwise
                self.props.store.dispatch(moveTopToBottom(activeMenu));
                self.distanceFrom = 0;
            } else if (self.distanceFrom < -15) {
                // moving anticlockwise
                self.props.store.dispatch(moveBottomToTop(activeMenu));
                self.distanceFrom = 0;
            }
        })

    }


    render() {
        console.log('conroller render');
        return (
            <div className='action-box'>
                <div className='menu-btn'>
                    Menu
                </div>
                <div className='middle-btn'>
                    <div className='right'>
                        <img src="https://img.icons8.com/metro/26/000000/double-left.png" />
                    </div>
                    <div className='center'>
                    </div>
                    <div className='left'>
                        <img src="https://img.icons8.com/metro/26/000000/double-right.png" />
                    </div>
                </div>
                <div className='bottom'>
                    <img src="https://img.icons8.com/color/48/000000/resume-button.png" />
                </div>
            </div>
        );
    }
}

export default Controller;