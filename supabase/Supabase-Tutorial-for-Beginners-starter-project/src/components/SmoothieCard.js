import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const SmoothieCard = ({ smoothie,onDelete }) => {
    const navigate = useNavigate();

  const handleDelete = async (e) => {
    const { error } = await supabase
      .from("smooth")
      .delete()
      .eq("id", smoothie.id);

      if(error){
        console.log(error);
      }else{
        navigate('/')
        onDelete(smoothie.id)
      }
  };

  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons">
        <Link to={"/" + smoothie.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i>
      </div>
    </div>
  );
};

export default SmoothieCard;
