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

  test('renders skill progress bars', () => {
    render(<Skills />);
    expect(screen.getAllByRole('progressbar').length).toBeGreaterThan(0);
  });

  test('renders experience highlights', () => {
    render(<Skills />);
    expect(screen.getByText('Experience Highlights')).toBeInTheDocument();
    expect(screen.getByText('5+')).toBeInTheDocument();
    expect(screen.getByText('Years Coding')).toBeInTheDocument();
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('Years Tech')).toBeInTheDocument();
  });

  test('is accessible', () => {
    render(<Skills />);
    expect(screen.getByRole('region', { name: /skills/i })).toBeInTheDocument();
  });
}); 
