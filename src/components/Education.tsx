export const Education = () => {
  return (
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>

              <div className="grid grid-cols-1">

                <div className="bg-gray-50 px-8 py-10 rounded-md">
                      <h3 className="font-medium text-gray-700 text-2xl md:text-1xl mb-5">National Polytechnic Institute</h3>
                    <h3 className="font-medium text-gray-700 text-1xl mb-5">
                          Interdisciplinary Professional Unit in Engineering and Advanced Technologies
                    </h3>
                    <h4 className="font-medium text-gray-700 text-lg mb-4">2013 – 2018</h4>
                    <p className="font-normal text-gray-500 text-md mb-4">
                          Bachelor Mechatronics Engineer
                    </p>
                    <div className="relative">
                          <a href="https://www.upiita.ipn.mx/" target="_blank"
                          className="font-semibold text-gray-500 text-md relative z-10">See the place here</a>
                        <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                    </div>
                </div>
                
              </div>
        </div>
      </section>
  )
}