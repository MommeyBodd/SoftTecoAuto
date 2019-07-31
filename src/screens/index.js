import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import { SOFTTECOFILM_HOME, SOFTTECOFILM_DETAILS } from '../routes'

export default createStackNavigator (
    {
        [SOFTTECOFILM_HOME]: HomeScreen
    },
    {
        headerMode: 'none'
    }
)