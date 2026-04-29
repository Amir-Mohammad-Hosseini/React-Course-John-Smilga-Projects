const Link = ({name , className , onScroll}) => {
  return (
            <li>
              <button onClick={() => onScroll(name)} className={className}>
                {" "}
                {name}{" "}
              </button>
            </li>
  )
}

export default Link
