import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text, TextInput,
    View,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';

var {width} = Dimensions.get('window');


export default class Banner extends Component<{}> {
    /**
     * 定义接收数据
     * @type {{banners: null}}
     */
    static defaultProps = {
        banners: null
    };

    render() {
        //接收数据
        var banners = this.props.banners;
        return (
            <View>
                <Swiper height={150}
                        dot={<View style={{
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            width: 5,
                            height: 5,
                            borderRadius: 4,
                            margin: 3
                        }}>
                        </View>}
                        activeDot={<View style={{
                            backgroundColor: 'white',
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            margin: 3
                        }}>
                        </View>}
                        paginationStyle={{
                            bottom: 0,
                            right: 10,
                            justifyContent: 'flex-end'
                        }}
                        loop={true}
                        autoplay={true}>
                    {/*渲染banners的函数*/}
                    {this.renderBanners(banners)}
                </Swiper>
            </View>
        )
    }

    /**
     * 渲染banners的函数
     * @param banners
     */
    renderBanners(banners) {
        //1.定义组件数组
        var Banners = [];
        for (var i = 0; i < banners.length; i++) {
            //2.获取每一个banner
            var banner = banners[i];
            //3.添加组件
            Banners.push(
                <View key={i}>
                    <Image source={{uri: banner.imgUrl}}
                           style={{width: width, height: 150}}>
                    </Image>
                </View>
            )
        }
        //4.返回组件数组
        return Banners;
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 150,
        backgroundColor: 'pink'
    }
});