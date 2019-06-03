import React from 'react';
import { View } from 'react-native';
import { ListItem, Text, Badge } from 'react-native-elements';
import { connect } from 'react-redux';

class ViewExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.getFormattedDate = this.getFormattedDate.bind(this);
    console.dir(props);
    this.state = { expenses: props.expenses.expenses }
    console.dir(this.state.expenses);

  }

  static navigationOptions = {
    title: 'Recently Added Expenses',
  };


  getFormattedDate(dateTime) {
    var dateTime = new Date();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();
    var year = dateTime.getFullYear();
    return day + "/" + month + "/" + year;
  }


  render() {
    return (
      <View>
        {
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

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}
export default connect(mapStateToProps)(ViewExpenses);
