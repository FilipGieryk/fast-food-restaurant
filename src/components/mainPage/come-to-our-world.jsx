import { ShowMore, ShowAll } from "../common/button";

const ComeToOurWorld = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">
        Wejdź do świata Mc
        <span className="underline underline-offset-8 decoration-yellow-300">
          Donald
        </span>
        's
      </h2>
      <PicturesContainer />
      <div className="mt-10">
        <ShowAll />
      </div>
    </div>
  );
};

const PicturesContainer = () => {
  const pictures = [
    {
      url: "https://cdn.mcdonalds.pl/uploads/20230901143849/392x240-sec.jpg",
      text: "McDelivery",
    },
    {
      url: "https://cdn.mcdonalds.pl/uploads/20230901150115/microsoftteams-image-147.png",
      text: "Znajdź restaurację",
    },
    {
      url: "https://cdn.mcdonalds.pl/uploads/20230901143351/392x240-pracownik.jpg",
      text: "Pracuj razem z nami!",
    },
    {
      url: "https://cdn.mcdonalds.pl/uploads/20230901145437/microsoftteams-image-146.png",
      text: "Aplikacja McDonald's",
    },
    {
      url: "https://cdn.mcdonalds.pl/uploads/20230831123033/392x240-obieg.png",
      text: "Obieg zamknięty",
    },
    {
      url: "https://cdn.mcdonalds.pl/uploads/20230904114652/microsoftteams-image-148.png",
      text: "Pomagajmy razem",
    },
  ];
  return (
    <div className="grid grid-flow-col-1 gap-8 p-3">
      {pictures.map((picture) => (
        <div>
          <img
            className="m-auto rounded-2xl overflow-hidden border-gray-200 border"
            src={picture.url}
          />
          <div className="flex flex-col items-center gap-2">
            <span className="font-bold text-2xl mb-2">{picture.text}</span>
            <ShowMore href={picture.url} content="pokaż więcej"></ShowMore>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComeToOurWorld;
