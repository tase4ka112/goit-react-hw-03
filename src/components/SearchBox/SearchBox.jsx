import css from "./SearchBox.module.css";

export default function SearchBox({ value, onEnter }) {
  return (
    <div className={css.container}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onEnter(e.target.value)}
      />
    </div>
  );
}
