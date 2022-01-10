import Styles from './style.module.scss';

export function PrimaryButton({
  type,
  disabled,
  loading,
  className,
  onClick,
  children,
}) {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={`${Styles.btnPrimary} mt-6 disabled:opacity-50 shadow disabled:cursor-not-allowed transition duration-500 ${className}`}
      type={type}
      disabled={disabled || loading}
      loading={loading}
      onClick={handleClick}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
