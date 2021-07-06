import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    logoContainer: {
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex:1,   
    },
    text:{
        fontSize: 24,
        lineHeight: 37,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "#FFFFFF",
    },
    btnsContainer:{
        flex:2,
        marginBottom:30,
        justifyContent:'flex-end',
        marginLeft:20,
        marginRight:20,
        width:"90%",
    }
})

export default style;