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
import HeaderView from './HeaderView';
import Utils from '../../utils/Utils';
import { getProdSubCat } from '../../store/actions/home';
import { Strings } from '../../config/Constant';
import styles from './ProductDetailScreenStyle';

const ProductDetailScreen = (props) => {
    const prodSubCategories = useSelector((state) => state.home.prodSubCategories);
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProdSubCat(props.route.params.prodId)).then(() => {
        });
    }, [dispatch]);

    const onItemPress = (item) => {
        props.navigation.navigate("ProdItemDetailScreen", {
            prodId: item.id
        });
    }

    const addToCartPress = async (item) => {
        var itemObj = {
            prodId: 0,
            prodName: "Sway Prevention 5",
            prodImage: "../../../assets/ic_accessories.png",
            prodQuantity: 1,
        };
        await Utils.storeCartListData(item)
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
                onWishListPress={() => { gotoCartScreen() }}
                onSearchPress={() => { }} />
            <ScrollView style={styles.container}>
                <View>
                    {prodSubCategories.length > 0 ?
                        <View></View>
                        :
                        <Text
                            style={{ fontSize: 20, alignSelf: 'center', marginTop: 50 }}>
                            {Strings.EMPTY_PROD_LIST}
                        </Text>
                    }
                    {/* <FlatList
                        style={styles.flatListStyle}
                        data={prodSubCategories.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => { onItemPress(item) }}
                                style={styles.buttonStyle}>
                                <ImageBackground
                                    resizeMode={'stretch'}
                                    source={require("../../../assets/ic_sub_prod.png")}
                                    style={styles.backgroundImageStyle}>
                                    <Text style={styles.itemTextStyle}>{item.name}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        )}
                    /> */}

                    <FlatList
                        style={styles.prodFlatListStyle}
                        data={prodSubCategories.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => { onItemPress(item) }}>
                                <View style={styles.buttonStyle}>
                                    <View style={{ padding: 20, }}>
                                        <View style={{
                                            flexDirection: 'row'
                                        }}>
                                            <Image
                                                style={{ width: 100, height: 100 }}
                                                resizeMode={"stretch"}
                                                source={{
                                                    uri: item.fileName + "",
                                                }}
                                            />
                                            <View style={{ marginStart: 15, }}>
                                                <Text
                                                    numberOfLines={2}
                                                    style={{
                                                        width: 250,
                                                        fontWeight: 'bold',
                                                        color: Colors.blue,
                                                        fontSize: 18
                                                    }}>
                                                    {item.name}
                                                </Text>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    marginTop: 10
                                                }}>
                                                    <TouchableOpacity
                                                        style={styles.cart}
                                                        onPress={() => { addToCartPress(item) }}>
                                                        <Text style={styles.cartText}>Add To Cart</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />

                    <TouchableOpacity
                        onPress={() => { Utils.clearNavigationStack(props.navigation) }}>
                        <Image
                            style={styles.appLogoStyle}
                            source={require("../../../assets/ic_blue_ox_logo.png")} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    );
};

export default ProductDetailScreen;



