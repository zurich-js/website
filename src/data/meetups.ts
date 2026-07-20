export interface Meetup {
  id: string;
  title: string;
  date: string; // ISO date string, e.g. '2026-03-26'
  time: string; // Display time, e.g. '18:30'
  location: string;
  description: string;
  url?: string;
}

// Meetup data - add new meetups here
export const meetups: Meetup[] = [
  {
    id: 'zurichjs-march-2026',
    title: 'ZurichJS March Meetup',
    date: '2026-03-26',
    time: '18:30',
    location: 'Zurich, Switzerland',
    description: 'Join us for lightning talks, networking, and JavaScript goodness with the Zurich community.',
    url: 'https://www.meetup.com/zurichjs/',
  },
  {
    id: 'zurichjs-april-2026',
    title: 'ZurichJS April Meetup',
    date: '2026-04-23',
    time: '18:30',
    location: 'Zurich, Switzerland',
    description: 'Monthly community meetup with talks on the latest in JavaScript and web development.',
    url: 'https://www.meetup.com/zurichjs/',
  },
  {
    id: 'zurichjs-may-2026',
    title: 'ZurichJS May Meetup',
    date: '2026-05-28',
    time: '18:30',
    location: 'Zurich, Switzerland',
    description: 'An evening of JS talks, demos, and community connections.',
    url: 'https://www.meetup.com/zurichjs/',
  },
];

/**
 * Returns meetups that haven't ended yet.
 * An event is considered "still happening" until midnight (end of day) on the event date,
 * so it stays visible on the homepage for the entire day of the event.
 */
export function getUpcomingMeetups(now: Date = new Date()): Meetup[] {
  return meetups.filter((meetup) => {
    // Parse the event date and set to end of day (23:59:59.999) in local time
    const eventDate = new Date(meetup.date + 'T23:59:59.999');
    // Show the event until midnight — i.e. as long as "now" is before end of event day
    return now <= eventDate;
  });
}
