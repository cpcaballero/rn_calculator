import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {}
  }

  render(){
    let rows = [];
    let nums = [[1,2,3],[4,5,6],[7,8,9], ['del', 0, '=']];
    

    for (let i = 0; i < 4; i++){
      let row = [];
      for (let j = 0; j < 3; j++){
        row.push(<TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>{ nums[i][j] }</Text>
        </TouchableOpacity>);
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    let operations = ["+", "-", "x", "/"];
    let ops = [];
    for (let k = 0; k < 4; k++){
      ops.push(<TouchableOpacity style={styles.btn}>
        <Text style={[styles.btntext, styles.white]}>{ operations[k] }</Text>
      </TouchableOpacity>);
    }
    

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View> 
          <View style={styles.operations}>
            { ops }
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultText : {
    fontSize : 30,
    color: 'white'
  },
  btntext : {
    fontSize: 30,
    
  },
  white : {
    color: 'white',

  },
  btn: {
    // flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    
  },
  row: {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },   
  result : {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculationText : {
    fontSize : 24,
    color: 'white'
  },
  buttons: {
    flexGrow: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    justifyContent: "space-around",
    alignItems: 'stretch',
    // borderWidth : 2,
    // borderColor : 'orange'
  }
});
