describe("Generator function", () => {

    function* appStateMachine() {
        let currentState = "INDETERMINATE";
        yield currentState;
        yield currentState + "-POST";
        yield "DONE";
    }

    test("Using generator as state machine", () => {
        asm = appStateMachine();

        let state = asm.next();
        expect(state.value).toBe("INDETERMINATE");
        expect(state.done).toBe(false);

        state = asm.next();
        expect(state.value).toBe("INDETERMINATE-POST");
        expect(state.done).toBe(false);

        state = asm.next();
        expect(state.value).toBe("DONE");
        expect(state.done).toBe(false);

        state = asm.next();
        expect(state.value).toBe(undefined);
        expect(state.done).toBe(true);
    });

});