import {combineReducers} from 'redux';

import {
    MOVE_TOP_TO_BOTTOM,
    MOVE_BOTTOM_TO_TOP
} from '../action';

const intialManuState = {
    activeMenu:'music',
    date:new Date()
}

export function menu(state = intialManuState,action){
    switch(action.type){

        case MOVE_TOP_TO_BOTTOM:
            switch(action.status){
                case 'music':
                    return {
                        ...state,
                        activeMenu:'games'
                    }
                case 'games':
                    return{
                        ... state,
                        activeMenu:'coverflow'
                    }
                case 'coverflow':
                    return{
                        ...state,
                        activeMenu:'setting'
                    }
                case 'setting':
                    return{
                        ...state,
                        activeMenu:'music'
                    }
                default:
                    return{
                        ...state,
                        activeMenu:'music'
                    }
            }
        case MOVE_BOTTOM_TO_TOP:
            switch(action.status){
                case 'music':
                    return {
                        ...state,
                        activeMenu:'setting'
                    }
                case 'games':
                    return{
                        ... state,
                        activeMenu:'music'
                    }
                case 'coverflow':
                    return{
                        ...state,
                        activeMenu:'games'
                    }
                case 'setting':
                    return{
                        ...state,
                        activeMenu:'coverflow'
                    }
                default:
                    return{
                        ...state,
                        activeMenu:'setting'
                    }
            }
              
        default:
            return state
    }
}

export default combineReducers({
    menu
})