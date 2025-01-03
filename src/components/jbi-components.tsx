import styles from "./jbi-components.module.scss";

interface JBIComponentsProps {
  components: string[];
}

export function JBIComponents({ components }: JBIComponentsProps) {
  // render
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Components</h2>
      <ul className={styles.list}>
        {components.map((component) => (
          <li className={styles.component} key={component}>
            {component}
          </li>
        ))}
      </ul>
    </div>
  );
}
