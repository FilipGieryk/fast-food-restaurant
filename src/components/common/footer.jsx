const Footer = () => {
  return (
    <footer className="border-t-2 mt-16">
      <div>
        <img
          className="w-20 m-auto my-10"
          src="https://cdn.mcdonalds.pl/public/build/images/header/logo3.19d7d61fd29210afe458d0de4d0a7ca6.svg"
        ></img>
        <img
          className="w-32 m-auto"
          src="https://cdn.mcdonalds.pl/public/build/images/home/sections/googleplay.2eee13f33c5cc3cb2012a25ee9ca43fe.png"
        ></img>
        <div className="flex justify-center gap-10 m-10">
          <img
            className="w-7"
            src="https://cdn.mcdonalds.pl/public/build/images/header/fb.7f736cf58050fc00118551fe3812c866.svg"
          ></img>
          <img
            className="w-7"
            src="https://cdn.mcdonalds.pl/public/build/images/header/insta.309e14c420072c61118b3c1495c44286.svg"
          ></img>
          <img
            className="w-7"
            src="https://cdn.mcdonalds.pl/public/build/images/header/yt.6087dade2020e026714eb9de23c923ed.svg"
          ></img>
          <img
            className="w-7"
            src="https://cdn.mcdonalds.pl/public/build/images/header/linkedin.77d815d93434e0ed34c30c6e177233cc.svg"
          ></img>
          <img
            className="w-7"
            src="https://cdn.mcdonalds.pl/public/build/images/header/tiktok.7da14b02147fdf5fff862f3833631774.svg"
          ></img>
        </div>
        <ul>
          <li className="mb-5">Regulaminy</li>
          <li className="mb-5">Ochrona prywatności</li>
          <li className="mb-5">Tabela wartości odżywczych</li>
          <li className="mb-5">Ograniczenia menu</li>
          <li className="mb-5">Franczyza</li>
          <li className="mb-5">Centrum Pomocy</li>
        </ul>
      </div>
      <div>
        <p className="text-sm mt-8">
          © 2023 McDonald’s Corporation.<br></br>Prawa do znaków towarowych
          zastrzeżone.
        </p>
        <p className="text-xs m-8">
          McDonald’s Polska Sp. z o. o. z siedzibą w Warszawie ul. Marynarska
          15, 02-674 Warszawa Sąd Rejonowy dla m. st. Warszawy, XIII Wydz.
          Gospodarczy Krajowego Rejestru Sądowego, nr KRS 0000097409 NIP
          521-008-81-10 BDO 000046426 Kapitał zakładowy: 151.569.758,98 zł.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
