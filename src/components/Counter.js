export function Counter() {
  return (
    <div className="mx-4">
      <div className="alert alert-danger mt-2 text-left">Likes</div>

      <input
        type="button"
        value="Like"
        className="btn btn-secondary btn-lg w-25"
      />
    </div>
  );
}
