import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button,ButtonGroup, Text } from 'react-native-elements';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Daily Expense Tracker',
      };

      constructor () {
        super()
        this.state = {
          selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)

      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex});
        screenName="ViewExpenseScreen";
        if(selectedIndex==0){
            screenName="AddExpense";
        }else{
            screenName="HistoricExpenses";
        }
        this.props.navigation.navigate(screenName);

      }
      
      render () {
        const buttons = ['Add Expense','View Expenses']
        const { selectedIndex } = this.state
      
        return (
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 100}}
          />
        )
      }
    }