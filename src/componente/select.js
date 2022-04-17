import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const Select = ({ label, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);




  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  return (
    <>
      <label htmlFor={label}>{label}</label>
          {loading && <Loader/>}
        <select className="form-select" aria-label="Default select example" id={label} name={label} onChange={handleChange}>
          <option defaultValue>Seleccione un {label}</option>
          {data && data.map((dato)=><option key={dato.id} value={dato}>  {dato.apellido} {dato.nombre} - {dato.dni? dato.dni : dato.matricula} </option>)}
        </select>
    </>
  );
};

export default Select;