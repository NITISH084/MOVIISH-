import { useDispatch, useSelector } from "react-redux";
import Vediobg from "./Vediobg";
import Vediobgtitle from "./Vediobgtitle";
import { useEffect } from "react";
import { setcount } from "../../Redux/browseSlice";

const Maincont = () => {
  // Accessing the count value from the Redux store
  const count = useSelector((state) => state.userfunctionalities.count);
  const dispatch = useDispatch();

  // useEffect hook to set up an interval that updates the count value every 2 minutes
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(setcount(count + 1)); // Incrementing the count value
    }, 120000); // 120000 milliseconds = 2 minutes

    // Clean up function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, count]);

  // Resetting the count to 0 if it exceeds or equals 20
  if (count >= 20) {
    dispatch(setcount(0));
  }

  return (
    <div>
      {/* Passing the count value as a prop to Vediobg and Vediobgtitle components */}
      <Vediobg count={count} />
      <Vediobgtitle count={count} />
    </div>
  );
};

export default Maincont;
