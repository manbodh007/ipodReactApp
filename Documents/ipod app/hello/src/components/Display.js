import React from 'react';

class Display extends React.Component {


    componentDidMount() {
        this.props.store.subscribe(() => {
            this.forceUpdate();
        });



    }

    onChange = date => this.props.store.dispatch(date)

    render() {
        const { Menu } = this.props.store.getState();
        const { activeMenu, menu ,level2,heading,screenImg} = Menu;
        console.log('display render');
        console.log('activemenu', activeMenu);

        return (
            <div className='display'>

                {
                    menu == 'level1' ?
                        <div className='menu'>
                            <h2>ipod</h2>
                            {
                                activeMenu == 'music' ? <div className="active">Music</div> : <div>Music</div>
                            }
                            {
                                activeMenu == 'games' ?
                                    <div className="active">Games</div> : <div>Games</div>
                            }
                            {
                                activeMenu == 'coverflow' ?
                                    <div className="active">Coverflow</div> : <div>Coverflow</div>
                            }
                            {
                                activeMenu == 'setting' ?
                                    <div className="active">Setting</div> : <div>Setting</div>
                            }
                        </div> :
                        <div className='menu'>
                            <h2>{heading}</h2>
                             {
                             level2.map((menuItem)=>{
                                  return (
                                        activeMenu == menuItem?
                                        <div className="active">{menuItem}</div>:<div>{menuItem}</div>
                                  )
                               })
                             }
                        </div>
                }


                <div className='screen'>
                    <img src={screenImg} />
                </div>
            </div>
        );
    }
}

export default Display;