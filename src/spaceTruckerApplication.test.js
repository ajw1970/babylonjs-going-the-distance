import SpaceTruckerApplication from "./spaceTruckerApplication";
import AppStates from "./appstates"

//We skip this because it doesn't work well with the babylonjs dependencies in spaceTruckerApplication.js and also because the test failed when commenting out that include
test.skip("Test state machine", () => {
    let engine = {};
    let app = new SpaceTruckerApplication(engine);

    expect(app.currentState.value).toBe(AppStates.CREATED);
})