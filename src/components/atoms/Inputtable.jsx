

function Inputtable({ searchValue, setSearchValue, loading }) {
    const onChangeValueSearch = (event) => {
        setSearchValue(event.target.value);
      };
  return (
    <div>
      <input
        className="toDoSearch"
        placeholder="Busca "
        value={searchValue}
        onChange={onChangeValueSearch}
        disabled={loading}
      />
    </div>
  )
}

export default Inputtable