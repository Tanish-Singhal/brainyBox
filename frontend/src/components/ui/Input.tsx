interface InputProps {
  type: "text";
  label?: string;
  placeholder?: string;
}

export const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {props.label && (
        <label className="text-white/60 text-md">{props.label}</label>
      )}
      <input
        className="p-2 rounded-md w-full bg-card text-white"
        type={props.type}
        placeholder={props.placeholder ? props.placeholder : ""}
      />
    </div>
  );
};
