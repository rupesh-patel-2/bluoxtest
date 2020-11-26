import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from "react-native";
import Colors from '../config/Colors';
import { Strings } from '../config/Constant';
import { useDispatch, useSelector } from "react-redux";
import Constants from 'expo-constants';

const HeaderView = (props) => {
    const {
        title = Strings.APP_NAME,
        isBackVisible = false,
        onBackPress,
        onWishListPress,
        onSearchPress,
        searchedData
    } = props;
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
    }, [dispatch]);

    const searchQueryChangeHandler = (text) => {
        setSearchQuery(text);
        searchedData(text)
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.subContainer} >
                {
                    isSearchVisible ?
                        <TextInput
                            selectionColor={Colors.white}
                            style={{
                                color: Colors.white,
                                fontSize: 20,
                            }}
                            maxLength={30}
                            autoFocus={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Type here to translate!"
                            onChangeText={text => searchQueryChangeHandler(text)}
                        />
                        :
                        <View style={styles.itemContainer}>
                            <TouchableOpacity onPress={onBackPress}>
                                {isBackVisible ?
                                    <Image
                                        resizeMode={"contain"}
                                        style={[styles.imageStyle, { marginEnd: 20 }]}
                                        source={require("../../assets/ic_back.png")}
                                    />
                                    :
                                    <View></View>
                                }
                            </TouchableOpacity>
                            <Text style={styles.textStyle}>
                                {title}
                            </Text>
                        </View>
                }

                <View style={styles.itemContainer}>
                    <TouchableOpacity onPress={onWishListPress}>
                        <Image
                            resizeMode={"contain"}
                            style={styles.imageStyle}
                            source={require("../../assets/ic_wish_list.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setIsSearchVisible(!isSearchVisible)
                    }}>
                        <Image
                            resizeMode={"contain"}
                            style={[styles.imageStyle, { marginStart: 10 }]}
                            source={require("../../assets/ic_search.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blue
    },
    subContainer: {
        marginTop: Constants.statusBarHeight,
        height: 55,
        marginStart: 10,
        marginEnd: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    itemContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageStyle: {
        width: 20,
        height: 20,
    },
    textStyle: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default HeaderView;

