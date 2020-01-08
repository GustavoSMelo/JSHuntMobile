import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Main, Product } from '../container/container';

const pages = createStackNavigator(
    {
        Main,
        Product,
    },
    {
        initialRouteName: 'Main',
    }
);

const Routes = createAppContainer(pages);

export default Routes;
