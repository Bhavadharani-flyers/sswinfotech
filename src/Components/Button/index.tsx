type ButtonProps = {
  Home: string;
};

export const Button = ({ Home }: ButtonProps) => {
  return (
    <div>
      <button>{Home}</button>
    </div>
  );
};
