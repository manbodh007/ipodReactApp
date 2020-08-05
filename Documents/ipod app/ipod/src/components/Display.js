import React from 'react';
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import Screen from './Screen';
// import Songlist from './Songmenu';



class Display extends React.Component {

    componentDidMount() {
        this.props.store.subscribe(() => {
            this.forceUpdate();
        });
    }

    

    render() {
        const { Display } = this.props.store.getState();
        const { activeMenu,menu} = Display;
       
        console.log('Menu', Display);

        if (menu == 'level1') {
            return (
                <div className='display'>
                    <Menu1 activeMenu={activeMenu} />
                    <Screen Display = {Display}/>
                </div>
            );
        }else if(menu == 'level2'){
            return (
                <div className='display'>
                    <Menu2 Display={Display}/>
                    <Screen Display = {Display}/>
                </div>
            )
        }else if(activeMenu=='Songs'){
            return (
                <div className='display'>
                    <Screen Display = {Display}/>
                </div>
            )
        }
    }
}

export default Display;