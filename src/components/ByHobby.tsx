import { 
    IconPokemon,
    IconJournalBookmarkFill,
    IconCalendarMonthFill,
    IconMap,
    IconHeart,
    // IconArrowRight
} from './icons'

export const ByHobby = () => {
  return (
      <section className="px-4 md:px-8 lg:px-12">
          <div id="byHobby" className="w-full flex flex-col">
              <div className="w-full flex flex-col my-12">
                  <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-5">Made for learning</h1>
              </div>
          </div>
          <div className="container max-w-screen-xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

                  <div className="bg-gray-50 px-8 py-10 rounded-md">
                    <a href="https://mypokemonapp.netlify.app/#/" target="_blank">
                      <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                        <IconPokemon width='40px' height='40px' />
                      </div>
                      <h4 className="font-medium text-gray-700 text-lg mb-4">Who's that Pokemon ?</h4>
                      <p className="font-normal text-gray-500 text-md">
                          A basic
                        &nbsp;<span className="font-semibold text-emerald-400">#Vue.js</span>&nbsp;
                        application inspired by the classic Pokemon cartoon.
                      </p>
                    </a>
                  </div>

                  <div className="bg-gray-50 px-8 py-10 rounded-md">
                    <a href="https://frfc-journal-app.netlify.app/auth/login" target="_blank">
                      <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                        <IconJournalBookmarkFill width='40px' height='40px' />
                      </div>
                          <h4 className="font-medium text-gray-700 text-lg mb-4">Journal App</h4>
                      <p className="font-normal text-gray-500 text-md">
                        A MERN application using cloudinary and Google authentication
                        <br />
                        &nbsp;<span className="font-semibold text-sky-400">#React</span>&nbsp;
                        &nbsp;<span className="font-semibold text-green-400">#Nodejs</span>&nbsp;                         
                        &nbsp;<span className="font-semibold text-green-800">#MongoDB</span>&nbsp;                         
                      </p>
                    </a>
                  </div>

                  <div className="bg-gray-50 px-8 py-10 rounded-md">
                    <a href="https://effortless-torte-420ec7.netlify.app/" target="_blank">
                      <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                        <IconCalendarMonthFill width='40px' height='40px' />
                      </div>
                          <h4 className="font-medium text-gray-700 text-lg mb-4">React CalendarApp</h4>
                      <p className="font-normal text-gray-500 text-md">
                        A Calendar to help you to orginise your daily tasks
                        <br />
                        &nbsp;<span className="font-semibold text-sky-400">#React</span>&nbsp;
                        &nbsp;<span className="font-semibold text-green-400">#Nodejs</span>&nbsp;                         
                        &nbsp;<span className="font-semibold text-green-800">#MongoDB</span>&nbsp;                         
                      </p>
                    </a>
                  </div>

                  <div className="bg-gray-50 px-8 py-10 rounded-md">
                    <a href="https://65dffdae125a31b0d7823168--ephemeral-bonbon-bfb49a.netlify.app/" target="_blank">
                      <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                        <IconMap width='40px' height='40px' />
                      </div>
                          <h4 className="font-medium text-gray-700 text-lg mb-4">React Maps</h4>
                      <p className="font-normal text-gray-500 text-md">
                        A Playground for experimenting with Mapbox
                        <br />
                        &nbsp;<span className="font-semibold text-sky-400">#React</span>&nbsp;                      
                      </p>
                    </a>
                  </div>

                  <div className="bg-gray-50 px-8 py-10 rounded-md">
                      <a href="https://queencess.netlify.app/" target="_blank">
                          <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                              <IconHeart width='40px' height='40px' color="red"/>
                          </div>
                          <h4 className="font-medium text-gray-700 text-lg mb-4">Valentines animation</h4>
                          <p className="font-normal text-gray-500 text-md">
                              An HTML and CSS animation
                              <br />
                              &nbsp;<span className="font-semibold text-blue-700">#CSS</span>&nbsp;
                          </p>
                      </a>
                  </div>

              </div>
          </div>
      </section>
  )
}
