const ShowMore = (props) => {
  return (
    <a
      id={props.id}
      className={`border py-2 px-6 text-base uppercase font-bold border-yellow-400 rounded-3xl ${props.className}`}
      href={props.href}
    >
      {props.content}
    </a>
  );
};
const ShowAll = (props) => {
  return (
    <a
      className="uppercase bg-yellow-300 font-bold rounded-3xl text-base py-2 px-7"
      href={props.href}
    >
      Pokaż Wszystkie
    </a>
  );
};

export { ShowMore, ShowAll };
