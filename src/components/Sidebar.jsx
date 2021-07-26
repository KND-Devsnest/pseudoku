import useStopwatch from "../utils/useStopwatch";
import style from "../styles/Main.module.css";
import Toolbox from "./Toolbox";
import Keypad from "./Keypad";
const Sidebar = () => {
  const stopwatch = useStopwatch();
  return (
    <div className={style.sidebar}>
      <div className={style.stopwatch}>{stopwatch.getInHours()}</div>
      <Toolbox stopwatch={stopwatch} />
      <Keypad />
    </div>
  );
};

export default Sidebar;
