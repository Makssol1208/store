import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../store/user/userSlice";

import UserSignUp from "./UserSignUp";
import styles from "../../styles/blocks/signUp.module.css";

export default function UserForm() {
  const dispatch = useDispatch();
    const { showForm } = useSelector(({ user }) => user);
    
    const closeForm = () => {
        dispatch(toggleForm(false));
    } 
        

  return showForm ? (
    <>
      <div
        className={styles.overlay}
        onClick={closeForm}
      />
      <UserSignUp closeForm={closeForm} />
    </>
  ) : (
    <></>
  );
}
