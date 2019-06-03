import React from 'react';
import { View } from 'react-native';
import { ListItem, Text, Badge } from 'react-native-elements';
import {retriveExpensesFromDB} from '../storage/storage';


export default class HistoricExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expenses: [],isReadyForDisplay:false}
    this.getFormattedDate=this.getFormattedDate.bind(this);
  }

  componentDidMount(){
    retriveExpensesFromDB().then((expensesFromDB) => {
        this.setState({expenses:expensesFromDB});
        console.log(this.state.expenses);
        console.dir(this.state);
        this.setState({isReadyForDisplay:true});
        console.dir(this.state);
        }).catch((error) => {
        
        console.log('Promise is rejected with error: ' + error);
        }); 
  }
  static navigationOptions = {
    title: 'Historical Expenses',
  };


  getFormattedDate(dateTime) {
    var dateTime = new Date();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();
    var year = dateTime.getFullYear();
    return day + "/" + month + "/" + year;
  }


  render() {
      console.log(this.state.expenses.length);
      console.log(this.state.isReadyForDisplay);
    return (
      <View>
         {
        
          this.state.isReadyForDisplay &&
          this.state.expenses.map((l, i) => (
            <ListItem
              key={i}
              title={l.desciption}
              subtitle={this.getFormattedDate(l.date)}
              badge={{ value: l.amount, textStyle: { color: 'orange', fontSize: 20 }, containerStyle: { marginTop: -20 }, width: 80 }}

            />
          ))
             
        }
      </View>
    );
  }
}


