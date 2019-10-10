import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import {Animated} from 'react-native'

// router
import Router from './src/router/Router';

// auth
import Login from './src/views/auth/Login';
import ForgotPassword from './src/views/auth/ForgotPassword';

// content
import Catalog from './src/views/content/Catalog';
import Downloads from './src/views/content/Downloads';
import LearningPath from './src/views/content/LearningPath';
import Lessons from './src/views/content/Lessons';
import Overview from './src/views/content/Overview';
import Packs from './src/views/content/Packs';
import Search from './src/views/content/Search';

// misc
import Privacy from './src/views/misc/Privacy';
import Terms from './src/views/misc/Terms';

// onboard
import NewUser from './src/views/onboard/NewUser';
import PackUser from './src/views/onboard/PackUser';
import Subscriber from './src/views/onboard/Subscriber';

// user
import LoginCredentials from './src/views/user/LoginCredentials';
import Membership from './src/views/user/Membership';
import Notifications from './src/views/user/Notifications';
import Payments from './src/views/user/Payments';
import Profile from './src/views/user/Profile';
import Support from './src/views/user/Support';

const AppNavigator = createStackNavigator(
    {
        initialRoute: Router,

        // router
        ROUTER: {screen:Router},

        // auth 
        LOGIN: {screen:Login},
        FORGOTPASSWORD: {screen:ForgotPassword},

        // content
        CATALOG: {screen:Catalog},
        DOWNLOADS: {screen:Downloads},
        LEARNINGPATH: {screen:LearningPath},
        LESSONS: {screen:Lessons},
        OVERVIEW: {screen:Overview},
        PACKS: {screen:Packs},
        SEARCH: {screen:Search},

        // misc
        PRIVACY: {screen:Privacy},
        TERMS: {screen:Terms},

        // onboard
        NEWUSER: {screen:NewUser},
        PACKUSER: {screen:PackUser},
        SUBSCRIBER: {screen:Subscriber},

        // user
        LOGINCREDENTIALS: {screen:LoginCredentials},
        MEMBERSHIP: {screen:Membership},
        NOTIFICATIONS: {screen:Notifications},
        PAYMENTS: {screen:Payments},
        PROFILE: {screen:Profile},
        SUPPORT: {screen:Support},
    },
    {
        headerMode:'screen',
        mode:'card',
        defaultNavigationOptions: {gesturesEnabled: false,},
        transitionConfig: () => (
            {transitionSpec: {duration: 0, timing: Animated.timing}}
        )
    },
);

export default createAppContainer(AppNavigator);