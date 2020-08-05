export const MOVE_TOP_TO_BOTTOM = 'MOVE_TOP_TO_BOTTOM';
export const MOVE_BOTTOM_TO_TOP = 'MOVE_BOTTOM_TO_TOP';
export const SHOW_OPTION_OF_MENU1 = 'SHOW_OPTION_OF_MENU1';
export const SHOW_OPTION_OF_MENU2 = 'SHOW_OPTION_OF_MENU2';
export const AUDIO_CONTROLLER = 'AUDIO_CONTROLLER';

export function moveTopToBottom(status){
    return {
        type:MOVE_TOP_TO_BOTTOM,
        status
    }
}
export function moveBottomToTop(status){
    return{
         type:MOVE_BOTTOM_TO_TOP,
         status
    }
}

export function showOptionOfMenu2(value){
    return{
        type:SHOW_OPTION_OF_MENU2,
        value,
    }
}
export function showOptionOfMenu1(value){
    return{
        type:SHOW_OPTION_OF_MENU1,
        value,
    }
}
export function audioController(status){
    return{
        type:AUDIO_CONTROLLER,
        status,
    }
}
