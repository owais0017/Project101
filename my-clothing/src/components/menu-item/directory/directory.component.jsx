import MenuItem from "../menu-item.component";
import './directory.style.scss';
import { useSelector } from "react-redux";

function Directory() {
  const sections = useSelector(state => state.directory)
  return (
    <div className="directory-menu">
      {sections.map(({id, ...someOtherProps}) => (
        <MenuItem key={id} {...someOtherProps} sections={sections} />
      ))}
    </div>
  );
}
export default Directory;