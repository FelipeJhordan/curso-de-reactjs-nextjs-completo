import "./styles.css";

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      type="search"
      className="text-container__input"
      value={searchValue}
      onChange={handleChange}
      placeholder="Type your search"
    />
  );
};
