
function Tablas({ data }) {
    return (
      <div>
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Species</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>{item.species}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Tablas;
  