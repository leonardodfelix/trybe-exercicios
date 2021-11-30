import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);

  it('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  it('the click should increment by 1', () => {
    renderWithRedux(<App />);
    const btn = screen.getByRole('button', { name: /clique aqui/i });
    userEvent.click(btn);
    expect(screen.queryByText('1')).toBeInTheDocument();
  });

  it('the counter at 10 should display 11 after click', () => {
    // const testState = { counter: 10 }
    // const testStore = createStore(combineReducers({ clickReducer }), testState)
    // renderWithRedux(<App />, testStore);
    renderWithRedux(<App />);
    const btn = screen.getByRole('button', { name: /clique aqui/i });
    for (let index = 0; index < 10; index += 1) userEvent.click(btn);
    expect(screen.queryByText('10')).toBeInTheDocument();
    userEvent.click(btn);
    expect(screen.queryByText('11')).toBeInTheDocument();
  });
});
