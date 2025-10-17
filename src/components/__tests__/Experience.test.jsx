import { render, screen } from '@testing-library/react';
import Experience from '../Experience';

describe('Experience Component', () => {
  test('renders section header', () => {
    render(<Experience />);
    expect(screen.getByText('Guild Chronicles')).toBeInTheDocument();
    expect(screen.getByText(/Every adventurer has their origin story/)).toBeInTheDocument();
  });

  test('renders timeline items', () => {
    render(<Experience />);
    expect(screen.getByText('2025')).toBeInTheDocument();
    expect(screen.getByText(/Building in public/)).toBeInTheDocument();
    const dates2022 = screen.getAllByText('2022–2025');
    expect(dates2022.length).toBeGreaterThan(0);
    const dates2014 = screen.getAllByText('2014–2021');
    expect(dates2014.length).toBeGreaterThan(0);
    expect(screen.getByText('2014')).toBeInTheDocument();
  });

  test('renders Daily Kos experience', () => {
    render(<Experience />);
    expect(screen.getByText('Daily Kos')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer II')).toBeInTheDocument();
    expect(screen.getByText('The Grassroots Guild')).toBeInTheDocument();
    expect(screen.getByText(/Rails \+ React applications/)).toBeInTheDocument();
  });

  test('renders MyTime experience', () => {
    render(<Experience />);
    expect(screen.getByText('MyTime')).toBeInTheDocument();
    expect(screen.getByText('Director of Operations')).toBeInTheDocument();
    expect(screen.getByText('The Startup Brigade')).toBeInTheDocument();
    expect(screen.getByText('Where the Software Ranger was born')).toBeInTheDocument();
  });

  test('renders key quests for each experience', () => {
    render(<Experience />);
    expect(screen.getByText(/Donation platforms/)).toBeInTheDocument();
    expect(screen.getByText(/Payment integrations/)).toBeInTheDocument();
    expect(screen.getByText(/Internal automation tools/)).toBeInTheDocument();
    expect(screen.getByText(/Cross-functional team leadership/)).toBeInTheDocument();
  });

  test('has accessible section', () => {
    render(<Experience />);
    const section = screen.getByRole('region', { name: /experience/i });
    expect(section).toBeInTheDocument();
  });

  test('renders experience periods', () => {
    render(<Experience />);
    const periods2022 = screen.getAllByText('2022–2025');
    expect(periods2022.length).toBe(2); // Timeline + experience card
    const periods2014 = screen.getAllByText('2014–2021');
    expect(periods2014.length).toBe(2); // Timeline + experience card
  });

  test('renders Key Quests headings', () => {
    render(<Experience />);
    const headings = screen.getAllByText('Key Quests:');
    expect(headings.length).toBe(2); // One for each experience card
  });
}); 

