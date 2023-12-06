function Projects() {
  const projects = [
    {
      title: "projeto 1",
      description: "Descrição do projeto 1",
      image: "",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "projeto 2",
      description: "Descrição do projeto 2",
      image: "",
      link: "#",
      colSpan: "col-span-2",
    },

    {
      title: "projeto 3",
      description: "Descrição do projeto 3",
      image: "",
      link: "#",
      colSpan: "col-span-3",
    },

    {
      title: "projeto 4",
      description: "Descrição do projeto 4",
      image: "",
      link: "#",
      colSpan: "col-span-4",
    },
  ];
  return (
    <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-blue-900 text-white md:rounded-tl-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative p-4 text-center">
          <h2 className="relative z-50 mb-2 text-white">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Projetos &
            </span>
            <span className="font-handwriting text-4xl">Portfólio</span>
          </h2>
          <p className="relative text-sm text-gray-400">
            Alguns dos projetos pessoais e que já realizei ao longo da minha
            trajetória como programador front-end.
          </p>
          {/* <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-tl bg-blue-400/10"></div> */}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
        {projects.map((project, index) => (
          <div
            className={`group relative h-52 cursor-default rounded-lg`}
            key={`project-${index}`}
            style={{ backgroundImage: `url(${project.image})` }}></div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
