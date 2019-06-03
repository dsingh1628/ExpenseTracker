import AsyncStorage from '@react-native-community/async-storage';
    saveNewExpenseToDb= async (newExpense) => {
    let existingExpenses = await AsyncStorage.getItem('expenses');
    existingExpenses = JSON.parse(existingExpenses);
    if (!existingExpenses) {
        existingExpenses = [];
    }
    existingExpenses.push(newExpense);

    await AsyncStorage.setItem('expenses', JSON.stringify(existingExpenses))
        .then(() => {
            console.log('It was saved successfully');
        })
        .catch(() => {
            console.log('There was an error saving the product')
        })
}

  retriveExpensesFromDB = async () => {
    let existingExpenses = await AsyncStorage.getItem('expenses');
    existingExpenses=JSON.parse(existingExpenses);
    return existingExpenses;
};



module.exports= {retriveExpensesFromDB,saveNewExpenseToDb};