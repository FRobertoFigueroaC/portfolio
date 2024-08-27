import { IconLinkedin, IconGithub } from './icons'

export const Footer = () => {
  return (
      <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">

          <div className="container max-w-screen-xl mx-auto px-4">

              <div className="text-center">
                  {/* <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Contact</h1> */}

                  <div className="flex items-center justify-center space-x-8">
                      <a href="https://www.linkedin.com/in/roberto-figueroa--353540160/" target="_blank"
                        className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                          
                          <IconLinkedin width='80px' height='120px' />
                      </a>

                      <a href="https://github.com/FRobertoFigueroaC" target="_blank"
                        className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                          
                          <IconGithub width='80px' height='120px' />
                      </a>

                  </div>
              </div>

          </div>

      </footer>
  )
}