/// <reference types="vitest" />
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchBar from '../../src/components/SearchBar';

describe('SearchBar', () => {
  it('calls onSearchChange when input changes', () => {
    const mockSearch = vi.fn();
    render(
      <MemoryRouter>
        <SearchBar searchTerm="" onSearchChange={mockSearch} />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/search for a country/i);
    fireEvent.change(input, { target: { value: 'Brazil' } });

    expect(mockSearch).toHaveBeenCalledWith('Brazil');
  });

  it('renders search button', () => {
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });
});
