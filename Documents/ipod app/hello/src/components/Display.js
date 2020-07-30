import React from 'react';


class Display extends React.Component {


    componentDidMount(){

        this.props.store.subscribe(()=>{
            this.forceUpdate();
          })
    }

    render() {
        const {menu} = this.props.store.getState();
        const {activeMenu,date} = menu;
        console.log('display render');
        console.log('activemenu',activeMenu);
        
        return (
            <div className='display'>

                  
                        <div className='menu'>
                          <h2>ipod</h2>
                            {
                            activeMenu=='music'?<div className="active">Music</div>:<div>Music</div>
                            }
                             {
                            activeMenu=='games'?
                            <div className="active">Games</div>:<div>Games</div>
                            }
                             {
                            activeMenu=='coverflow'?
                            <div className="active">Coverflow</div>:<div>Coverflow</div>
                            }
                             {
                            activeMenu=='setting'?
                            <div className="active">Setting</div>:<div>Setting</div>
                            }
                            
                        </div>
                    
            
                <div className='screen'>
                    
                    <img src="https://1.bp.blogspot.com/-MdaQwrpT4Gs/Xdt-ff_hxEI/AAAAAAAAQXE/oOgnysGd9LwoFLMHJ0etngKzXxmQkWc5ACLcBGAsYHQ/s400/Beautiful-Backgrounds%2B%2528122%2529.jpg" />
                </div>
            </div>
        );
    }
}

export default Display;