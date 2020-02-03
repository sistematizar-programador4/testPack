import 'react-native';
import React from 'react';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as products from '../src/actions/products.actions';
import * as locations from '../src/actions/locations.actions';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({})

beforeEach(() => {
  store.clearActions();
});

it('ADD_PRODUCT', () => {
  store.dispatch(products.addProduct({
    key: Math.random(),
    name: 'espinaca'}
  ));
  expect(store.getActions()).toMatchSnapshot();
});

it('DELETE_PRODUCT', () => {
  store.dispatch(products.deleteProduct(0.5880098879062283));
  expect(store.getActions()).toMatchSnapshot();
});

it('ADD_COORDS', () => {
  store.dispatch(locations.addCoords({
    key: Math.random(),
    location: '00000'}
  ));
  expect(store.getActions()).toMatchSnapshot();
});
