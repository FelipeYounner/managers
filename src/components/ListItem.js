import React,{Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection} from "./common/CardSection";

class ListItem extends Component{

    onRowPress(){
        Actions.employeeEdit({employee: this.props.employee});
    }

    render() {
        const {name} = this.props.employee;

        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>

        );
    }
}

const styles = {
  tittleStyle: {
      fontSize: 18,
      paddingLeft: 15,
      color: '#000'
  }
};

export default ListItem;