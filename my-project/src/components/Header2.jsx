import { useDispatch, useSelector } from "react-redux";
import Usernotsigned from "./elements/Usernotsigned";
import Usersigned from "./elements/Usersigned";
const Header2 = () => {
  const userin = useSelector((state) => state.user.userData);

  return userin ? <Usersigned /> : <Usernotsigned />;
  
};
export default Header2;
