import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSlash,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(faTrash, faSignOutAlt, faEdit, faSlash, faPlusCircle);
}

export default Icons;