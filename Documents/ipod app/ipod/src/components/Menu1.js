import React from 'react'

class menu1 extends React.Component {
    render() {
        const activeMenu = this.props.activeMenu;
        return (
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
            </div>
        )
    }
}
export default menu1;