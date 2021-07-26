import useStopwatch from "../utils/useStopwatch";
import style from "../styles/Main.module.css";
import styles from "../styles/Sidebar.module.css";
import Toolbox from "./Toolbox";
import Keypad from "./Keypad";
const Sidebar = () => {
  const stopwatch = useStopwatch();
  return (
    <div className={style.sidebar}>
      <div className={styles.timedtool}>
        <div className={styles.timewrapper}>
          <p className={styles.Timetitle}>Time</p>
          <div className={style.stopwatch}>{stopwatch.getInHours()}</div>
        </div>
        <Toolbox stopwatch={stopwatch} />
      </div>
      <Keypad />
    </div>
  );
};

export default Sidebar;
