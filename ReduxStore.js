const INITIALSTATE = { payload: '◔_◔' }

function moodReducer(state = INITIALSTATE, action) {
    switch (action.type) {
        case "HAPPY":
            return { ...state, payload: "ʘ‿ʘ" }
        case "SAD":
            return { ...state, payload: "⊙︿⊙" }
        case "ANGRY":
            return { ...state, payload: "⋋_⋌" }
        case "CONFUSED":
            return { ...state, payload: "⊙.☉" }
        default:
            return state
    }
}

const store = Redux.createStore(moodReducer);
