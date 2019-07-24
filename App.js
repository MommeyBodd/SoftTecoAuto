
import React, {Component} from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import  Header from './src/components/uikit/Header'
import  ImageCard from './src/components/uikit/ImageCard'
import { h, w } from './constats'

const url = 'http://jsonplaceholder.typicode.com/posts';

export default class App extends Component {
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
        const {container} = styles;
        const { title, data } = this.state;
        let notUnique = data.map(({userId}) => userId);
        let unique = [...new Set(notUnique)];
    return (
        <View>
          <Header title={title}/>
          <ScrollView>
              <View style={container}>
                  {
                      unique.map(item => (
                        <ImageCard name={item} image={'./img/'+item+'.png'} key={item}/>
                      ))
                  }
              </View>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        marginBottom: 150
    }
});