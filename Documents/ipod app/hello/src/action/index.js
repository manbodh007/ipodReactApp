export const MOVE_TOP_TO_BOTTOM = 'MOVE_TOP_TO_BOTTOM';
export const MOVE_BOTTOM_TO_TOP = 'MOVE_BOTTOM_TO_TOP'

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