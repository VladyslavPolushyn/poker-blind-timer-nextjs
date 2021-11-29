import styles from './Button.module.scss';

type ButtonProps = {
  buttonText: string;
  clickHandler: () => void;
};

const Button = (props: ButtonProps) => {
  const { buttonText, clickHandler } = props;

  return (
    <button className={styles.Button} onClick={clickHandler}>
      {buttonText}
    </button>
  );
};

export default Button;
