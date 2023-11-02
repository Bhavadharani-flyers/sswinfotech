type ButtonProps = {
  ButtonName: string;
};

export const Button = ({ ButtonName }: ButtonProps) => {
  return (
    <div>
      <button>{ButtonName}</button>
    </div>
  );
};
