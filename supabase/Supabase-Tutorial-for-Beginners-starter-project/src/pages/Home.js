import SmoothieCard from "../components/SmoothieCard";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
const Home = () => {
  // console.log(supabase);

  const [fetchError, setFetchError] = useState(null);
  const [smooth, setSmooth] = useState(null);
  const [orderBy, setOrderBy] = useState('created_at');

  const handleDelete = (id) => {
    setSmooth(preSmooth=>{
      return preSmooth.filter(sm=> sm.id != id)
    })
  }

  useEffect(() => {
    const fetchSmooth = async () => {
      let { data, error } = await supabase.from("smooth").select().order(orderBy, {ascending:false})

      if (error) {
        console.error(error);
        setFetchError("Can't Fetch");
        setSmooth(null);
      } else if (data) {
        setSmooth(data);
        setFetchError(null);
        console.log(data);
      }
    };

    fetchSmooth();
  }, []);

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {smooth && (
        <div className="smoothies">
          <div className="order-by">
            <p>Order by:</p>
            <button onClick={() => setOrderBy('created_at')}>Time Created</button>
            <button onClick={() => setOrderBy('title')}>Title</button>
            <button onClick={() => setOrderBy('rating')}>Rating</button>
            {orderBy}
          </div>
          <div className="smoothie-grid">
            {smooth.map((smo) => (
              <SmoothieCard key={smo.id} smoothie={smo} onDelete={handleDelete}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
