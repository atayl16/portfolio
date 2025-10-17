import { render, screen } from '@testing-library/react';
import Skills from '../Skills';

describe('Skills Component', () => {
  test('renders section header', () => {
    render(<Skills />);
    expect(screen.getByText('Spell Book')).toBeInTheDocument();
    expect(screen.getByText(/My arsenal of technical skills/)).toBeInTheDocument();
  });

  test('renders all skill categories', () => {
    render(<Skills />);
    expect(screen.getByText('Frontend Mastery')).toBeInTheDocument();
    expect(screen.getByText('Backend Sorcery')).toBeInTheDocument();
    expect(screen.getByText('Database Wizardry')).toBeInTheDocument();
    expect(screen.getByText('Testing Alchemy')).toBeInTheDocument();
    expect(screen.getByText('Development Tools')).toBeInTheDocument();
    expect(screen.getByText('Deployment Magic')).toBeInTheDocument();
  });

  test('renders skill items with descriptions', () => {
    render(<Skills />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Ruby on Rails')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    expect(screen.getByText('Jest')).toBeInTheDocument();
    expect(screen.getByText('Git/GitHub')).toBeInTheDocument();
    expect(screen.getByText('Netlify')).toBeInTheDocument();
  });

  test('is accessible', () => {
    render(<Skills />);
    expect(screen.getByRole('region', { name: /skills/i })).toBeInTheDocument();
  });
}); 
