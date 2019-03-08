import { combineReducers } from 'redux';
import expenseReducer from './Components/ExpenseEntries/expenseReducer';
import incomeReducer from './Components/IncomeEntries/incomeReducer';

const rootReducer = combineReducers({
    expense: expenseReducer,
    income: incomeReducer
});

export default rootReducer;
