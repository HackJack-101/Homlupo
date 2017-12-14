import {StackNavigator} from 'react-navigation';
import Home from './views/Home';
import PlayerHome from './views/PlayerHome';
import GameMasterHome from './views/GameMasterHome';
import Game from './views/Game';
import GetCard from './views/GetCard';

export default StackNavigator({
    Home: {
        screen: Home
    },
    PlayerHome: {
        screen: PlayerHome
    },
    GameMasterHome: {
        screen: GameMasterHome
    },
    Game: {
        screen: Game
    },
    GetCard: {
        screen: GetCard
    }
});