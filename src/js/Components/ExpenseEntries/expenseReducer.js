const defaultState = {
    description: '',
    amount: '',
    lineItems: []
};

export default function ExpenseReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        //Update descript action
        case 'UPDATE_EXPENSE_DESCRIPTION' : {
            return {
                ...state,//all the previous state
                description: payload.description//but overwriting the descript from the payload
            };
        }

        case 'UPDATE_EXPENSE_AMOUNT' : {
            return {
                ...state,
                amount: payload.amount
            };
        }

        case 'ADD_EXPENSE' : {
            const {description, amount } = action.payload;
            return {
                description: '',
                amount: '',
                lineItems: [
                    ...state.lineItems,//previous lineItems
                    { description, amount }//new object, the complete payload
                ]
            };
        }

        default: {
            return state;
        }
    }
}