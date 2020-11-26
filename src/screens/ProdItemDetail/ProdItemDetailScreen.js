import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    ScrollView,
    Alert
} from "react-native";
import Colors from '../../config/Colors';
import { useDispatch, useSelector } from "react-redux";
import { WebView } from 'react-native-webview';
import { getProductItemDetail } from '../../store/actions/home';
import HeaderView from './HeaderView';
import Utils from '../../utils/Utils';
import styles from './ProdItemDetailScreenStyle';

const ProdItemDetailScreen = (props) => {
    const dataList = [
        {
            prodId: 0,
            prodName: "Trailer Coupler Lock",
            prodImage: require("../../../assets/ic_accessories.png"),
        },
        {
            prodId: 1,
            prodName: "Receiver Lock",
            prodImage: require("../../../assets/ic_accessories.png"),
        },
        {
            prodId: 2,
            prodName: "Trailer Coupler Lock",
            prodImage: require("../../../assets/ic_accessories.png"),
        },
    ];
    const [searchQuery, setSearchQuery] = useState("");
    const prodItemData = useSelector((state) => state.home.prodItemData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductItemDetail(props.route.params.prodId)).then(() => {
        });
    }, [dispatch]);

    const addToCartPress = async () => {
        var itemObj = {
            prodId: 0,
            prodName: "Sway Prevention 5",
            prodImage: "../../../assets/ic_accessories.png",
            prodQuantity: 1,
        };
        await Utils.storeCartListData(itemObj)
        Alert.alert(
            "Sway Management",
            "Product successfully added to your cart.",
            [
                {
                    text: "Cancel",
                    onPress: () => { },
                    style: "cancel"
                },
                { text: "Go To Cart", onPress: () => { gotoCartScreen() } }
            ],
            { cancelable: false }
        );
    }

    const gotoCartScreen = () => {
        props.navigation.navigate("CartScreen")
    }

    return (
        <View style={styles.container}>
            <HeaderView
                searchedData={(text) => { setSearchQuery(text) }}
                onBackPress={() => { props.navigation.goBack() }}
                onWishListPress={() => { props.navigation.navigate("CartScreen") }}
                onSearchPress={() => { }} />

            <ScrollView
                style={styles.scrollViewStyle}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                {/* <WebView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    style={styles.previewWebViewStyle}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={true}
                    startInLoadingState={true}
                    source={{ uri: prodItemData.preview_link }} /> */}

                <View style={{
                    marginStart: 20,
                    marginEnd: 20,
                }}>
                    <View style={styles.buttonStyle}>
                        <Image
                            style={{ width: "100%", height: 200 }}
                            resizeMode={"contain"}
                            source={{
                                uri: prodItemData.fileName,
                            }}
                        />
                    </View>
                    <Text style={{
                        fontSize: 20,
                        color: Colors.blue,
                        fontWeight: 'bold',
                        marginTop: 20,
                        textAlign: 'center',
                    }}>
                        {prodItemData.name}
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        color: Colors.blue,
                        marginTop: 5,
                        textAlign: 'center',
                    }}>
                        {prodItemData.description}
                    </Text>
                </View>

                {/* <WebView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    style={styles.webViewStyle}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={true}
                    startInLoadingState={true}
                    source={{ uri: 'https://expo.io' }} /> */}

                <FlatList
                    style={styles.flatListStyle}
                    data={dataList}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.itemViewStyle}>
                            <Image
                                style={styles.itemImageStyle}
                                resizeMode={'contain'}
                                source={require("../../../assets/ic_accessories.png")}
                            />
                            <Text style={styles.flatListItemTextStyle}>
                                Trailer Coupler Lock
                            </Text>
                        </View>
                    )}
                />
                <TouchableOpacity
                    onPress={() => { Utils.clearNavigationStack(props.navigation) }}>
                    <Image
                        style={styles.appLogoStyle}
                        source={require("../../../assets/ic_blue_ox_logo.png")} />
                </TouchableOpacity>
            </ScrollView>
        </View >
    );
};

export default ProdItemDetailScreen;



