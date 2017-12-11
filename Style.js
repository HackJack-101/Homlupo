const colors = {
    redWerewolf: '#620911',
    green: '#09621E',
    softBlue: '#0776AE',
    strongBlue: '#1D6C95',
    softRed: '#AE212E'
};

export default {
    colors,
    container: {
        flex: 1,
        backgroundColor: colors.redWerewolf,
        alignItems: 'center',
        justifyContent: 'center',
    },
    home: {
        container: {
            flex: 1,
            backgroundColor: colors.redWerewolf,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        titleText: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 30
        },
        titleView: {
            flex: 1,
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
        }
    },
    gameMasterHome: {
        container: {
            flex: 1,
            backgroundColor: colors.redWerewolf,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        inputPlayers: {
            alignSelf: 'stretch'
        },
        playersView: {
            alignSelf: 'stretch',
        },
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
                justifyContent: 'center'
            },
            actionsView: {
                flexDirection: 'row'
            },
            buttonView: {
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
    }
};