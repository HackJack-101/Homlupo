import {StackNavigator} from 'react-navigation';
import Home from './views/Home';
import PlayerHome from './views/PlayerHome';
import GameMasterHome from './views/GameMasterHome';

export default StackNavigator({
    Home: {
        screen: Home
    },
    PlayerHome: {
        screen: PlayerHome
    },
    GameMasterHome: {
        screen: GameMasterHome
    }
});