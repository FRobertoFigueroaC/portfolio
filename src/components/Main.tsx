export const Main = () => {
  return (
      <section className="py-10 md:py-16">

          <div className="container max-w-screen-xl mx-auto px-4">

              <nav className="flex items-center justify-between mb-40">
                  <a href="https://www.linkedin.com/in/roberto-figueroa--353540160/" target="_blank" className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Contact me</a>
              </nav>

              <div className="text-center">
                  <div className="flex justify-center mb-16">
                      <img src="/image/photo1.png" className="w-40 h-40 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                      alt="Francisco Roberto Figueroa Castañeda"/>
                  </div>

                  <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Francisco Roberto Figueroa Castañeda</h6>

                  <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">Senior Fullstack Developer</h1>

                  <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
                     Hi!👋 I'm Francisco, <br /> a Senior Software Engineer who enjoys creating tools that make life easier for people.
                  </p>
              </div>

          </div>

      </section>
  )
}