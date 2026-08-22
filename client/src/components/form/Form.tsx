import styles from './Form.module.css';

type Props = {
  action?: string;
  method: string;
  success: string;
  error: string;
  children: React.ReactNode;
};

export default function Form({ method, action, success, error, children }: Props) {
  return (
    <form className={styles.form} action={action} method={method}>
      {children}
      <div className={styles.responses}>
        {success && <p className='bg-green-50 text-green-500'>{success}</p>}
        {error && <p className='bg-red-50 text-red-500'>{error}</p>}
      </div>
    </form>
  );
}