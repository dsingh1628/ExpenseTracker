import { createStackNavigator, createAppContainer } from 'react-navigation';
import AddExpense from './components/AddExpense';
import Home from './components/Home';
import ViewExpenses from './components/ViewExpenses';
import HistoricExpenses from './components/HistoricExpenses';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    AddExpense: {
        screen: AddExpense
    },
    ViewExpenses: {
        screen: ViewExpenses

    }, HistoricExpenses: {
        screen: HistoricExpenses
    }

});

export default createAppContainer(AppNavigator);