import Hello from "./Hello";

/**
 * Membuat component Main.
 * Component Main menampung konten utama.
 */
function Main() {
  return (
    <main>
      {/**
       * Mengirim props ke component Hello.
       * nama props: name
       */}
      <Hello name="Serly" />
      <Hello name="SerlyO" />
      <Hello name="Okta" />
      <Hello name="Oktav" />
      <Hello name="Oktaviani" />
    </main>
  );
}

export default Main;
