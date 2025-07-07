import { Card } from './components/Card';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-8 sm:py-12 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 text-white rounded-lg p-4 sm:p-6">
        <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Crunch Fitness Workshop</h1>
        <p className="text-base sm:text-xl opacity-90">Empowering your fitness journey with knowledge and community</p>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="space-y-6">
        {/* <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">Workshop Overview</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="📅 When & Where">
            <p className="mb-2">Saturdays, 12:00 PM - 1:30 PM</p>
            <p>Crunch Fitness, Riverside</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Open to all gym members and guests</p>
          </Card>

          <Card title="🎯 What to Expect">
            <ul className="list-disc pl-5 space-y-2">
              <li>Open Q&A on fitness, nutrition, and movement</li>
              <li>Live demonstrations and hands-on education</li>
              <li>Themed sessions every other week</li>
              <li>Expert guidance from certified trainers</li>
            </ul>
          </Card>

          <Card title="📅 Upcoming Themed Sessions">
            <ul className="space-y-3">
              <li className="border-l-4 border-orange-500 pl-3">
                <p className="font-semibold">July 12</p>
                <p>Warm-up Stretches and Injury Prevention</p>
              </li>
              <li className="border-l-4 border-purple-500 pl-3">
                <p className="font-semibold">July 19</p>
                <p>Nutrition Essentials and Myths</p>
              </li>
              <li className="border-l-4 border-blue-500 pl-3">
                <p className="font-semibold">July 26</p>
                <p>Strength Development for Ages 50+</p>
              </li>
              <li className="border-l-4 border-orange-500 pl-3">
                <p className="font-semibold">August 2</p>
                <p>Improving Balance and Coordination</p>
              </li>
            </ul>
            <button className="mt-4 text-blue-600 dark:text-blue-400 hover:underline">
              View full calendar →
            </button>
          </Card>
        </div>
      </section>

      {/* Crunch Kickoff Section */}
      <section id="kickoff" className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400">Crunch Kickoff Consultation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="🎯 What is the Crunch Kickoff?">
            <p className="mb-4">A 60-minute one-on-one consultation to help you kickstart your fitness journey with personalized guidance.</p>
            <ul className="space-y-2 mb-4">
              <li>✓ Current fitness level assessment</li>
              <li>✓ Personalized goal setting</li>
              <li>✓ Customized workout plans</li>
              <li>✓ Nutrition guidance</li>
            </ul>
          </Card>

          <Card title="💎 Special Offer">
            <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
              <p className="text-lg font-semibold mb-2">Limited Time Offer</p>
              <p className="mb-4">Free for the first three sign-ups each week!</p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">Regular Pricing:</p>
                <p className="text-2xl font-bold">$10 <span className="text-sm font-normal">for members</span></p>
                <p className="text-2xl font-bold">$90 <span className="text-sm font-normal">for non-members</span></p>
              </div>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                Sign Up Now
              </button>
            </div>
          </Card>
        </div>
      </section>

      {/* Monthly Raffle Section */}
      <section id="raffle" className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-orange-600 dark:text-orange-400">Monthly Raffle</h2>
        <div className="max-w-2xl mx-auto">
          <Card title="🏆 Win Amazing Prizes">
            <div className="text-center">
              <div className="mb-6 text-5xl">🎁</div>
              <h3 className="text-2xl font-bold mb-4">How to Enter:</h3>
              <p className="mb-6">Attend any workshop and sign in to receive a raffle entry.</p>
              
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/20 dark:to-yellow-900/20 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold mb-2">Grand Prize:</h4>
                <p className="text-lg">4 free one-hour personal training sessions</p>
                <p className="text-lg">+ Free Crunch Kickoff consultation</p>
              </div>
              
              {/* <p className="text-sm text-gray-600 dark:text-gray-400">Winner announced at the end of each month. Must be present to win.</p> */}
            </div>
          </Card>
        </div>
      </section>

      {/* Social Media & Polls */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="🗳️ Polls and Surveys">
          <p className="mb-4">Help shape our workshop topics by participating in our polls!</p>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Which topic interests you most?</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input type="radio" id="topic1" name="topic" className="mr-2" />
                  <label htmlFor="topic1">Advanced Strength Training</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="topic2" name="topic" className="mr-2" />
                  <label htmlFor="topic2">Yoga for Athletes</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="topic3" name="topic" className="mr-2" />
                  <label htmlFor="topic3">Meal Planning Workshop</label>
                </div>
              </div>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded-lg text-sm transition-colors">
                Submit Vote
              </button>
            </div>
          </div>
        </Card>

        <Card title="📱 Connect With Us">
          <div className="text-center">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">Coming Soon!</h3>
            <p className="mb-4">Follow us on social media for updates, fitness tips, and exclusive content.</p>
            <div className="flex justify-center space-x-4">
              <button className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                <span className="text-xl">📘</span>
              </button>
              <button className="p-2 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300">
                <span className="text-xl">📸</span>
              </button>
              <button className="p-2 rounded-full bg-blue-400 dark:bg-blue-600 text-white">
                <span className="text-xl">🐦</span>
              </button>
            </div>
          </div>
        </Card>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="mt-16 bg-gray-50 dark:bg-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
            Contact Us
          </h2>
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Gym Location</h4>
                    <p className="mt-1">
                      <a 
                        href="https://www.google.com/maps/place/7960+Limonite+Ave,+Riverside,+CA+92509/@33.9769778,-117.4600031,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcb400c17134f3:0xe9db07ea36b060f6!8m2!3d33.9769778!4d-117.4574282!16s%2Fg%2F11c43x3gyc!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer nofollow"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        7960 Limonite Ave<br />
                        Riverside, CA 92509
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Gym Phone</h4>
                    <p className="mt-1">
                      <a 
                        href="tel:+19519347007" 
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        (951) 934-7007
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Trainer Contact</h4>
                    <p className="mt-1">
                      <a 
                        href="tel:+19513772324" 
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Mateo: (951) 377-2324
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours of Operation */}
              <div>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium">Mon - Wed</span>
                    <span>5:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium">Thu</span>
                    <span>5:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium">Fri</span>
                    <span>5:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">Sat - Sun</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
