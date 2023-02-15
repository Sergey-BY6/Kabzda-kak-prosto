


export type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOOGLE_COLLAPSED = "TOOGLE_COLLAPSED"

export const Reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOOGLE_COLLAPSED :
            return {...state, collapsed: !state.collapsed}
        default:
            // return state
            throw new Error("Bad action type")
    }

}