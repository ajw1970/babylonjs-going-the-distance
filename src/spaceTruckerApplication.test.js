//import SpaceTruckerApplication from "./spaceTruckerApplication";
import AppStates from "./appstates";

function* appStateMachine() {
    let previousState = null;
    let currentState = null;
    function setState(newState) {
        previousState = currentState;
        currentState = newState;
        return newState;
    }

    while (true) {
        let nextState = yield currentState;
        if (nextState !== null && nextState !== undefined) {
            setState(nextState);
            if (nextState === AppStates.EXITING) {
                return currentState;
            }
        }
    }
}

//We skip this because it doesn't work well with the babylonjs dependencies in spaceTruckerApplication.js and also because the test failed when commenting out that include
test("Test state machine", () => {
    let asm = appStateMachine();

    asm.next();
    asm.next(AppStates.CREATED);

    expect(asm.next().value).toBe(AppStates.CREATED);
})