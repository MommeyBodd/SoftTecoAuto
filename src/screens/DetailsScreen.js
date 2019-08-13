import React, {Component} from 'react'
import {
    View,
    Alert,
    Animated,
    TouchableOpacity,
} from 'react-native'
import Header from "../components/uikit/Header";
import DetailImageCard from "../components/uikit/DetailImageCard";
import ScrollListItem from "../components/uikit/ScrollListItem";
import ConfirmButton from "../components/uikit/ConfirmButton";

import {scrollListItemsCount} from "../../constats";
import ScrollList from "../components/uikit/ScrollList";
import ScrollListPage from "../components/uikit/ScrollListPage";
import DetailLayout from "../components/uikit/DetailLayout";

class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnimImg: new Animated.Value(0),
            fadeAnimButton: new Animated.Value(0)
        };
    }

    componentDidMount() {
        Animated.stagger(5000, [
            Animated.timing(this.state.fadeAnimImg, {
                    toValue: 1,
                    duration: 5000,
                }
            ),
            Animated.timing(this.state.fadeAnimButton, {
                toValue: 1,
                duration: 500,
            })
        ]).start();
    }

    static getCurrentScrollListContent(params, pageCount): [] {
        let scrollListContent = [];
        let firstItemOnScrollListPage = 0;
        let lastItemOnScrollListPage = scrollListItemsCount;
        for (let i = 0; i < pageCount; i++) {
            let item = {
                pageNum: i,
                currPageItems: [params.slice(firstItemOnScrollListPage, lastItemOnScrollListPage)]
            };
            scrollListContent.push(item);
            firstItemOnScrollListPage += scrollListItemsCount;
            lastItemOnScrollListPage += scrollListItemsCount;
        }

        return scrollListContent;
    }

    render() {
        const {navigation} = this.props;
        let {fadeAnimImg} = this.state;
        let {fadeAnimButton} = this.state;
        const params = navigation.state.params.attributes;

        const pageCount = Math.ceil(params.length / scrollListItemsCount);

        const name = [...new Set(params.map(({userId}) => userId))];
        let scrollListContent = DetailScreen.getCurrentScrollListContent(params, pageCount);


        return (
            <DetailLayout>
                    <Header
                        detail
                        title={name}
                        onPress={() => this.props.navigation.goBack()}
                        leftIcon='ios-arrow-back'
                        leftColor='#fff'
                    />

                    <DetailImageCard name={name} fadeAnim={fadeAnimImg}/>

                    <ScrollList>
                        {
                            scrollListContent.map((page, id) => (
                                    <React.Fragment key={id}>
                                        <ScrollListPage>
                                            {
                                                page.currPageItems.map((attr) =>
                                                    attr.map((item, id) => (
                                                        <React.Fragment key={id}>
                                                            <TouchableOpacity
                                                                onPress={() => {
                                                                    Alert.alert(
                                                                        item.title,
                                                                        item.body,
                                                                    )
                                                                }}
                                                            >
                                                                <ScrollListItem attributes={item}/>
                                                            </TouchableOpacity>
                                                        </React.Fragment>
                                                    ))
                                                )
                                            }
                                        </ScrollListPage>
                                    </React.Fragment>
                                )
                            )
                        }
                    </ScrollList>

                    <ConfirmButton
                        fadeAnimButton={fadeAnimButton}
                        onPress={() => {
                            Alert.alert('Confirm', 'Confirmed!');
                            this.props.navigation.goBack()
                        }}
                    />
            </DetailLayout>
        )
    }
}

export default DetailScreen

