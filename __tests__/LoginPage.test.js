
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import thunk from 'redux-thunk';
import LoginPage from '../src/components/LoginPage';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ LoginReducer: { data: 'shubham' } });

const baseProps = {
  navigation: {
    navigate: jest.fn()
  },
  dataSource: {},
  callService: jest.fn(),
  store: jest.fn(),
  dispatch: jest.fn()
};


test('renders correctly', () => {
  const tree = renderer.create(<Provider store={store}>
    <LoginPage {...baseProps} />
  </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

//Demo test
describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});


test('Testing in Login Page', async () => {
  const { getByTestId, queryByText } = render(
    <Provider store={store}>
      <LoginPage {...baseProps} />
    </Provider>
  );

  // Test For TextInput in Login Screen
  const textInput = getByTestId('TextInput');
  fireEvent.changeText(textInput, 'Shubham mishra: checked');


  // Test For Buttons in Login Screen 
  const navigateToButtons = getByTestId('loginButton');
  fireEvent.press(navigateToButtons);
  const loginKey = await queryByText('Shubham : login');
  expect(loginKey).toBeDefined();
  expect(baseProps.navigation.navigate)
    .toHaveBeenCalledWith('Dashboard');
}
);
