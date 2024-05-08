import { useState } from "react";
import MenuList from "../MenuList/MenuList";
import styles from "./MenuItem.module.css";

const MenuItem = ({ ListItem }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  return (
    <li className={styles["menu-item"]}>
      <div className={styles.parent}>
        <p>{ListItem.label}</p>
        {ListItem && ListItem.children && ListItem.children.length ? (
          <span onClick={() => handleToggleChildren(ListItem.label)}>
            {displayCurrentChildren[ListItem.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>

      {ListItem &&
      ListItem.children &&
      ListItem.children.length > 0 &&
      displayCurrentChildren[ListItem.label] ? (
        <MenuList list={ListItem.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
