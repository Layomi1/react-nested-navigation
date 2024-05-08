import styles from "./MenuList.module.css";
import MenuItem from "../MenuItem/MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul className={styles["menu-list"]}>
      {list && list.length
        ? list.map((item, index) => <MenuItem ListItem={item} key={index} />)
        : null}
    </ul>
  );
};

export default MenuList;
