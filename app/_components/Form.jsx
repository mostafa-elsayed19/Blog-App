function Form({ children, onSubmit }) {
  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
