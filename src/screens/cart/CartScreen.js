import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    ScrollView,
    TextInput,
    Alert
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import HeaderView from './HeaderView';
import Colors from '../../config/Colors';
import Utils from '../../utils/Utils';
import { Strings } from '../../config/Constant';
import styles from './CartScreenStyle';

const CartScreen = (props) => {
    const emailString = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.+[A-Za-z]{2,64}";
    const [cartList, setCartList] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        getDataFromStorage();
    }, [dispatch]);

    const getDataFromStorage = async () => {
        var getData = await Utils.getCartListData();
        if (getData != undefined && getData != null) {
            setCartList(JSON.parse(getData))
        }
    }

    const addProdQuantity = (position, item) => {
        cartList[position].prodQuantity = cartList[position].prodQuantity + 1
        setCartList(cartList)
        setRefresh(!refresh)
    }

    const removeProdQuantity = (position, item) => {
        if (cartList[position].prodQuantity > 1) {
            cartList[position].prodQuantity = cartList[position].prodQuantity - 1
            setCartList(cartList)
            setRefresh(!refresh)
        }
    }

    const onDeleteItemPress = async (position, item) => {
        await Utils.removeItemFromCartList(position)
        cartList.splice(position, 1)
        setCartList(cartList)
        setRefresh(!refresh)
    }

    const textChangeHandler = (text) => {
        setEmail(text);
    };

    const placeOrderPress = () => {
        if (email.trim() == "") {
            setErrorMsg(Strings.ENTER_EMAIL)
            return;
        }
        else if (!email.match(emailString)) {
            setErrorMsg(Strings.ENTER_VALID_EMAIL)
            return;
        }
        setErrorMsg("")
        Alert.alert(
            "",
            Strings.ORDER_PLACED,
            [
                {
                    text: "OK", onPress: () => {
                        Utils.clearCartListData()
                        props.navigation.navigate("ProductListScreen")
                    }
                }
            ],
            { cancelable: false }
        );
    }

    return (
        <View style={styles.container}>
            <HeaderView onBackPress={() => { props.navigation.goBack() }} />
            <ScrollView style={styles.container}>
                <View>
                    <FlatList
                        extraData={refresh}
                        style={styles.flatListStyle}
                        data={cartList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
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
                                                {/* <TouchableOpacity
                                                    style={styles.cart}
                                                    onPress={() => { removeProdQuantity(index, item) }}>
                                                    <Text style={styles.cartText}>-</Text>
                                                </TouchableOpacity>
                                                <Text style={{
                                                    textAlign: 'center',
                                                    alignSelf: 'center',
                                                    color: Colors.blue,
                                                    fontSize: 20,
                                                    marginStart: 10,
                                                    marginEnd: 10
                                                }}>{item.prodQuantity}</Text>
                                                <TouchableOpacity
                                                    style={styles.cart}
                                                    onPress={() => { addProdQuantity(index, item) }}>
                                                    <Text style={styles.cartText}>+</Text>
                                                </TouchableOpacity> */}
                                                <TouchableOpacity
                                                    onPress={() => { onDeleteItemPress(index, item) }}>
                                                    <Image
                                                        resizeMode={"contain"}
                                                        style={{ width: 25, height: 25, }}
                                                        source={require("../../../assets/ic_delete_item.png")}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}
                    />

                    {cartList.length > 0 ?
                        <View>
                            <TextInput
                                style={{
                                    fontSize: 20,
                                    color: Colors.blue,
                                    textAlign: 'center',
                                    marginStart: 10,
                                    marginEnd: 10,
                                    marginTop: 30,
                                    height: 40,
                                    borderColor: Colors.blue,
                                    borderWidth: 1,
                                    borderRadius: 5,
                                }}
                                onChangeText={text => { textChangeHandler(text) }}
                                keyboardType={"email-address"}
                                autoCorrect={false}
                                autoCapitalize="none"
                                placeholder="Enter email to place order"
                                value={email}
                            />
                            <Text
                                style={{
                                    color: Colors.red,
                                    marginStart: 10,
                                    marginEnd: 10,
                                    marginTop: 5,
                                    marginBottom: 10,
                                    fontSize: 14,
                                }}>
                                {errorMsg}
                            </Text>
                            <TouchableOpacity
                                style={styles.placeOrderBtn}
                                onPress={() => { placeOrderPress() }}>
                                <Text style={styles.placeOrderText}>Place Order</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <Text
                            style={{ fontSize: 20, alignSelf: 'center', marginTop: 50 }}>
                            {Strings.EMPTY_CART}
                        </Text>
                    }

                    <TouchableOpacity
                        onPress={() => { Utils.clearNavigationStack(props.navigation) }}>
                        <Image
                            style={styles.appLogoStyle}
                            source={require("../../../assets/ic_blue_ox_logo.png")} />
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>
    );
};

export default CartScreen;



