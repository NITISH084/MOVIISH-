import Header1 from "../Header1";
import Netflix_bg1 from "../elements/Netflix_bg1";
const Login = () => {
  const userin = useSelector((state) => state.user.userData);
  
   //protected route
   useEffect(() => {
    if (!userin) {
      navigate("/");
    }},[userin])
  return (
    <>
      <Header1 />
      <Netflix_bg1/>
    </>
  );
};
export default Login;
