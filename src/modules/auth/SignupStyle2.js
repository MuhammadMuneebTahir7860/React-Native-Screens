import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    logoContainer:{
        flex:0.2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20
    },
    formContainer:{
        flex:1,
        backgroundColor:'white',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
    },
    headingContainer:{
        flex:1,
    },
    heading:{
        paddingTop:20,
        fontWeight:'bold',
        fontSize:24,
        textAlign:'center',
    },
    inputsContainer:{
        marginTop:10,
        flex:5,
        width:"90%",
        marginLeft:20,
    },
    btnContainer:{
        flex:2,
        justifyContent:'flex-end',
        width:'90%',
        marginLeft:20,
        marginBottom:20,
    }
});

export default style;