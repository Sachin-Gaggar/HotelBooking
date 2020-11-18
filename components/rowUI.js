import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Iconfa from 'react-native-vector-icons/FontAwesome';
import IconSim from 'react-native-vector-icons/SimpleLineIcons';


export default class Row extends Component {
    render() {

        return (


            <View style={styles.row}>
                <View style={styles.txt}>
                    <View>


                        <Text style={styles.font}>{this.props.icon} {this.props.name}</Text>

                    </View>
                </View>

                <View style={styles.symbols}>
                    <View>
                        {
                            (this.props.minusEnable) ? <TouchableOpacity onPress={this.props.minus}><Icon name='remove-circle' size={30} color='blue' /></TouchableOpacity> : <Icon name='remove-circle' size={30} color='lightblue' />
                        }
                    </View>
                    <Text style={styles.font}>  {this.props.count}  </Text>

                    {(this.props.plusEnable) ? <TouchableOpacity onPress={this.props.plus}><Icon name='add-circle' size={30} color='red' /></TouchableOpacity> : <Icon name='add-circle' size={30} color='lightblue' />}
                </View>
            </View>

        );


    }

}
const styles = StyleSheet.create(
    {
        row: {


            paddingBottom: 10,
            flexDirection: "row",
            borderBottomWidth: 1,
            margin: 15,
            borderBottomColor: "rgba(0,0,0,0.6)"
        },
        symbols: {
            flex: 0.2,

            flexDirection: 'row',
            justifyContent: 'flex-end'

        },
        font: {
            fontSize: 30
        },
        txt: {
            flex: 0.8,

        },



    });
