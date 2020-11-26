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
import Colors from '../../config/Colors';
import { Strings } from '../../config/Constant';
import { useDispatch, useSelector } from "react-redux";
import Constants from 'expo-constants';

const HeaderView = (props) => {
    const {
        title = Strings.APP_NAME,
        onBackPress,
    } = props;
    const dispatch = useDispatch();

    useEffect(() => {
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.subContainer} >
                <View style={styles.itemContainer}>
                    <TouchableOpacity onPress={onBackPress}>
                        <Image
                            resizeMode={"contain"}
                            style={[styles.imageStyle, { marginEnd: 20 }]}
                            source={require("../../../assets/ic_back.png")}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textStyle}>
                        {title}
                    </Text>
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

