import { type ComponentPropsWithoutRef, forwardRef } from 'react';

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLElement, InputProps>(function Input({ id, label, ...props }, ref) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
