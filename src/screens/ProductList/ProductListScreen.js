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
import { Strings } from '../../config/Constant';
import { useDispatch, useSelector } from "react-redux";
import HeaderView from './HeaderView';
import Utils from '../../utils/Utils';
import { getProdCategories } from '../../store/actions/home';
import styles from './ProductListScreenStyle';

const ProductListScreen = (props) => {
    const prodCategories = useSelector((state) => state.home.prodCategories);
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProdCategories()).then(() => {
        });
    }, [dispatch]);

    const onItemPress = (item) => {
        if (item.has_subcategory) {
            props.navigation.navigate("ProductSubCatListScreen", {
                prodCatId: item.id
            });
        }
        else {
            props.navigation.navigate("ProductDetailScreen", {
                prodId: item.id
            });
        }
    }

    return (
        <View style={styles.container}>
            <HeaderView
                searchedData={(text) => { setSearchQuery(text) }}
                onWishListPress={() => { props.navigation.navigate("CartScreen") }}
                onSearchPress={() => { }} />
            <ScrollView style={styles.container}>
                <View>
                    {prodCategories.length > 0 ?
                        <View></View>
                        :
                        <Text
                            style={{ fontSize: 20, alignSelf: 'center', marginTop: 50 }}>
                            {Strings.EMPTY_PROD_CAT}
                        </Text>
                    }
                    <FlatList
                        style={styles.flatListStyle}
                        showsVerticalScrollIndicator={false}
                        data={prodCategories.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => { onItemPress(item) }}
                                style={styles.buttonStyle}>
                                <ImageBackground
                                    resizeMode={'stretch'}
                                    source={{
                                        uri: item.fileName,
                                    }}
                                    style={styles.backgroundImageStyle}>
                                    <Text style={styles.itemTextStyle}>{item.name}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        )}
                    />
                    <Image
                        style={styles.appLogoStyle}
                        source={require("../../../assets/ic_blue_ox_logo.png")} />
                </View>
            </ScrollView>
        </View >
    );
};

export default ProductListScreen;



