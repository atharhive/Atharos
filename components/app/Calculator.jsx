import { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const percentage = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const toggleSign = () => {
    setDisplay(String(parseFloat(display) * -1));
  };

  return (
    <div className="h-full bg-black flex flex-col">
      <div className="flex-1 p-4 flex flex-col">
        <div className="bg-gray-900 rounded-lg p-4 mb-4 text-right">
          <div className="text-3xl text-white font-light tracking-wider overflow-hidden">
            {display}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-2 flex-1">
          <button onClick={clear} className="col-span-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            AC
          </button>
          <button onClick={toggleSign} className="bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            +/-
          </button>
          <button onClick={percentage} className="bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            %
          </button>
          
          <button onClick={() => inputNumber(7)} className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            7
          </button>
          <button onClick={() => inputNumber(8)} className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            8
          </button>
          <button onClick={() => inputNumber(9)} className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            9
          </button>
          <button onClick={() => performOperation('/')} className="bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            ÷
          </button>
          
          <button onClick={() => inputNumber(4)} className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            4
          </button>
          <button onClick={() => inputNumber(5)} className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            5
          </button>
          <button onClick={() => inputNumber(6)} className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            6
          </button>
          <button onClick={() => performOperation('*')} className="bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            ×
          </button>
          
          <button onClick={() => inputNumber(1)} className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            1
          </button>
          <button onClick={() => inputNumber(2)} className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            2
          </button>
          <button onClick={() => inputNumber(3)} className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            3
          </button>
          <button onClick={() => performOperation('-')} className="bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            −
          </button>
          
          <button onClick={() => inputNumber(0)} className="col-span-2 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            0
          </button>
          <button onClick={inputDecimal} className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            .
          </button>
          <button onClick={() => performOperation('+')} className="bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            +
          </button>
          
          <button onClick={() => performOperation('=')} className="col-span-4 bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-lg transition-all duration-200 active:scale-95">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;