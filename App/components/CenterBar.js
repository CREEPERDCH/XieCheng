import React, {Component} from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class CenterBar extends Component<{}> {

    static defaultProps = {
        itemBean: null
    };

    render() {
        var itemBean = this.props.itemBean;
        return (
            <View style={styles.viewStyle}>
                {/*左*/}
                <View style={styles.view1Style}>
                    {this.renderLeftItem(itemBean)}
                </View>
                {/*中*/}
                {this.renderItemBean(itemBean, 0, 1)}
                {/*右*/}
                {this.renderItemBean(itemBean, 2, 3)}
            </View>
        )
    }

    renderLeftItem(itemBean) {
        if (itemBean.type === 0) {
            return (
                <View style={{
                    flex: 1,
                    backgroundColor: itemBean.bgColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: 'white',
                    borderRightWidth: 1,
                    borderRightColor: 'white'
                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 16
                    }}>
                        {itemBean.title}
                    </Text>
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            marginTop: 10
                        }}
                        source={{
                            uri: itemBean.imageUrl
                        }}>
                    </Image>
                </View>
            )
        } else if (itemBean.type === 1) {
            return (
                this.renderItemBean(itemBean, 4, 5)
            )
        }
    }

    renderItemBean(itemBean, index1, index2) {
        return (
            <View style={styles.view2Style}>
                {/*上*/}
                <View style={{
                    flex: 1,
                    backgroundColor: itemBean.bgColor,
                    justifyContent: 'center',
                    borderRightWidth: 1,
                    borderRightColor: 'white',
                    borderBottomWidth: 1,
                    borderBottomColor: 'white'
                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 16
                    }}>
                        {itemBean.items[index1].title}
                    </Text>
                </View>
                {/*下*/}
                <View style={{
                    flex: 1,
                    backgroundColor: itemBean.bgColor,
                    justifyContent: 'center',
                    borderRightWidth: 1,
                    borderRightColor: 'white',
                    borderBottomWidth: 1,
                    borderBottomColor: 'white'
                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 16
                    }}>
                        {itemBean.items[index2].title}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 120,
        borderTopColor: 'white',
        backgroundColor: 'white',
        borderTopWidth: 5,
        flexDirection: 'row'
    },
    view1Style: {
        flex: 1
    },
    view2Style: {
        flex: 1,
    },
    view3Style: {
        flex: 1
    }
});