//@flow
import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef : any) {
  navigator = navigatorRef;
}

function navigate(routeName:any, params:any) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator
};
