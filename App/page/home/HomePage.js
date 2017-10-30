import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import HomeTopBar from "../../components/HomeTopBar";
import Banner from "../../components/Banner";
import CenterBar from "../../components/CenterBar";
import CategoryBar from "../../components/CategoryBar";
import SaleBar from "../../components/SaleBar";
import HotContentBar from "../../components/HotContentBar";

// 导入数据
var homeBean = require("../../data/HomeBean.json");
/**
 * 定义一个HomePage组件,并导出
 */
export default class HomePage extends Component<{}> {
    /**
     * 渲染组件的页面
     */
    render() {
        return (
            <View style={styles.viewStyle}>
                {/*引入HomeTopBar组件*/}
                <HomeTopBar>
                </HomeTopBar>
                <ScrollView>
                    {/*广告轮播图*/}
                    <Banner banners={homeBean.banners}>
                    </Banner>
                    {/*内容栏*/}
                    {this.renderItems(homeBean.itemBeans)}
                    {/*分类布局*/}
                    <View style={styles.categorys}>
                        {this.renderCategorys(homeBean.categroys)}
                    </View>
                    {/*特卖汇*/}
                    <SaleBar benefit={homeBean.benefit}>
                    </SaleBar>
                    {/*热门活动*/}
                    <HotContentBar hotPalys={homeBean.hotPalys}/>
                </ScrollView>
            </View>
        )
    }

    /**
     * 渲染内容栏
     * @param itemBeans
     */
    renderItems(itemBeans) {
        var Items = [];
        for (var i = 0; i < itemBeans.length; i++) {
            var itemBean = itemBeans[i];
            Items.push(
                <View key={i}>
                    <CenterBar itemBean={itemBean}>
                    </CenterBar>
                </View>
            )
        }
        return Items;
    }

    renderCategorys(categorys) {
        var Categorys = [];
        for (var i = 0; i < 3; i++) {
            var newCategory = categorys.slice(4 * i, 4 * (i + 1));
            Categorys.push(
                <View key={i}>
                    <CategoryBar categorys={newCategory}>
                    </CategoryBar>
                </View>
            )
        }
        return Categorys;
    }
}

/**
 * 页面的样式
 */
const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#e1e1e1'
    },
    categorys: {
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 5
    }
});