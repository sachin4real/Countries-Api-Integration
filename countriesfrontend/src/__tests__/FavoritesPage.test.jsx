/// <reference types="vitest" />
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../src/redux/userSlice';
import FavoritesPage from '../../src/pages/FavoritesPage';
import { MemoryRouter } from 'react-router-dom';

const mockState = {
  user: {
    user: { email: 'test@example.com' },
    favorites: [
      {
        name: { common: 'Canada' },
        flags: { png: 'https://flagcdn.com/w320/ca.png' },
        cca3: 'CAN',
        region: 'Americas',
      },
    ],
    loading: false,
    error: null,
  },
};

const renderWithProviders = (ui, state = mockState) => {
  const store = configureStore({
    reducer: { user: userReducer },
    preloadedState: state,
  });

  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );
};

describe('FavoritesPage', () => {
  it('displays favorite countries', () => {
    renderWithProviders(<FavoritesPage />);
    expect(screen.getByText('Canada')).toBeInTheDocument();
  });

  it('shows message when no favorites', () => {
    const emptyState = { ...mockState, user: { ...mockState.user, favorites: [] } };
    renderWithProviders(<FavoritesPage />, emptyState);
    expect(screen.getByText(/no favorite countries yet/i)).toBeInTheDocument();
  });
});
