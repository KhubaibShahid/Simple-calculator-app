"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Plus, Minus, X, Divide } from "lucide-react";



export default function App() {

  const [result, setResult] = useState<string | number>("");
  const [num1, setNum1] = useState<string | number>();
  const [num2, setNum2] = useState<string | number>();

  function sum(op : string) {
    console.log(num1, num2);
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      alert("Enter a number");
    } else {
      if (op === "+") {
        setResult((num1 as number) + (num2 as number))
      } else if (op === "-") {
        setResult((num1 as number) - (num2 as number))
      } else if (op === "*") {
        setResult((num1 as number) * (num2 as number))
      } else if (op === "/") {
        setResult((num1 as number) / (num2 as number))
      }
    }
  }

  function clear() {
    setResult("");
    setNum1("");
    setNum2("");
  }

  return (
    <div className="w-full h-svh bg-gray-100 px-2 flex justify-center items-center">
      <div className="bg-white max-w-md w-full min-h-96 rounded-xl p-12 shadow-lg">
        <h1 className="text-2xl font-bold">Simple Calculator</h1>
        <div className="flex font-medium text-sm mt-5 gap-5">
          <div>
            <label htmlFor="number1">Number 1</label>
            <Input value={num1} onChange={(e) =>  e.target.value == "" ? setNum1(undefined) : setNum1(Number(e.target.value))} className="rounded-xl mt-1" id="number1" type="number" placeholder="Enter a number" />
          </div>
          <div>
            <label htmlFor="number2">Number 2</label>
            <Input value={num2} onChange={(e) => e.target.value == "" ? setNum2(undefined) : setNum2(Number(e.target.value))} className="rounded-xl mt-1" id="number2" type="number" placeholder="Enter a number" />
          </div>
        </div>
        <div className="flex flex-wrap justify-around mt-3">
          <Button onClick={() => sum("+")} className="max-w-16 w-full px-4 m-2 rounded-xl" variant={"outline"}><Plus /></Button>
          <Button onClick={() => sum("-")} className="max-w-16 w-full px-4 m-2 rounded-xl" variant={"outline"}><Minus /></Button>
          <Button onClick={() => sum("*")} className="max-w-16 w-full px-4 m-2 rounded-xl" variant={"outline"}><X /></Button>
          <Button onClick={() => sum("/")} className="max-w-16 w-full px-4 m-2 rounded-xl" variant={"outline"}><Divide /></Button>
        </div>
        <div className="text-sm mt-1">
          <label htmlFor="result">Result</label>
          <Input value={result} className="caret-transparent rounded-xl mt-1" placeholder="Result" />
        </div>
        <Button onClick={() => clear()} className="w-full mt-5" variant={"outline"}>Clear</Button>
      </div>
    </div>
  )
}