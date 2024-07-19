
import Input from '../atoms/Input'

const Eliminar = ({ title, type, placeholder, onchange }) => (
  <div>
    <h2>{title}</h2>
    <Input
      type={type}
      placeholder={placeholder}
      onchange={onchange}
    />
  </div>
);

export default Eliminar;
