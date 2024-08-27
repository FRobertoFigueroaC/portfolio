export const Experience = () => {
  return (
      <section className="py-10 md:py-16">

          <div id="experience" className="w-full flex flex-col">
              <div className="w-full flex flex-col my-12">
                  <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-5">Experience</h1>
              </div>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  <div className="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center size-4 rounded-full bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 translate-x-3 lg:order-1 lg:group-odd:-translate-x-8 lg:group-even:translate-x-8"></div>
                      <div className="w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)] p-4 rounded-lg border-2 border-zinc-300">
                          <div className="flex justify-between space-x-2 mb-1">
                              <div className="text-zinc-900 dark:text-zinc-400 text-lg flex flex-col">
                                  Campaign Nucleus <span className="font-light text-sm">Sr. Software Engineer</span>
                              </div>
                              <time className="text-emerald-600 dark:text-emerald-400">June 2023 - Present</time>
                          </div>
                          <p className="font-light">
                              Led the integration of SMS/email transactional services, managing large-scale messaging systems. Developed high-performance web applications with Laravel, Vue 3, and TailwindCSS, handling millions of records. Optimized data handling and scalability with effective queue/job strategies. Advocated for TDD to improve code quality, using MySQL/PostgreSQL for data management and Pint/Pest for styling/testing.
                          </p>
                      </div>
                  </div>

                  <div className="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center size-4 rounded-full bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 translate-x-3 lg:order-1 lg:group-odd:-translate-x-8 lg:group-even:translate-x-8"></div>
                      <div className="w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)] p-4 rounded-lg border-2 border-zinc-300">
                          <div className="flex justify-between space-x-2 mb-1">
                              <div className="text-zinc-900 dark:text-zinc-400 text-lg flex flex-col">
                                  S4 Learning <span className="font-light text-sm">Sr. Fullstack Developer - Tech Lead</span>
                              </div>
                              <time className="text-emerald-600 dark:text-emerald-400">February 2021 - June 2023</time>
                          </div>
                          <p className="font-light">
                              Directed an 8-person Fullstack Developer team to create scalable, maintainable Vue.js/Laravel applications, emphasizing code quality and best practices. Developed SPA and Inertia-based apps, integrating Vue Router, Vuex, Tailwind CSS, and Laravel Sanctum/Forge. Expanded skills with React, Node.js, and Django projects. Mentored team for skill enhancement and collaboration, ensuring code testability and maintenance through strict QA processes.
                          </p>
                      </div>
                  </div>

                  <div className="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center size-4 rounded-full bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 translate-x-3 lg:order-1 lg:group-odd:-translate-x-8 lg:group-even:translate-x-8"></div>
                      <div className="w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)] p-4 rounded-lg border-2 border-zinc-300">
                          <div className="flex justify-between space-x-2 mb-1">
                              <div className="text-zinc-900 dark:text-zinc-400 text-lg flex flex-col">
                                  Home and Media Products <span className="font-light text-sm">Sr. Fullstack Developer</span>
                              </div>
                              <time className="text-emerald-600 dark:text-emerald-400">October 2019 - February 2021</time>
                          </div>
                          <p className="font-light">
                              Developed web applications with Laravel, VueJS, HTML5, and TailwindCSS. Integrated real-time updates via Websockets, Pusher, and Laravel Echo. Deployed on Heroku and AWS for enhanced availability and scalability. Contributed to projects in an Agile setting, with a strong emphasis on continuous learning. Significantly enhanced Go expertise by engineering a backend for multi-platform educational software, catering to Windows, Mac, and Linux.
                          </p>
                      </div>
                  </div>
              </div>
          </div>

      </section>
  )
}