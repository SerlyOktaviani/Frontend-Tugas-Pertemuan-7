import styles from "./Alert.module.css";

function Alert(props) {
  const { children } = props;

  return (
    <div>
      <span>{children}</span>
    </div>
  );
}

export default Alert;
