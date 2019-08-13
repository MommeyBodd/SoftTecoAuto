
import React, {Component} from 'react'
import { View } from 'react-native'
import  Header from '../components/uikit/Header'
import  ImageCard from '../components/uikit/ImageCard'
import  MainLayout from '../components/uikit/MainLayout'
import { SOFTTECOFILM_DETAILS } from '../routes'

const URL = 'http://jsonplaceholder.typicode.com/posts';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'SoftTeco Film',
            data: []
        };
    }

    componentDidMount(){
        fetch(URL)
            .then(res=>res.json())
            .then(res=>this.setState({
                data:res
            }))
    }

    render() {
        const { navigate } = this.props.navigation;
        const notUnique = this.state.data.map(dataItem => dataItem.userId);
        const unique = [...new Set(notUnique)];
        return (
            <View>
                <Header title={this.state.title}/>
                <MainLayout>
                    {
                        unique.map((item, id) => (
                            <React.Fragment key={id}>
                                <ImageCard
                                    name={item}
                                    onPress={() => {
                                        const attributes = this.state.data.filter(film => film.userId === item);
                                        navigate('SOFTTECOFILM_DETAILS',  { attributes }  );
                                    }}
                                />
                            </React.Fragment>

                        ))
                    }
                </MainLayout>
            </View>
        );
    }
};