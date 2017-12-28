import {StackNavigator} from 'react-navigation';
import Home from './views/Home';
import PlayerHome from './views/PlayerHome';
import GameMasterDebug from './views/GameMasterDebug';
import GameMasterOptions from './views/GameMasterOptions';
import GameMasterHome from './views/GameMasterHome';
import Game from './views/Game';
import GetCard from './views/GetCard';
import PlayerOptions from "./views/PlayerOptions";

export default StackNavigator({
    Home: {
        screen: Home
    },
    PlayerHome: {
        screen: PlayerHome
    },
    PlayerOptions: {
        screen: PlayerOptions
    },
    GameMasterDebug: {
        screen: GameMasterDebug
    },
    GameMasterOptions: {
        screen: GameMasterOptions
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