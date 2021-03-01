export default function Header({ children }) {
  const headingMessage = "React";
  return (
    <header>
      <h1>{children}</h1>
    </header>
  );
}
