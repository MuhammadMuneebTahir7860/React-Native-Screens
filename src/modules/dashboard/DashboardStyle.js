import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    dashBoardContainer: {
        backgroundColor: "#F7F7F9",
    },
    headerContainer: {
        justifyContent: 'flex-end',
        marginTop:50,
    },
    headerRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        width:'90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    dashboardHeading: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Robot',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 0.15,
    },
    headingContainer: {
        justifyContent: "center",
        marginBottom:30,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop:30,
        width:'90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    detailsContainer: {
        paddingTop:10,
        paddingBottom:20,
        height:'auto',
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        shadowColor: "#000",
        marginBottom:20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textRow:{
        display:'flex',
        flexDirection:'row',
    },
    titleContainer:{
        marginTop:15,
        height:30,
        backgroundColor:'#227BFF',
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'rgba(187,187,187,0.5)',
   },
});

export default style;