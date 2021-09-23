
export const BUTTON_TYPE = {
    OPERATOR: 'operator',
    NUMBER: 'number',
    EQUAL: 'EQUAL',
    CLEAR: 'clear',
    TOGGLE: 'toggle',
    DOT: 'dot'
}

export const OPERATOR_EVAL_MAPPING = {
    MUL: { label: 'x', value: '*' },
    DIV: { label: '\u00F7', value: '/' },
    ADD: { label: '+', value: '+' },
    SUB: { label: '-', value: '-' },
}

export const TOGGLE_BUTTONS = {
    SIGN: { label: '+/-', value: '+/-' },
    PERCENT: { label: '%', value: '%' },
}

export const CLEAR_BUTTON_STATES = {
    ALL_CLEAR: { label: 'AC', value: 'AC' },
    CLEAR: { label: 'C', value: 'C' },
}

export const EQUAL_BUTTON_ENUM = { label: '=', value: '=' }

export const DOT_BUTTON_ENUM = { label: '.', value: '.' }

export const KEYBOARD_LAYOUT_BUTTONS = [
    { id: 'btn-clear', type: BUTTON_TYPE.CLEAR, ...CLEAR_BUTTON_STATES.ALL_CLEAR },
    { id: 'btn-t-negative', type: BUTTON_TYPE.TOGGLE, ...TOGGLE_BUTTONS.SIGN },
    { id: 'btn-t-percent', type: BUTTON_TYPE.TOGGLE, ...TOGGLE_BUTTONS.PERCENT },
    { id: 'btn-o-div', type: BUTTON_TYPE.OPERATOR, ...OPERATOR_EVAL_MAPPING.DIV },
    { id: 'btn-7', type: BUTTON_TYPE.NUMBER, label: '7', value: 7 },
    { id: 'btn-8', type: BUTTON_TYPE.NUMBER, label: '8', value: 8 },
    { id: 'btn-9', type: BUTTON_TYPE.NUMBER, label: '9', value: 9 },
    { id: 'btn-o-mul', type: BUTTON_TYPE.OPERATOR, ...OPERATOR_EVAL_MAPPING.MUL },
    { id: 'btn-4', type: BUTTON_TYPE.NUMBER, label: '4', value: 4 },
    { id: 'btn-5', type: BUTTON_TYPE.NUMBER, label: '5', value: 5 },
    { id: 'btn-6', type: BUTTON_TYPE.NUMBER, label: '6', value: 6 },
    { id: 'btn-o-sub', type: BUTTON_TYPE.OPERATOR, ...OPERATOR_EVAL_MAPPING.SUB },
    { id: 'btn-1', type: BUTTON_TYPE.NUMBER, label: '1', value: 1 },
    { id: 'btn-2', type: BUTTON_TYPE.NUMBER, label: '2', value: 2 },
    { id: 'btn-3', type: BUTTON_TYPE.NUMBER, label: '3', value: 3 },
    { id: 'btn-o-add', type: BUTTON_TYPE.OPERATOR, ...OPERATOR_EVAL_MAPPING.ADD },
    { id: 'btn-0', type: BUTTON_TYPE.NUMBER, label: '0', value: 0, className: 'span-2' },
    { id: 'btn-dot', type: BUTTON_TYPE.DOT, ...DOT_BUTTON_ENUM },
    { id: 'btn-equal', type: BUTTON_TYPE.EQUAL, ...EQUAL_BUTTON_ENUM },

]

export const DEFAULT_NUMBER_INPUT = '0';