import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { addExpense } from '../redux/actions/action';
import {saveNewExpenseToDb} from '../storage/storage';

class AddExpense extends Component {
    static navigationOptions = {
        title: 'Add New Expenses',
    };
    state = {
        expenses: []
    }
    constructor(props) {
        super(props);
        this.state = {
            desciption: "",
            amount: 0
        }
        this.addDescription = this.addDescription.bind(this);
        this.addAmount = this.addAmount.bind(this);
        this.saveExpense = this.saveExpense.bind(this);
        this.isStateValid = this.isStateValid.bind(this);


    }
    addDescription = (text) => {
        if (!text.trim()) {
            text = "";
            alert("desciption can't be empty");
        }
        this.setState({ desciption: text });

    }
    addAmount = (amount) => {
        console.log(amount);
        if (isNaN(amount)) {
            amount = 0;
            alert("amount should be in numbers");
        }
        this.setState({ amount: amount });
    }

    isStateValid = () => {
        return this.state.desciption != "" && this.state.amount != 0;
    }
    saveExpense = (event) => {
        if (!this.isStateValid()) {
            alert("failed in validation");
        } else {
            newExpense={ 'date': Date(), desciption: this.state.desciption, amount: this.state.amount };
            this.props.onAddExpense(newExpense);
            this.setState({ desciption: "", amount: 0 });
            saveNewExpenseToDb(newExpense);
            this.props.navigation.navigate('ViewExpenses')


        }
    }
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Expense Tracker !!!!</Text>
                <Input
                    placeholder='Description of the Expense'
                    shake={true}
                    value={this.state.desciption}
                    onChangeText={this.addDescription}
                    leftIcon={
                        <Icon name='user' size={24} color='black' />} />
                <Input
                    placeholder='Amount of the Expense'
                    shake={true}
                    value={`${this.state.amount}`}
                   
                    onChangeText={this.addAmount}
                    keyboardType="numeric"
                    leftIcon={
                        <Icon name='rss' size={24} color='black' ></Icon>} />
                <Button
                    icon={
                        <Icon
                            name="arrow-right"
                            size={24}
                            color="white"
                        />
                    }
                    onPress={this.saveExpense}
                    title="Add New Expense"
                    style={{margin:100}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
const mapStateToProps = state => ({
    expenses: state.expenses
});

const mapDispatchToProps = dispatch => ({
    onAddExpense: (newExpense) => dispatch(addExpense(newExpense))
});


export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);