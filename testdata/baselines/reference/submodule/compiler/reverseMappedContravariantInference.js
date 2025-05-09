//// [tests/cases/compiler/reverseMappedContravariantInference.ts] ////

//// [reverseMappedContravariantInference.ts]
// Repro from #21273

declare function conforms<T>(source: { [K in keyof T]: (val: T[K]) => boolean }): (value: T) => boolean;
conforms({ foo: (v: string) => false })({ foo: "hello" });


//// [reverseMappedContravariantInference.js]
conforms({ foo: (v) => false })({ foo: "hello" });
