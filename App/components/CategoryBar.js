import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text, TextInput,
    View,
    Dimensions
} from 'react-native';

export default class CategoryBar extends Component<{}> {

    static defaultProps = {
        categorys: null
    };

    render() {
        var categoryItems = this.props.categorys;
        return (
            <View style={styles.viewStyle}>
                {this.renderCategories(categoryItems)}
            </View>
        )
    }

    renderCategories(categoryItems) {
        var Items = [];
        for (var i = 0; i < categoryItems.length; i++) {
            var itemBean = categoryItems[i];
            Items.push(
                <View style={styles.view2Style} key={i}>
                    <Image style={styles.img} source={{uri: itemBean.icon}}/>
                    <Text>{itemBean.title}</Text>
                </View>
            )
        }
        return Items;
    }

}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row'
    },
    view2Style: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderRightColor: '#f8f8f8'
    },
    img: {
        width: 20,
        height: 20, marginBottom: 5
    }
});