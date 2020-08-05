import React from 'react'

class menu2 extends React.Component {
    render() {
        const { activeMenu,level2,heading} = this.props.Display;
        return (
            
                <div className='menu'>
                    <h2>{heading}</h2>
                    {
                        level2.map((menuItem) => {
                            return (
                                 activeMenu == menuItem ?
                                <div className="active">{menuItem}</div> 
                                : <div>{menuItem}</div>
                            )
                        })
                    }
                </div>
        
        )
    }
}
export default menu2;