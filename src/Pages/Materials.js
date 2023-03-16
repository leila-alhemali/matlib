import { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify"
import Material from "../Components/MaterialCard";
import useMessage from "../Hooks/useMessage";

import { listMaterials } from "../graphql/queries"

const Materials = () => {
  const [materials, setMaterials] = useState([]);

  const { message } = useMessage();


  useEffect(() => {
    fetchMaterials()
  }, []);

  async function fetchMaterials() {
    const apiData = await API.graphql({ query: listMaterials })
    const materialsFromAPI = apiData.data.listMaterials.items;
    await Promise.all(
      materialsFromAPI.map(async (material) => {
        if (material.image) {
          const url = await Storage.get(material.name);
          material.image = url
        }
        return material
      })
    );
    setMaterials(materialsFromAPI)
  }


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
                item={material.name}
                description={material.description}
                amount={material.amount}
                phone={material.phoneNumber}
                email={material.email}
                image={material.image}
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
