function WhatsNew() {
  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold mb-10">
        Co nowego w Mc
        <span className="underline underline-offset-8 decoration-yellow-500">
          Donald
        </span>
        's?'
      </h2>
      <div className="grid grid-flow-col-1 gap-8 p-3">
        <div className="border-solid border-2 border-black rounded-xl overflow-hidden">
          <img src="https://cdn.mcdonalds.pl/uploads/20231013155510/co-nowego-1200x720pp.jpg" />
        </div>
        <div className="border-solid border-2 border-black rounded-xl overflow-hidden">
          <img src="https://cdn.mcdonalds.pl/uploads/20231010161547/353054-mcd-mccafe-lto-jesien-baner-na-home-1200x720px.jpg" />
        </div>
        <div className="border-solid border-2 border-black rounded-xl overflow-hidden">
          <img src="https://cdn.mcdonalds.pl/uploads/20231005140200/kafel-www-co-nowego.jpg" />
        </div>
        <div className="border-solid border-2 border-black rounded-xl overflow-hidden">
          <img src="https://cdn.mcdonalds.pl/uploads/20231010161120/600x360-mc-crispy.png" />
        </div>
      </div>
      <div className="mt-8">
        <a className="uppercase bg-yellow-400 py-2 px-6 rounded-3xl font-bold">
          Pokaż wszystkie
        </a>
      </div>
    </div>
  );
}

export default WhatsNew;
