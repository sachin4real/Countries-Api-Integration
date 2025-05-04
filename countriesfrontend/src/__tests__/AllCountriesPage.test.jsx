/// <reference types="vitest" />
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom'; // ✅ Add MemoryRouter
import userReducer from '../../src/redux/userSlice';
import AllCountriesPage from '../../src/pages/AllCountriesPage';
import { vi } from 'vitest';
import axios from 'axios';

// ✅ Mock axios
vi.mock('axios');

// ✅ Mock country data
const mockCountries = [
  {
    name: { common: 'Sri Lanka' },
    cca3: 'LKA',
    region: 'Asia',
    languages: { sin: 'Sinhala', tam: 'Tamil' },
    flags: { png: 'https://flagcdn.com/w320/lk.png' },
  },
  {
    name: { common: 'France' },
    cca3: 'FRA',
    region: 'Europe',
    languages: { fra: 'French' },
    flags: { png: 'https://flagcdn.com/w320/fr.png' },
  },
];

// ✅ Utility function to render with Redux + Router
const renderWithProviders = (ui) => {
  const store = configureStore({
    reducer: {
      user: userReducer,
    },
    preloadedState: {
      user: {
        user: null,
        favorites: [],
        loading: false,
        error: null,
      },
    },
  });

  return render(
    <Provider store={store}>
      <MemoryRouter>
        {ui}
      </MemoryRouter>
    </Provider>
  );
};

// ✅ Test Suite
describe('AllCountriesPage', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockCountries });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders country cards after fetching data', async () => {
    renderWithProviders(<AllCountriesPage />);

    await waitFor(() => {
      expect(screen.getByText('Sri Lanka')).toBeInTheDocument();
      expect(screen.getByText('France')).toBeInTheDocument();
    });
  });

  it('shows error message when API fails', async () => {
    axios.get.mockRejectedValueOnce(new Error('API Error'));
    renderWithProviders(<AllCountriesPage />);

    await waitFor(() => {
      expect(screen.getByText(/failed to load countries/i)).toBeInTheDocument();
    });
  });
});
