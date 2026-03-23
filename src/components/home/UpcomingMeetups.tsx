import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { getUpcomingMeetups, Meetup } from '../../data/meetups';

export default function UpcomingMeetups() {
  const [meetups, setMeetups] = useState<Meetup[]>([]);

  useEffect(() => {
    // Compute on client to avoid hydration mismatch with server-rendered dates
    setMeetups(getUpcomingMeetups());
  }, []);

  if (meetups.length === 0) {
    return null;
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="meetups" className="py-20 bg-code-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-js-yellow-400 font-medium uppercase tracking-wider text-sm">
            Upcoming Meetups
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
            Join Our Next Events
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {meetups.map((meetup) => (
            <div
              key={meetup.id}
              className="bg-code-slate-900 border border-code-slate-700 rounded-xl p-6 hover:border-js-yellow-500/50 transition-colors duration-200"
            >
              <div className="text-js-yellow-400 text-sm font-medium mb-2">
                {formatDate(meetup.date)} &middot; {meetup.time}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{meetup.title}</h3>
              <p className="text-code-slate-300 text-sm mb-1">{meetup.location}</p>
              <p className="text-code-slate-400 text-sm mb-4">{meetup.description}</p>
              {meetup.url && (
                <Button
                  href={meetup.url}
                  variant="tertiary"
                  className="text-js-yellow-400 hover:text-js-yellow-300 text-sm"
                >
                  Learn More &rarr;
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
