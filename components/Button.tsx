const Button = ({
  kind = 'default',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: 'default';
}) => {
  return <button {...props} />;
};

export default Button;
