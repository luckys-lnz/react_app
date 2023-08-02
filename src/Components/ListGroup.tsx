import { useState } from "react";

interface listGroupProps{
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}
function listGroup({ items, heading, onSelectItem }: listGroupProps) {
  /*handle click events*/
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No contents found</p>};
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default listGroup;
