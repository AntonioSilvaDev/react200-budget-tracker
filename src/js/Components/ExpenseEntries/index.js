import { connect } from 'react-redux';
import ExpenseEntries from './ExpenseEntries';

//This function takes the store and returns an object
//thats passed to the props of the component
function mapStoreToProps(store){
    return {
        description: store.expense.description,
        amount: store.expense.amount,
        lineItems: store.expense.lineItems
    };
}

export default connect(mapStoreToProps)(ExpenseEntries);