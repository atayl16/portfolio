import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects Component', () => {
  test('renders section header', () => {
    render(<Projects />);
    expect(screen.getByText('Adventure Log')).toBeInTheDocument();
    expect(screen.getByText(/Epic quests and digital conquests/)).toBeInTheDocument();
  });

  test('renders all project cards', () => {
    render(<Projects />);
    expect(screen.getByText('Family Messaging App')).toBeInTheDocument();
    expect(screen.getByText('Siege Clan Tracker')).toBeInTheDocument();
    expect(screen.getByText('Islam4Kids Games')).toBeInTheDocument();
  });

  test('renders project images with alt text', () => {
    render(<Projects />);
    expect(screen.getByAltText('Family Messaging App')).toBeInTheDocument();
    expect(screen.getByAltText('Siege Clan Tracker')).toBeInTheDocument();
    expect(screen.getByAltText('Islam4Kids Games')).toBeInTheDocument();
  });

  test('renders project links', () => {
    render(<Projects />);
    expect(screen.getAllByRole('link', { name: /Code/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /Live Demo/i }).length).toBeGreaterThan(0);
  });

  test('all external links have proper rel and target', () => {
    render(<Projects />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      if (link.target === '_blank') {
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      }
    });
  });

  test('project cards are accessible', () => {
    render(<Projects />);
    const cards = screen.getAllByRole('article');
    expect(cards.length).toBeGreaterThan(0);
  });
}); 
