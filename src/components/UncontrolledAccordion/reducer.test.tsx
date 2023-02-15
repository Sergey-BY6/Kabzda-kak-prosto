import {Reducer, StateType, TOOGLE_COLLAPSED} from './reducer';


test("collapsedmshould be true", ()=> {

const state: StateType = {
    collapsed: false
}


    const newState = Reducer (state, {type: TOOGLE_COLLAPSED})

expect(newState.collapsed).toBe(true)

})


test("collapsedmshould be false", ()=> {

    const state: StateType = {
        collapsed: true
    }


    const newState = Reducer (state, {type: TOOGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)

})

test("collapsedmshould be Error", ()=> {

    const state: StateType = {
        collapsed: true
    }


    expect(()=> Reducer (state, {type: "FAKETYPE"})).toThrowError()

})