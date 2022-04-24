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
      <div className="col-md-5 m-4">
        <label htmlFor={label}>{label}</label>
          {loading && <Loader/>}
        <select className="form-select m-2" aria-label="Default select example" id={label} name={label} onChange={handleChange}>
          {data && data.map((dato)=><option key={dato.id} value={dato}>  {dato.apellido} {dato.nombre} - {dato.dni? dato.dni : dato.matricula} </option>)}
        </select>
        <Message/>
      </div>
    </>
  );
};

export default Select;