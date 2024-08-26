import { IconLaravel, IconJavascript, IconTypescript } from './icons'

export const Resources = () => {
  return (
      <section className="py-10 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                  <div className="bg-gray-50 px-8 py-10 rounded-md">
                      <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                          <IconLaravel width='40px' height='40px' />
                      </div>
                      <h4 className="font-medium text-gray-700 text-lg mb-4">Laravel Ninja</h4>
                      <p className="font-normal text-gray-500 text-md">
                          For over 5 years, Laravel has been my field of expertise. My experience spans the Laravel ecosystem, including testing, queues, and commands, all the way to implementing efficient design patterns.
                       </p>
                  </div>
                  <div className="bg-gray-50 px-8 py-10 rounded-md">
                      <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                          <IconJavascript width='40px' height='40px' />
                          <IconTypescript width='40px' height='40px' />
                      </div>
                      <h4 className="font-medium text-gray-700 text-lg mb-4">Javascript and Typescript Pro </h4>
                      <p className="font-normal text-gray-500 text-md">
                          I’ve mastered JavaScript and TypeScript, crafting dynamic web applications using frameworks like Vue.js, Angular, and React. On the backend, I’ve leveraged Node.js and Express to build robust and scalable server-side solutions.
                       </p>
                  </div>

              </div>
          </div>
      </section>
  )
}