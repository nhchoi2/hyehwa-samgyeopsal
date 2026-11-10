const menuNotes = [' (한돈 1등급)', ' (공기밥 제공)', ' (후식용)', ' (Red)', ' (White)'];

export default function MenuName({ name }: { name: string }) {
  const note = menuNotes.find((suffix) => name.endsWith(suffix));
  if (!note) return name;

  return (
    <>
      {name.slice(0, -note.length)}{' '}
      <span className="block" style={{ fontSize: 'calc(1em - 1pt)' }}>
        {note.trim()}
      </span>
    </>
  );
}
