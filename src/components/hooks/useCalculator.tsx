import { useState } from "react";

export default function useCalculator() {
    const [one, setOne] = useState("");     // keep strings like your MP-1
    const [two, setTwo] = useState("");
    const [result, setResult] = useState("");
    const [color, setColor] = useState("black");

    function showResult(v: number) {
        const num = Number(v);
        setResult(String(num));
        if (num < 0){
            setColor("red")
        } else {
            setColor("black");
        }
    }

    function clearAll() {
        setOne("");
        setTwo("");
        setResult("");
    }

    function doAdd() {
        const r = Number(one) + Number(two);
        showResult(r);
    }

    function doSub() {
        const r = Number(one) - Number(two);
        showResult(r);

    }

    function doMul() {
        const r = Number(one) * Number(two);
        showResult(r);

    }

    function doDiv() {
        const r = Number(one) / Number(two);
        showResult(r);
    }

    // power using a for() loop only, with negative exponent support
    function power() {
        const base = Number(one);
        const exp = Number(two);
        let r = 1;

        if (exp >= 0) {
            for (let i = 0; i < exp; i++) {
                r = r * base;
            }
        } else {
            for (let i = 0; i < -exp; i++) {
                r = r * base;
            }
            r = 1 / r;
        }
        showResult(r);
    }

    return {
        one, setOne,
        two, setTwo,
        result, color,
        showResult, doAdd, doSub, doMul, doDiv, power, clearAll
    };
}
