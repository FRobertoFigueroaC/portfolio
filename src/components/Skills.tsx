export const Skills = () => {
  return (
      <section className="px-4 md:px-8 lg:px-12">
          <div id="skills" className="w-full flex flex-col mt-20">
              <div className="w-full flex flex-col my-12">
                  <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-5">Skills</h1>
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                      <div>
                          <h3 className="text-2xl font-bold">Languages</h3>
                          <ul className="text-1xl mt-4">
                              <li>PHP</li>
                              <li>Javascript</li>
                              <li>TypeScript</li>
                              <li>Bash</li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="text-2xl font-bold">Frameworks</h3>
                          <ul className="text-1xl mt-4">
                              <li>Laravel</li>
                              <li>Vue.js</li>
                              <li>React</li>
                              <li>Angular</li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="text-2xl font-bold">Databases</h3>
                          <ul className="text-1xl mt-4">
                              <li>MySQL</li>
                              <li>PostgreSQL</li>
                              <li>MariaDB</li>
                              <li>SQL Server</li>
                              <li>MongoDB</li>
                              <li>Redis</li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="text-2xl font-bold">Soft Skills</h3>
                          <ul className="text-1xl mt-4">
                              <li>Problem Solving</li>
                              <li>Teamwork</li>
                              <li>Communication</li>
                              <li>English Proficient </li>
                              <li>Adaptability</li>
                              <li>Ownership</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
    </section>
  )
}