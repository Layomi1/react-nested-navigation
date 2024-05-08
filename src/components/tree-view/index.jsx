import MenuList from "../MenuList/MenuList";
import styles from "./TreeView.module.css";

const TreeView = ({ menus = [] }) => {
  return (
    <div className={styles["tree-view"]}>
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
