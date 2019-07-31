
import React, {Component} from 'react'
import { View } from 'react-native'
import  Header from '../components/uikit/Header'
import  ImageCard from '../components/uikit/ImageCard'
import  MainLayout from '../components/uikit/MainLayout'

const url = 'http://jsonplaceholder.typicode.com/posts';

export default class HomeScreen extends Component {
    state = {
        title: 'SoftTeco Film',
        data: []
    };

    componentDidMount = async() => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ data })
        } catch (e) {
            throw e
        }

    };

    render() {
        const { title, data } = this.state;
        let notUnique = data.map(({userId}) => userId);
        let unique = [...new Set(notUnique)];
        return (
            <View>
                <Header title={title}/>
                <MainLayout>
                    {
                        unique.map(item => (
                            <ImageCard name={item} key={item}/>
                        ))
                    }
                </MainLayout>
            </View>
        );
    }
}
