export const Experience = () => {
  return (
      <section className="px-4 md:px-8 lg:px-12">

          <div id="experience" className="w-full flex flex-col">
              <div className="w-full flex flex-col my-12">
                  <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-5">Experience</h1>
              </div>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  <div className="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center size-4 rounded-full bg-slate-300 group-[.is-active]:bg-gray-700 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 translate-x-3 lg:order-1 lg:group-odd:-translate-x-8 lg:group-even:translate-x-8"></div>
                      <div className="w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)] p-4 rounded-lg border-2 border-zinc-300">
                          <div className="flex justify-between space-x-2 mb-1">
                              <div className="text-zinc-900 text-lg flex flex-col">
                                  Globant | Walt Disney Parks <span className="font-light text-sm">Web Developer</span>
                              </div>
                              <time className="text-gray-700">September 2021 - Present</time>
                          </div>
                          <p className="font-light">
                              I helped stabilize ticket sales platforms post-pandemic by implementing validations, tools, and adaptations. My expertise in legacy projects enabled me to modernize systems, develop new features, and optimize performance. I collaborated with cross-functional teams, managed release planning, and ensured comprehensive documentation. I also presented technical information to diverse audiences, reduced technical debt through refactoring, and maintained both frontend and backend features. Additionally, I designed a REST API for tracking tips and grants for Walt Disney Parks cast members.
                          </p>
                      </div>
                  </div>

                  <div className="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center size-4 rounded-full bg-slate-300 group-[.is-active]:bg-gray-700 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 translate-x-3 lg:order-1 lg:group-odd:-translate-x-8 lg:group-even:translate-x-8"></div>
                      <div className="w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)] p-4 rounded-lg border-2 border-zinc-300">
                          <div className="flex justify-between space-x-2 mb-1">
                              <div className="text-zinc-900 text-lg flex flex-col">
                                  Sapiencia Consultants <span className="font-light text-sm">Fullstack Developer</span>
                              </div>
                              <time className="text-gray-700">January 2019 - September 2021</time>
                          </div>
                          <p className="font-light">
                              I led the entire development lifecycle, from new product creation to feature improvements and bug fixes, ensuring timely and high-quality delivery. My work included developing backend APIs with Laravel and Lumen, building frontend components with Angular, React, and Vue.js, and collaborating with UX/UI designers to create intuitive interfaces. I developed web platforms that streamlined decision-making, reduced tool loss by 40%, automated employee training processes, and enhanced the operations of a recycling plant by 10%. These platforms integrated complex business logic, unified processes, and improved overall efficiency.
                          </p>
                      </div>
                  </div>

              </div>
          </div>

      </section>
  )
}