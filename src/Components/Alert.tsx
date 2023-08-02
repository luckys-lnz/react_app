import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({children, onClose} : AlertProps) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>React only cares about Components</strong> You should check in on
      the <a
        href="https://react.dev/learn/start-a-new-react-project">
        React documentation</a>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default Alert