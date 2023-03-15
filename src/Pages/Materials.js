import { useState, useEffect } from "react";

import Material from "../Components/MaterialCard";
import useMessage from "../Hooks/useMessage";


const Materials = () => {
  const [materials] = useState();

  const { message } = useMessage();


  useEffect(() => {
    const getMaterials = async () => {
     //GraphQL Fetch materials here
    };
    getMaterials();
  }, []);

  return (
    <article>
      <h1>Welcome</h1>

      <p>{message}</p>
      {materials?.length ? (
        <div>
          <ul className="MaterialsContainer">
            {materials.map((material) => (
              <Material
                key={material.material_id}
                item={material.material_name}
                description={material.material_description}
                amount={material.material_unit}
                phone={material.phone_number}
                email={material.email}
                image={material.image_name}
              />
            ))}
          </ul>
        </div>
      ) : (
        <p>Retrieving materials...</p>
      )}
    </article>
  );
};

export default Materials;
