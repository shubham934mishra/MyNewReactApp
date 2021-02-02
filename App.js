//@flow
import React from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './src/navigations/RootNavigator';
import NavigationService from './src/navigations/NavigtionService';
import Store from './src/reducers/Store';

const App = () => (
    <Provider store={Store}>
        <RootNavigator
            ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}
        />
    </Provider>);


export default App;
