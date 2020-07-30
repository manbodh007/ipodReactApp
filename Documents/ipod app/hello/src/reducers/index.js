import { combineReducers } from 'redux';

import {
    MOVE_TOP_TO_BOTTOM,
    MOVE_BOTTOM_TO_TOP,
    SHOW_OPTION_OF_MENU1,
    SHOW_OPTION_OF_MENU2
} from '../action';

const intialManuState = {
    activeMenu: 'music',
    date: new Date(),
    level2: [],
    menu: 'level1',
    heading:'ipod',
    screenImg:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/EGC-gray?wid=460&hei=292&fmt=png-alpha&op_usm=0.5,0.5&qlt=80&.v=1475520804751',
    songs:[]
}

export function Menu(state = intialManuState, action) {
    switch (action.type) {

        case MOVE_TOP_TO_BOTTOM:
            switch (action.status) {
                case 'music':
                    return {
                        ...state,
                        activeMenu: 'games'
                    }
                case 'games':
                    return {
                        ...state,
                        activeMenu: 'coverflow'
                    }
                case 'coverflow':
                    return {
                        ...state,
                        activeMenu: 'setting',
            
                    }
                case 'setting':
                    return {
                        ...state,
                        activeMenu: 'music',
                    }
                case 'Songs':
                    return {
                        ...state,
                        activeMenu: 'Artist',
                        screenImg:'https://stat1.hungama.ind.in/featured_content/b7ad48615c29167ded8fc9afb4c0f321_924x520.jpg'
                    }
                case 'Artist':
                    return {
                        ...state,
                        activeMenu: 'Albums'
                    }
                case 'Albums':
                    return {
                        ...state,
                        activeMenu: 'Songs',
                        screenImg:'https://www.lifewire.com/thmb/99y4GaUM4m0qbtZY8gmtGvdDxfE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/apple-music-56a928033df78cf772a4457e.jpg',
                    }
                case 'Snack':
                    return {
                        ...state,
                        activeMenu: 'Gta5',
                        screenImg:'https://images.spot.im/v1/production/hmo8kqg3yast27gsldn2',
                    }
                case 'Gta5':
                    return {
                        ...state,
                        activeMenu: 'Lodo',
                        screenImg:'https://lh3.googleusercontent.com/e7vIMW8K0kYxbLJHJkO-w-ysKq3DU8LiZpT9NvrW1Mf4QxJK3Ju8kXjliNMMF2iBqXY'
                    }
                case 'Lodo':
                    return {
                        ...state,
                        activeMenu: 'Snack',
                        screenImg:'https://blog.ezeonsoft.com/wp-content/uploads/2019/12/main-qimg-d0b69a4b1efb13581d09765a6bd124ed1.jpg'
                    }
                case 'Wallpaper':
                    return {
                        ...state,
                        activeMenu: 'Themes'
                    }
                case 'Themes':
                    return {
                        ...state,
                        activeMenu: 'Wallpaper'
                    }
                case 'All setting':
                    return {
                        ...state,
                        activeMenu: 'All setting',
                        screenImg:'https://images.macrumors.com/t/Sy0SwOFVZ1JjYVA5KkbmlWg9rG4=/1600x0/article-new/2019/08/apple-settings-icon-19.jpg-250x250.jpg'
                    }
                default:
                    return {
                        ...state,
                        activeMenu: 'music'
                    }
            }
        case MOVE_BOTTOM_TO_TOP:
            switch (action.status) {
                case 'music':
                    return {
                        ...state,
                        activeMenu: 'setting'
                    }
                case 'games':
                    return {
                        ...state,
                        activeMenu: 'music'
                    }
                case 'coverflow':
                    return {
                        ...state,
                        activeMenu: 'games'
                    }
                case 'setting':
                    return {
                        ...state,
                        activeMenu: 'coverflow'
                    }
                case 'Songs':
                    return {
                        ...state,
                        activeMenu: 'Albums'
                    }
                case 'Artist':
                    return {
                        ...state,
                        activeMenu: 'Songs',
                        screenImg:'https://www.lifewire.com/thmb/99y4GaUM4m0qbtZY8gmtGvdDxfE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/apple-music-56a928033df78cf772a4457e.jpg',
                    }
                case 'Albums':
                    return {
                        ...state,
                        activeMenu: 'Artist',
                        screenImg:'https://stat1.hungama.ind.in/featured_content/b7ad48615c29167ded8fc9afb4c0f321_924x520.jpg'
                    }
                case 'Snack':
                    return {
                        ...state,
                        activeMenu: 'Lodo',
                        screenImg:'https://lh3.googleusercontent.com/e7vIMW8K0kYxbLJHJkO-w-ysKq3DU8LiZpT9NvrW1Mf4QxJK3Ju8kXjliNMMF2iBqXY'
                    }
                case 'Gta5':
                    return {
                        ...state,
                        activeMenu: 'Snack',
                        screenImg:'https://blog.ezeonsoft.com/wp-content/uploads/2019/12/main-qimg-d0b69a4b1efb13581d09765a6bd124ed1.jpg'
                    }
                case 'Lodo':
                    return {
                        ...state,
                        activeMenu: 'Gta5',
                        screenImg:'https://images.spot.im/v1/production/hmo8kqg3yast27gsldn2'
                    }
                case 'Wallpaper':
                    return {
                        ...state,
                        activeMenu: 'Themes'
                    }
                case 'Themes':
                    return {
                        ...state,
                        activeMenu: 'Wallpaper'
                    }
                case 'All setting':
                    return {
                        ...state,
                        activeMenu: 'All setting',
                        screenImg:'https://images.macrumors.com/t/Sy0SwOFVZ1JjYVA5KkbmlWg9rG4=/1600x0/article-new/2019/08/apple-settings-icon-19.jpg-250x250.jpg'
                    }
                default:
                    return {
                        ...state,
                        activeMenu: 'setting'
                    }
            }
        case SHOW_OPTION_OF_MENU2:
            switch (action.value) {
                case 'music':
                    return {
                        ...state,
                        level2: ['Songs', 'Artist', 'Albums'],
                        menu: 'level2',
                        activeMenu: 'Songs',
                        heading:'Music',
                        screenImg:'https://www.lifewire.com/thmb/99y4GaUM4m0qbtZY8gmtGvdDxfE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/apple-music-56a928033df78cf772a4457e.jpg',
                    }
                case 'games':
                    return {
                        ...state,
                        level2: ['Snack', 'Gta5', 'Lodo'],
                        menu: 'level2',
                        activeMenu: 'Snack',
                        heading:'Games',
                        screenImg:'https://blog.ezeonsoft.com/wp-content/uploads/2019/12/main-qimg-d0b69a4b1efb13581d09765a6bd124ed1.jpg'
                        
                    }
                case 'coverflow':
                    return {
                        ...state,
                        level2: ['Wallpaper', 'Themes'],
                        menu: 'level2',
                        activeMenu: 'Wallpaper',
                        heading:'CoverFlow',
                        screenImg:'https://www.iphonehacks.com/wp-content/uploads/2018/03/ios-12-concept-music-app-1.jpg'
                    }
                case 'setting':
                    return {
                        ...state,
                        level2: ['All setting'],
                        menu: 'level2',
                        activeMenu: 'All setting',
                        heading:'Setting',
                        screenImg:'https://images.macrumors.com/t/Sy0SwOFVZ1JjYVA5KkbmlWg9rG4=/1600x0/article-new/2019/08/apple-settings-icon-19.jpg-250x250.jpg'
                    }
                default:
                    return state
            }
        case SHOW_OPTION_OF_MENU1:
            return {
                ...state,
                menu: action.value,
                activeMenu: 'music',
                screenImg:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/EGC-gray?wid=460&hei=292&fmt=png-alpha&op_usm=0.5,0.5&qlt=80&.v=1475520804751'
            }

        default:
            return state
    }
}

export default combineReducers({
    Menu
})