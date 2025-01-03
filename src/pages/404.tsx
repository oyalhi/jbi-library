import { useNavigate } from "react-router";
import styles from "./404.module.scss";

export function Page404() {
  // routing
  const navigate = useNavigate();

  // render
  return (
    <div className={styles.root}>
      <h1>Page not found</h1>
      <button onClick={() => navigate("/")}>Go home</button>
    </div>
  );
}
