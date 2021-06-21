import Alert from "@material-ui/lab/Alert";

export function Error(message) {
  return <Alert severity="error">{message}</Alert>;
}

export function Success(message) {
  return (
    <div>
      <Alert severity="success">{message}</Alert>
    </div>
  );
}
