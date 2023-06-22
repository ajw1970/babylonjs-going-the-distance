import appstates from "./appstates";

test("we can get states enum", () => {
    let state = appstates.CUTSCENE;
    expect(state).toBe(3);
})