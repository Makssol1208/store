import { useDispatch, useSelector } from "react-redux";
import { toggleForm, toggleFormType } from "../../store/user/userSlice";

import UserSignUp from "./UserSignUp";
import UserLoginForm from "./UserLoginForm";

import styles from "../../styles/blocks/signUp.module.css";

export default function UserForm() {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));
  const toggleCurrentFormType = type => dispatch(toggleFormType(type));

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
      {formType === "signup" ? (
        <UserSignUp toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
      ) : (
        <UserLoginForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
      )}
    </>
  ) : (
    <></>
  );
}
