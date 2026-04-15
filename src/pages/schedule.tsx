import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Newsletter from '../components/ui/Newsletter';

export default function SchedulePage() {
  const seo = {
    title: 'Schedule | HelveticaJS Summit 2026',
    description: 'Check out the exciting schedule for HelveticaJS Summit 2026 - workshops, keynotes, and networking events all packed into an amazing JavaScript experience.',
    url: 'https://helveticajs-summit.ch/schedule'
  };

  // Sample schedule data - this would be populated with real data closer to the event
  const workshopDay = [
    {
      time: '09:00 - 12:30',
      title: 'Modern React Patterns Workshop',
      speaker: 'Alexandra Chen',
      type: 'workshop',
      room: 'Workshop Room A'
    },
    {
      time: '09:00 - 12:30',
      title: 'Building with Vue 5.0',
      speaker: 'Marco Delgado',
      type: 'workshop',
      room: 'Workshop Room B'
    },
    {
      time: '09:00 - 12:30',
      title: 'Next.js Mastery',
      speaker: 'Priya Sharma',
      type: 'workshop',
      room: 'Workshop Room C'
    },
    {
      time: '12:30 - 13:30',
      title: 'Lunch Break',
      type: 'break'
    },
    {
      time: '13:30 - 17:00',
      title: 'Full-Stack TypeScript',
      speaker: 'James Wilson',
      type: 'workshop',
      room: 'Workshop Room A'
    },
    {
      time: '13:30 - 17:00',
      title: 'Web Performance Optimization',
      speaker: 'Sophie Martin',
      type: 'workshop',
      room: 'Workshop Room B'
    },
    {
      time: '13:30 - 17:00',
      title: 'Building AI Agents with JavaScript',
      speaker: 'Mohammed Al-Farsi',
      type: 'workshop',
      room: 'Workshop Room C',
      seatsLeft: 2
    },
    {
      time: '18:00 - 21:00',
      title: 'Pre-Conference Meetup & Registration',
      type: 'social',
      location: 'Main Hall & Rooftop Terrace'
    }
  ];

  const conferenceDay = [
    {
      time: '08:00 - 09:00',
      title: 'Registration & Breakfast',
      type: 'break'
    },
    {
      time: '09:00 - 09:15',
      title: 'Welcome & Opening Remarks',
      speaker: 'Conference Organizers',
      type: 'session',
    },
    {
      time: '09:15 - 10:00',
      title: 'Keynote: The Future of JavaScript in 2026 and Beyond',
      speaker: 'Renowned JS Expert',
      type: 'keynote',
    },
    {
      time: '10:00 - 10:30',
      title: 'Coffee Break',
      type: 'break'
    },
    {
      time: '10:30 - 11:15',
      title: 'Building Islands of Interactivity',
      speaker: 'Lisa Baumann',
      type: 'session',
    },
    {
      time: '11:15 - 12:00',
      title: 'WebGPU: The Next Frontier',
      speaker: 'Carlos Mendez',
      type: 'session',
    },
    {
      time: '12:00 - 13:30',
      title: 'Lunch & Networking',
      type: 'break'
    },
    {
      time: '13:30 - 14:15',
      title: 'JavaScript at Scale: Lessons from Serving Billions',
      speaker: 'Dana Kim',
      type: 'session',
    },
    {
      time: '14:15 - 15:00',
      title: 'The Modern CSS Revolution',
      speaker: 'Thomas Fischer',
      type: 'session',
    },
    {
      time: '15:00 - 15:30',
      title: 'Coffee Break',
      type: 'break'
    },
    {
      time: '15:30 - 16:15',
      title: 'AI-Driven Development: Friend or Foe?',
      speaker: 'Olivia Patel',
      type: 'session',
    },
    {
      time: '16:15 - 17:00',
      title: 'Lightning Talks (5 speakers)',
      type: 'lightning',
    },
    {
      time: '17:00 - 17:45',
      title: 'Closing Keynote: The Human Side of JavaScript',
      speaker: 'Community Leader',
      type: 'keynote',
    },
    {
      time: '17:45 - 18:00',
      title: 'Closing Remarks & Prizes',
      type: 'session',
    },
    {
      time: '18:00 - 22:00',
      title: 'After-Party',
      type: 'social',
      location: 'Rooftop Terrace'
    }
  ];

  const getSessionTypeClass = (type: string) => {
    switch(type) {
      case 'keynote':
        return 'border-js-yellow-500 bg-js-yellow-600/20';
      case 'session':
        return 'border-alpine-blue-500 bg-alpine-blue-600/20';
      case 'workshop':
        return 'border-zurich-teal-500 bg-zurich-teal-600/20';
      case 'lightning':
        return 'border-swiss-red-500 bg-swiss-red-600/20';
      case 'social':
        return 'border-syntax-plum-500 bg-syntax-plum-600/20';
      case 'break':
      default:
        return 'border-code-slate-600 bg-code-slate-700/30';
    }
  };

  return (
    <Layout seo={seo}>
      <section className="py-20 bg-gradient-to-b from-code-slate-800 to-code-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1 bg-js-yellow-500 rounded-full text-code-slate-900 font-bold">
              Q1 2026 • Zurich, Switzerland
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Schedule Sneak Peek! 🗓️</h1>
            <p className="text-xl text-code-slate-200 mb-8">
              Here&apos;s our preliminary lineup for HelveticaJS Summit 2026! Get ready for two days of pure JavaScript goodness with amazing speakers, hands-on workshops, and unforgettable community events!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-code-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 mb-16">
              <div className="md:col-span-2">
                <div className="sticky top-24">
                  <h2 className="text-3xl font-bold mb-6 text-white">What to Expect 🤩</h2>
                  <p className="text-code-slate-200 mb-6">
                    HelveticaJS Summit 2026 is jam-packed with JavaScript goodness! We&apos;ve got a full day of workshops before the main event, plus a community meetup to kick things off right.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-js-yellow-500 mr-3"></div>
                      <span className="text-code-slate-200">Inspiring Keynotes</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-alpine-blue-500 mr-3"></div>
                      <span className="text-code-slate-200">Technical Sessions</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-zurich-teal-500 mr-3"></div>
                      <span className="text-code-slate-200">Hands-on Workshops</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-swiss-red-500 mr-3"></div>
                      <span className="text-code-slate-200">Lightning Talks</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-syntax-plum-500 mr-3"></div>
                      <span className="text-code-slate-200">Networking Events</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-js-yellow-900/20 to-code-slate-800 p-6 rounded-xl border border-js-yellow-700/30 mb-8 shadow-lg">
                    <h3 className="font-bold text-xl mb-3 text-white">Want to speak? 🎤</h3>
                    <p className="text-code-slate-200 mb-4">
                      Our Call for Papers will open in Q2 2025! We&apos;d love to hear your JavaScript stories and insights! Join our awesome speaker lineup!
                    </p>
                    <Button
                      href="/#waitlist"
                      variant="secondary"
                      className="bg-js-yellow-500 hover:bg-js-yellow-600 text-code-slate-900 font-medium border-none"
                    >
                      Get notified when CFP opens
                    </Button>
                  </div>
                  <p className="text-sm text-code-slate-400">
                    * This schedule is preliminary and subject to change. Final schedule with confirmed speakers will be announced closer to the event.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-3 space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
                    <span className="bg-zurich-teal-500 text-code-slate-900 text-sm font-medium px-3 py-1 rounded-full mr-3">
                      Day 1
                    </span>
                    <span>Workshop Day</span>
                  </h2>
                  <div className="space-y-4">
                    {workshopDay.map((item, index) => (
                      <div 
                        key={index} 
                        className={`p-4 border-l-4 rounded-r-lg ${getSessionTypeClass(item.type)} hover:shadow-md transition-shadow duration-300`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                          <span className="font-bold text-code-slate-100">{item.time}</span>
                          {item.type === 'workshop' && (
                            <span className="text-sm text-code-slate-400">{item.room}</span>
                          )}
                          {item.type === 'social' && (
                            <span className="text-sm text-code-slate-400">{item.location}</span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        {item.speaker && (
                          <p className="text-code-slate-300">{item.speaker}</p>
                        )}
                        {item.seatsLeft !== undefined && (
                          <p className="text-sm text-red-400 font-semibold mt-1">
                            Only {item.seatsLeft} seats left!
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
                    <span className="bg-js-yellow-500 text-code-slate-900 text-sm font-medium px-3 py-1 rounded-full mr-3">
                      Day 2
                    </span>
                    <span>Conference Day</span>
                  </h2>
                  <div className="space-y-4">
                    {conferenceDay.map((item, index) => (
                      <div 
                        key={index} 
                        className={`p-4 border-l-4 rounded-r-lg ${getSessionTypeClass(item.type)} hover:shadow-md transition-shadow duration-300`}
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-bold text-code-slate-100">{item.time}</span>
                          {item.type === 'social' && (
                            <span className="text-sm text-code-slate-400">{item.location}</span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        {item.speaker && (
                          <p className="text-code-slate-300">{item.speaker}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 max-w-2xl mx-auto p-8 bg-gradient-to-br from-alpine-blue-900/20 to-code-slate-800 rounded-xl border border-alpine-blue-700/30 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center text-white">Don&apos;t Miss Out! 🚀</h2>
              <p className="text-center text-code-slate-200 mb-8">
                Join our waitlist to be the first to know when tickets become available! Early birds get special perks, including exclusive workshop access and swag!
              </p>
              <Newsletter />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}