import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from "../home/HomePage";

/**
 * 定义一个MainPage组件,并导出
 */
export default class MainPage extends Component<{}> {

    /**
     * 状态机
     * @type {{selected: string}}
     */
    state = {
        selected: '首页'
    };

    /**
     * 渲染组件的页面
     * @returns {XML}
     */
    render() {
        return (
            <TabNavigator tabBarStyle={{backgroundColor: '#e1e1e1', height: 50}}>
                <TabNavigator.Item
                    renderIcon={
                        () => <Image style={styles.imageStyle}
                                     source={require('../../image/home_icon_nornol.png')}>

                        </Image>}
                    title="首页"
                    selected={this.state.selected === '首页'}
                    renderSelectedIcon={
                        () => <Image style={styles.imageStyle}
                                     source={require('../../image/home_icon_press.png')}>

                        </Image>}
                    onPress={
                        () => this.setState({selected: '首页'})
                    }>
                    {/*引入HomePage组件*/}
                    <HomePage>

                    </HomePage>
                </TabNavigator.Item>
                <TabNavigator.Item
                    renderIcon={
                        () => <Image style={styles.imageStyle}
                                     source={require('../../image/plan_icon_nornol.png')}>

                        </Image>}
                    title="行程"
                    selected={this.state.selected === '行程'}
                    renderSelectedIcon={
                        () => <Image style={styles.imageStyle}
                                     source={require('../../image/plan_icon_press.png')}>

                        </Image>}
                    onPress={
                        () => this.setState({selected: '行程'})
                    }>
                    <Text>Plan</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    renderIcon={
                        () => <Image style={styles.imageStyle}
                                     source={require('../../image/customer_icon_nornol.png')}>

                        </Image>}
                    title="客服"
                    selected={this.state.selected === '客服'}
                    renderSelectedIcon={
                        () => <Image style={styles.imageStyle}
                                     source={require('../../image/customer_icon_press.png')}>

                        </Image>}
                    onPress={
                        () => this.setState({selected: '客服'})
                    }>
                    <Text>Customer</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    renderIcon={
                        () => <Image style={styles.imageStyle}
                                     source={require('../../image/mine_icon_nornol.png')}>

                        </Image>}
                    title="我的"
                    selected={this.state.selected === '我的'}
                    renderSelectedIcon={
                        () => <Image style={styles.imageStyle}
                                     source={require('../../image/mine_icon_press.png')}>

                        </Image>}
                    onPress={
                        () => this.setState({selected: '我的'})
                    }>
                    <Text>Mine</Text>
                </TabNavigator.Item>


            </TabNavigator>
        );
    }
}
/**
 * 页面的样式
 */
const styles = StyleSheet.create({
    imageStyle: {
        width: 24,
        height: 24,
        marginTop: 2
    }
});
