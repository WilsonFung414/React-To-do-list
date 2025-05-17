function AlertBox({ message, closeAlert, closehint }) {
  return (
    <div className="alert-box" onClick={closeAlert}>
        {message}<br/>{closehint}
    </div>
  );
}

export default AlertBox;
