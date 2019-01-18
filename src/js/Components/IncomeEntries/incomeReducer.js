const defaultState = {
    description: '',
    amount: '',
    lineItems: []
};

export default function IncomeReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case 'UPDATE_INCOME_DESCRIPTION' : {
            return {
                ...state,
                description: payload.description
            };
        }

        case 'UPDATE_INCOME_AMOUNT' : {
            return {
                ...state,
                amount: payload.amount
            };
        }

        case 'ADD_INCOME' : {
            const { description, amount } = action.payload;
            return {
                description: '',
                amount: '',
                lineItems: [
//state goes here because the lineItems are what is being update on the click 'add_expense'
                    ...state.lineItems,
                    { description, amount }
                ]
            };
        }

        default: {
            return state;
        }
    }
}