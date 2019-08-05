import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import { SOFTTECOFILM_HOME, SOFTTECOFILM_DETAILS } from '../routes'
import DetailScreen from "./DetailsScreen";

export default createStackNavigator (
    {
        [SOFTTECOFILM_HOME]: HomeScreen,
        [SOFTTECOFILM_DETAILS]: DetailScreen
    },
    {
        headerMode: 'none'
    }
)