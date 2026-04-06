function AboutMe() {
  return (
    <div className="flex flex-col  min-h-[70vh] w-full gap-20">
      <div className="flex flex-col items-center xl:items-start text-center gap-4 ">
        <h1 className="font-semibold text-4xl ">Über mich</h1>
        <p className="text-slate-400 font-mono text-xl xl:text-start ">
          <p className="text-slate-400 font-mono text-xl xl:text-start">
            Frontend Developer spezialisiert auf React und TypeScript. Erfahrung
            in der Entwicklung moderner Webanwendungen und eigener
            SaaS-Projekte. Fokus auf skalierbare Architektur, Performance und
            benutzerfreundliche Interfaces. Sauberer Code, klare Struktur und
            kontinuierliches Lernen stehen für mich im Mittelpunkt.
          </p>
        </p>
        <ul className="grid grid-cols-1 items-center justify-center gap-10  ">
          <li className="flex items-center justify-center xl:justify-start gap-4">
            <span className="text-slate-400 text-lg">Name</span>
            <span className="text-xl">Abbosbek Anvarjonov</span>
          </li>
          <li className="flex items-center justify-center xl:justify-start gap-4">
            <span className="text-slate-400 text-lg">Telefon</span>
            <span className="text-xl">(+49) 173 475 91 22</span>
          </li>
          <li className="flex items-center justify-center xl:justify-start gap-4">
            <span className="text-slate-400 text-lg">Email</span>
            <span className="text-xl break-all">
              abbosbekanvarjonov8@gmail.com
            </span>
          </li>
          <li className="flex items-center justify-center xl:justify-start gap-4">
            <span className="text-slate-400 text-lg">Sprachen</span>
            <span className="text-xl">Deutsch, Usbekisch, Englisch</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
