import React, {PureComponent} from 'react'
import { View, Text } from 'react-native'
import Header from "../components/uikit/Header";
import DetailImageCard from "../components/uikit/DetailImageCard";

class DetailScreen extends PureComponent {
    render() {
        console.log('this.props', this.props);
        const params = this.props.navigation.state.params;
        let notUnique = params.map(({userId}) => userId);
        let name = [...new Set(notUnique)];
        return (
            <View>
                <Header
                    detail
                    title={name}
                    onPress={() => this.props.navigation.goBack()}
                    leftIcon='ios-arrow-back'
                    leftColor='#fff'
                />
                <DetailImageCard name={name}/>
            </View>
        )
    }
}

export default DetailScreen