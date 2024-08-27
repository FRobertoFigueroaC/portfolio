export const Projects = () => {
  return (
    <section className="py-10 md:py-16">
          <div id="experience" className="w-full flex flex-col">
              <div className="w-full flex flex-col my-12">
                  <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-5">Projects</h1>
              </div>
          </div>

          <div className="container max-w-screen-xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  <div className="bg-gray-50 px-8 py-10 rounded-md">

                      <h4 className="font-medium text-gray-700 text-lg mb-4">Zygo AI</h4>
                      <p className="font-normal text-gray-500 text-md">
                          Developed two platforms for a start-up's defect detection system, which uses computer vision models to
                          identify road defects from thousands of images. The project required a platform for uploading photos and
                          another for training the model, including an image editor for annotating defects.
                       </p>
                  </div>

                  <div className="bg-gray-50 px-8 py-10 rounded-md">
                      <h4 className="font-medium text-gray-700 text-lg mb-4">AUWI </h4>
                      <p className="font-normal text-gray-500 text-md">
                          Developed a B2B SaaS ERP using Laravel, Livewire, and AlpineJs, where I designed and implemented comprehensive modules, including commercial, client management, POS, warehouse, production, accounting, and dashboard/reporting functionalities. The POS system was integrated to enhance transaction management and customer interactions, while the warehouse and production modules improved inventory and production tracking. I also implemented accountability features to ensure accurate financial records and developed dashboards and reports to provide clear insights into the processed information.
                       </p>
                      <div className="relative">
                          <a href="https://auwi.mx/" target="_blank"
                              className="font-semibold text-gray-500 text-md relative z-10">More details</a>
                          <span className="w-24 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                      </div>
                  </div>

              </div>
          </div>
          {/* https://www.linkedin.com/company/auwi/posts/ */}
      </section>
  )
}