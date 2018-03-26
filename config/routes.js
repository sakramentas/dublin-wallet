import { StackNavigator } from 'react-navigation';
import SchoolListScene from '../src/scenes/SchoolList';
import SchoolPageScene from '../src/scenes/SchoolPage';

const RootStack = StackNavigator(
  {
    SchoolListScene: {
      screen: SchoolListScene,
    },
    SchoolPageScene: {
      screen: SchoolPageScene,
    },
  },
  {
    initialRouteName: 'SchoolListScene',
  }
);

export default RootStack;