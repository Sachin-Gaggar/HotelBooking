
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Iconfa from 'react-native-vector-icons/FontAwesome';
import IconSim from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Row from './components/rowUI';


class App extends Component {
  state = { room: 1, adult: 1, child: 0 }
  plusRoom = () => this.setState({
    room: this.state.room + 1,
    adult: (this.state.adult < this.state.room + 1) ? this.state.room + 1 : this.state.adult
  })
  minusRoom = () => this.setState({
    room: this.state.room - 1,
    adult: (this.state.adult > (this.state.room - 1) * 4) ? (this.state.room - 1) * 4 : this.state.adult,
    child: ((this.state.adult + this.state.child) > (this.state.room - 1) * 4) ?
      (this.state.adult >= (this.state.room - 1) * 4) ? 0 :
        (((this.state.room - 1) * 4) - this.state.adult) : this.state.child
  })

  plusAdult = () => this.setState({ adult: this.state.adult + 1 })
  minusAdult = () => this.setState({ adult: this.state.adult - 1 })

  plusChild = () => this.setState({ child: this.state.child + 1 })
  minusChild = () => this.setState({ child: this.state.child - 1 })

  render() {
    const { room, adult, child } = this.state    //doubt
    return (
      <View style={styles.container}>
        <View style={{ width: '100%', marginLeft: '1%' }}>
          <Text style={{ textAlign: 'left', fontSize: 30 }}><Icon name='people' size={30} color='blue' /> Choose number of people</Text>
        </View>
        <View style={styles.box}>

          <Row
            name="Rooms"
            icon={<Iconfa name='bed' size={30} color='blue' />}
            minus={this.minusRoom}
            plus={this.plusRoom}
            count={room}
            minusEnable={(room > 1) ? true : false}
            plusEnable={(room < 5) ? true : false}
          />
          <Row
            name="Adults"
            icon={<IconSim name='user' size={30} color='blue' />}
            plus={this.plusAdult}
            minus={this.minusAdult}
            minusEnable={(adult > room) ? true : false}
            plusEnable={((adult + child) <= (room * 4 - 1)) ? true : false}
            count={adult}
          />
          <Row
            name="Children"
            icon={<Iconfa name='child' size={30} color='blue' />}
            plus={this.plusChild}
            minus={this.minusChild}
            minusEnable={(child > 0) ? true : false}
            plusEnable={((adult + child) < (room * 4)) ? true : false}
            count={child}
          />

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ffffff',
      justifyContent: "center"
    },
    box: {
      borderWidth: 1,
      alignItems: 'center',
      width: '98%',
      justifyContent: "space-between",
      padding: 15,
      marginLeft: '1%'
    }

  });
export default App;