describe("Generator function", () => {

    function* appStateMachine() {
        let currentState = "INDETERMINATE";
        yield currentState;
        yield currentState + "-POST";
        yield "DONE";
    }

    test("Using generator as state machine", () => {
        let asm = appStateMachine();

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

describe("function* with infinite loop example", () => {

    function* idMaker() {
        let index = 0;
        while (true) {
            yield index++;
        }
    }

    test("Using infinite loop", () => {
        let idm = idMaker();

        let id = idm.next();
        expect(id.value).toBe(0);
        expect(id.done).toBe(false);

        id = idm.next("TEST");
        expect(id.value).toBe(1);
        expect(id.done).toBe(false);

        id = idm.next();
        expect(id.value).toBe(2);
        expect(id.done).toBe(false);
    });

});

describe("function* with infinite loop example with passed values", () => {

    function* counter(value) {
        while (true) {
            const step = yield value++;

            if (step) {
                value += step;
            }
        }
    }

    test("passing values", () => {
        const generatorFunc = counter(0);

        expect(generatorFunc.next().value).toBe(0);
        expect(generatorFunc.next().value).toBe(1);
        expect(generatorFunc.next().value).toBe(2);
        expect(generatorFunc.next().value).toBe(3);
        expect(generatorFunc.next(10).value).toBe(14);
        expect(generatorFunc.next().value).toBe(15);
        expect(generatorFunc.next(10).value).toBe(26);
    });

});

describe("function* with infinite loop", () => {

    function* appStateMachine() {
        let currentState = "INDETERMINATE";

        while (true) {
            let nextState = yield;
            if (nextState !== null && nextState !== undefined) {
                currentState = nextState;
            }
            return currentState;
        }
    }

    test.skip("Using generator as state machine", () => {
        let asm = appStateMachine();

        let state = asm.next();
        expect(state.value).toBe("INDETERMINATE");
        expect(state.done).toBe(false);

        state = asm.next("TEST");
        expect(state.value).toBe("TEST");
        expect(state.done).toBe(false);

        state = asm.next();
        expect(state.value).toBe("TEST");
        expect(state.done).toBe(false);
    });

});