import clsx from "clsx";

interface ButtonProps {
  isAdd?: boolean;
  isDelete?: boolean;
  isClose?: boolean;
  text: string | React.ReactNode;
  handleClick: () => void;
  handleEsc?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { isAdd, isDelete, text, handleClick, isClose, handleEsc } = props;
  return (
    <button
      className={clsx(
        isAdd && "bg-blue-400 text-white px-5 py-1 rounded-sm",
        isDelete && "bg-red-400 text-white px-5 py-1 rounded-sm",
        isClose && "bg-transparent text-red-400 px-5 py-1 rounded-sm"
      )}
      onClick={handleClick}
      onKeyDown={handleEsc}
    >
      {text}
    </button>
  );
};
