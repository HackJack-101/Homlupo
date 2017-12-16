const colors = {
    redWerewolf: 'transparent',
    green: '#09621E',
    softBlue: '#0776AE',
    strongBlue: '#1D6C95',
    softRed: '#AE212E',
    grey: "#666666",
    linearGradient: {
        start: '#0A1620',
        end: '#201F43'
    }
};

export default {
    colors,
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    home: {
        gameMasterButton: {
            flex: 1,
            alignSelf: 'stretch',
            justifyContent: 'center'
        },
        playerButton: {
            flex: 1,
            alignSelf: 'stretch',
            justifyContent: 'center',

        },
        buttonView: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            alignSelf: 'stretch'
        },
        titleText: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 30
        },
        titleView: {
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center'
        },
        actionView: {
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'stretch'
        }
    },
    button: {
        light: {
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bold'
        },
        generic: {
            borderColor: 'white',
            marginHorizontal: 5
        },
        idle: {
            backgroundColor: colors.green,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'white',
            height: 40
        },
        busy: {
            backgroundColor: colors.grey,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'white',
            height: 40
        },
        error: {
            backgroundColor: colors.softRed,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'white',
            height: 40
        }
    },
    gameMasterHome: {
        container: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            alignSelf: 'stretch'
        },
        pickView: {
            flex: 5,
            alignSelf: 'stretch'
        },
        splitView: {
            flex: 5,
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        recapView: {
            flex: 1,
            alignSelf: 'stretch',
            justifyContent: 'space-between'
        },
        inputPlayers: {
            alignSelf: 'stretch'
        },
        playersView: {
            alignSelf: 'stretch',
            backgroundColor: 'transparent',
            paddingVertical: 5,
            paddingHorizontal: 15,
            flex:6
        },
        submitView: {
            flex:1,
            alignSelf: 'stretch',
            paddingHorizontal: 5,
            paddingVertical: 10
        }
        ,
        charactersView: {
            marginTop: 10,
            alignSelf: 'stretch'
        }
    },
    components: {
        numericInput: {
            view: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 40,
                paddingVertical: 5,
                paddingHorizontal: 5,
            },
            textInput: {
                width: 40,
                height: 30,
                borderColor: 'white',
                borderWidth: 1,
                color: 'white',
                paddingHorizontal: 5,
                paddingVertical: 1,
                textAlign: 'left'
            },
            title: {
                color: 'white',
                marginRight: 5
            },
            titleView: {
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'transparent'
            },
            actionsView: {
                flexDirection: 'row'
            },
            buttonView: {
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent'
            }
        }
    }
};