import { StyleSheet } from 'react-native';
import Colors from '../../config/Colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    flatListStyle: {
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
    backgroundImageStyle: {
        width: '100%',
        height: 200,
    },
    itemTextStyle: {
        marginTop: 10,
        marginEnd: 10,
        alignSelf: 'flex-end',
        color: Colors.blue,
        fontWeight: 'bold',
        fontSize: 20
    },
    appLogoStyle: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center'
    }
})