import {
    CLEAR_BUTTON_STATES,
    DEFAULT_NUMBER_INPUT,
    DOT_BUTTON_ENUM,
    EQUAL_BUTTON_ENUM,
    OPERATOR_EVAL_MAPPING,
    TOGGLE_BUTTONS
} from "../constants/Defined";
import { MathUtils } from "../utils";

class CalculateEngine {
    constructor() {
        this.number = "";

        this.previousInput = null;
        this.previousNumber = null;
        this.previousOperation = null;
        this.repeatNumber = null;
        this.repeatOperation = null;
        this.clearable = false;

        this.OperationEnum = {
            addition: OPERATOR_EVAL_MAPPING.ADD.value,
            subtraction: OPERATOR_EVAL_MAPPING.SUB.value,
            multiplication: OPERATOR_EVAL_MAPPING.MUL.value,
            division: OPERATOR_EVAL_MAPPING.DIV.value,
            percentage: TOGGLE_BUTTONS.PERCENT.value,
            sign: TOGGLE_BUTTONS.SIGN.value,
            equal: EQUAL_BUTTON_ENUM.value,
            allClear: CLEAR_BUTTON_STATES.ALL_CLEAR.value,
            clear: CLEAR_BUTTON_STATES.CLEAR.value,
        };
    }

    updatePreviousStatus(number, input) {
        this.previousNumber = number;
        this.previousInput = input;
        this.previousOperation = input;
    }

    // Handle and process all digit inputs including .
    handleDigitInput(input) {
        this.clearable = true;

        if (this.isOperation(this.previousInput)) {
            this.number = "";
        }

        if (input === DOT_BUTTON_ENUM.value && this.containDecimalPoint(this.number)) {
            return this.number;
        }

        if (input === DOT_BUTTON_ENUM.value && this.number === "") {
            this.number = "0" + DOT_BUTTON_ENUM.value;
            return this.number;
        }

        this.number += input;

        this.previousInput = input;

        return this.removeZero(this.number);
    }

    // Handle all operation other than digit inputs.
    handleOperationInput(input) {
        if (
            input === this.OperationEnum.addition ||
            input === this.OperationEnum.subtraction ||
            input === this.OperationEnum.multiplication ||
            input === this.OperationEnum.division
        ) {
            return this.handleBasicMathOperation(input);
        }

        if (input === this.OperationEnum.percentage) {
            return this.handlePercentageOperation();
        }

        if (input === this.OperationEnum.sign) {
            return this.handleSignOperation();
        }

        if (input === this.OperationEnum.allClear) {
            return this.handleAllClearOperation();
        }

        if (input === this.OperationEnum.clear) {
            return this.handleClearOperation();
        }

        if (input === this.OperationEnum.equal) {
            return this.handleEqualOperation(input);
        }
    }

    // Only handle basic +, -, /, x operations
    handleBasicMathOperation(input) {
        this.repeatNumber = null;
        this.repeatOperation = null;

        if (this.previousNumber == null) {
            this.updatePreviousStatus(this.number, input);

            return this.number;
        } else {
            let temp = this.previousInput;
            this.previousInput = input;

            if (
                temp !== input &&
                this.previousOperation !== this.OperationEnum.equal &&
                temp !== "="
            ) {
                if (this.previousOperation === this.OperationEnum.addition) {
                    this.number = this.add(this.previousNumber, this.number);
                }
                if (this.previousOperation === this.OperationEnum.subtraction) {
                    this.number = this.subtract(this.previousNumber, this.number);
                }
                if (this.previousOperation === this.OperationEnum.multiplication) {
                    this.number = this.muliply(this.previousNumber, this.number);
                }
                if (this.previousOperation === this.OperationEnum.division) {
                    this.number = this.divide(this.previousNumber, this.number);
                }

                this.updatePreviousStatus(this.number, input);

                return this.number;
            } else {
                this.updatePreviousStatus(this.number, input);

                return this.number;
            }
        }
    }

    handlePercentageOperation() {
        if (this.number === "") {
            this.number = DEFAULT_NUMBER_INPUT;
        }

        this.number = this.percentage(this.number);

        return this.number;
    }

    handleSignOperation() {
        if (this.number === "") {
            this.number = DEFAULT_NUMBER_INPUT;
        }

        this.number = this.changeSign(this.number);

        return this.number;
    }

