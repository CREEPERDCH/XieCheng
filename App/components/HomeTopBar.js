import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text, TextInput,
    View
} from 'react-native';

/**
 * 定义一个HomeTopBar组件,并导出
 */
export default class HomeTopBar extends Component<{}> {
    /**
     * 渲染组件的页面
     * @returns {XML}
     */
    render() {
        return (
            <View style={styles.viewStyle}>
                {/*左*/}
                <View style={styles.view1Style}>
                    <Image style={styles.image1Style}
                           source={require('../image/scan_icon.png')}>
                    </Image>
                </View>
                {/*中*/}
                <View style={styles.view2Style}>
                    <TextInput placeholder={'目的地/酒店/景点'}
                               underlineColorAndroid={'transparent'}
                               style={styles.textInputStyle}>
                    </TextInput>
                    <Image style={styles.searchStyle}
                           source={require("../image/search_icon.png")}>
                    </Image>
                </View>
                {/*右*/}
                <View style={styles.view3Style}>
                    <Image style={styles.image3Style}
                           source={require('../image/message_icon.png')}>
                    </Image>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'white',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    view1Style: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image1Style: {
        width: 23,
        height: 23
    },
    view2Style: {
        flex: 6,
        backgroundColor: '#e1e1e1',
        height: 30,
        borderRadius: 3
    },
    textInputStyle: {
        padding: 0,
        paddingTop: 4,
        paddingLeft: 30
    },
    searchStyle: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 3,
        left: 3
    },
    view3Style: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image3Style: {
        width: 27,
        height: 27
    }
});