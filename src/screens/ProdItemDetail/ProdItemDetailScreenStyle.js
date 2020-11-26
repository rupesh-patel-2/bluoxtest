import { StyleSheet } from 'react-native';
import Colors from '../../config/Colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    scrollViewStyle: {
        flex: 1,
    },
    backgroundImageStyle: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        borderColor: Colors.blue,
        borderWidth: 1,
        overflow: 'hidden',
        marginTop: 20,
    },
    itemTextStyle: {
        alignSelf: 'center',
        marginTop: 20,
        color: Colors.blue,
        fontWeight: 'bold',
        fontSize: 30
    },
    previewWebViewStyle: {
        marginTop: 10,
    },
    webViewStyle: {
        marginTop: 10,
        height: 5000,
    },
    itemViewStyle: {
        borderRadius: 10,
        borderColor: Colors.gray,
        borderWidth: 1,
        overflow: 'hidden',
        padding: 10,
        marginStart: 20,
    },
    itemImageStyle: {
        alignSelf: 'center',
        width: 250,
        height: 150
    },
    flatListItemTextStyle: {
        alignSelf: 'center',
        color: Colors.blue,
        fontSize: 20
    },
    flatListStyle: {
        marginTop: 20,
        marginEnd: 20,
        marginBottom: 30,
    },
    appLogoStyle: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center'
    },
    cart: {
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 10,
        paddingStart: 20,
        paddingEnd: 20,
        backgroundColor: Colors.blue,
    },
    cartText: {
        fontSize: 16,
        color: Colors.white,
        textAlign: 'center',
    },




    prodFlatListStyle: {
        marginTop: 20,
        marginStart: 10,
        marginEnd: 10,
    },
    buttonStyle: {
        borderRadius: 10,
        borderColor: Colors.blue,
        borderWidth: 1,
        overflow: 'hidden',
        marginTop: 10,
    },
    prodBackgroundImageStyle: {
        width: '100%',
        height: 200,
    },
    prodItemTextStyle: {
        marginTop: 10,
        marginEnd: 10,
        alignSelf: 'flex-end',
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 20
    },
    prodCart: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: Colors.gray,
        justifyContent: 'center',
    },
    prodCartText: {
        fontSize: 20,
        color: Colors.white,
        textAlign: 'center',
    },
    placeOrderBtn: {
        marginRight: 50,
        marginLeft: 50,
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        backgroundColor: Colors.blue,
    },
    placeOrderText: {
        fontSize: 20,
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    }









})