    handleAllClearOperation() {
        return this.allClear();
    }

    handleClearOperation() {
        return this.clear();
    }

    // Paramter operation is one of add, subtract, multiply or divide
    perform(operation) {
        if (this.repeatNumber !== null) {
            this.number = operation(this.number, this.repeatNumber);
        } else {
            this.repeatNumber = this.number;
            this.number = operation(this.previousNumber, this.number);
        }
    }

    handleEqualOperation(input) {
        if (this.previousNumber == null) {
            this.updatePreviousStatus(this.number, input);

            return this.number;
        } else {
            this.previousInput = input;

            if (
                this.previousOperation !== this.OperationEnum.equal &&
                input === this.OperationEnum.equal
            ) {
                let temp = this.number;

                if (this.previousOperation === this.OperationEnum.addition) {
                    this.perform(this.add);
                }
                if (this.previousOperation === this.OperationEnum.subtraction) {
                    this.perform(this.subtract);
                }
                if (this.previousOperation === this.OperationEnum.multiplication) {
                    this.perform(this.muliply);
                }
                if (this.previousOperation === this.OperationEnum.division) {
                    this.perform(this.divide);
                }

                this.repeatNumber = temp;
                this.repeatOperation = this.previousOperation;
                this.previousInput = input;
                this.previousOperation = input;

                return this.number;
            } else {
                let temp = this.number;

                if (this.repeatNumber != null) {
                    if (this.repeatOperation === this.OperationEnum.addition) {
                        this.number = this.add(this.number, this.repeatNumber);
                    }
                    if (this.repeatOperation === this.OperationEnum.subtraction) {
                        this.number = this.subtract(this.number, this.repeatNumber);
                    }
                    if (this.repeatOperation === this.OperationEnum.multiplication) {
                        this.number = this.muliply(this.number, this.repeatNumber);
                    }
                    if (this.repeatOperation === this.OperationEnum.division) {
                        this.number = this.divide(this.number, this.repeatNumber);
                    }
                }

                this.updatePreviousStatus(temp, input);

                return this.number;
            }
        }
    }

    calculate(input) {
        if (this.isDigit(input)) {
            return this.handleDigitInput(input);
        }

        if (this.isOperation(input)) {
            return this.handleOperationInput(input);
        }

        return "Error";
    }

    isDigit(input) {
        return !isNaN(input) || input === DOT_BUTTON_ENUM.value;
    }

    isOperation(input) {
        return Object.values(this.OperationEnum).includes(input);
    }

    add(previousNumber, number) {
        return MathUtils.add(parseFloat(previousNumber), parseFloat(number)).toString();
    }

    subtract(previousNumber, number) {
        return MathUtils.subtract(parseFloat(previousNumber), parseFloat(number)).toString();
    }

    muliply(previousNumber, number) {
        return MathUtils.multiply(parseFloat(previousNumber), parseFloat(number)).toString();
    }

    divide(previousNumber, number) {
        return MathUtils.divide(parseFloat(previousNumber), parseFloat(number)).toString();
    }

    percentage(number) {
        return (parseFloat(number) / 100).toString();
    }

    changeSign(number) {
        return parseFloat(number) === 0
            ? DEFAULT_NUMBER_INPUT
            : (parseFloat(number) * -1).toString();
    }

    clear() {
        if (this.isDigit(this.previousInput)) {
            this.number = "";
        } else {
            this.previousOperation = null;
            this.previousNumber = null;
        }
        this.previousInput = null;
        
        this.repeatNumber = null;
        this.repeatOperation = null;
        this.clearable = false;

        return this.number;
    }

    allClear() {
        this.number = "";
        this.previousInput = null;
        this.previousNumber = null;
        this.previousOperation = null;
        this.repeatNumber = null;
        this.repeatOperation = null;
        this.clearable = false;

        return DEFAULT_NUMBER_INPUT;
    }

    removeZero(number) {
        if (number.length > 1 && number[0] === DEFAULT_NUMBER_INPUT && number[1] !== DOT_BUTTON_ENUM.value) {
            return this.removeZero(number.substr(1, number.length));
        }

        return number;
    }

    containDecimalPoint(number) {
        return MathUtils.isDecimal(number);
    }
}

export default CalculateEngine;