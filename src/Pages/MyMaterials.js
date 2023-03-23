import { useState, useEffect, useContext } from "react";
import Material from "../Components/MaterialCard";
import Dialog from "../Components/Dialog";
import useDialog from "../Hooks/useDialog";
import UpdateMaterial from "./UpdateMaterial";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { getMaterial, listMaterials } from "../graphql/queries";

import { API, Storage, graphqlOperation } from "aws-amplify";

export default function MyMaterials() {
  const user = useContext(UserContext);

  const [myMaterials, setMyMaterials] = useState([]);
  const [activeMaterial, setActiveMaterial] = useState({});

  const {
    setShowDialog,
    showDialog,
    message,
    setMessage,
    confirmDelete,
    cancelDelete,
  } = useDialog(activeMaterial);
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    fetchMaterials();
  }, [activeMaterial]);


  async function fetchMaterials() {
    const apiData = await API.graphql({
      query: listMaterials,
      variables: {filter: {member: {eq: user.username}}},
    });
    const materialsFromAPI = apiData.data.listMaterials.items;
    await Promise.all(
      materialsFromAPI.map(async (material) => {
        if (material.image) {
          const url = await Storage.get(material.name);
          material.image = url;
        }
        return material;
      })
    );
    console.log(materialsFromAPI);
    setMyMaterials(materialsFromAPI);
  }

  const handleDeleteClick = (material) => {
    setActiveMaterial(material);
    setShowDialog(true);
  };

  const handleUpdateClick = (material) => {
    setActiveMaterial(material);
    setShowUpdate(true);
  };

  return (
    <article>
      <h2>Your Materials</h2>
      {message ? <p>{message}</p> : <></>}
      <p>Update, edit and delete materials you have listed here.</p>
      {myMaterials?.length ? (
        <ul className="MaterialsContainer">
          {myMaterials.map((material) => (
            <li className="MaterialContainer" key={material.material_id}>
              <Material
                item={material.name}
                description={material.description}
                amount={material.amount}
                phone={material.phoneNumber}
                email={material.email}
                image={material.image}
              />
              <div className="ButtonContainer">
                <button
                  className="Button"
                  onClick={() => handleUpdateClick(material)}
                >
                  Update
                </button>
                <button
                  className="Button"
                  onClick={() => handleDeleteClick(material)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          You have no materials to display. Add materials to the database{" "}
          <Link to="/newmaterial">here</Link>.
        </p>
      )}
      <Dialog show={showDialog} cancel={cancelDelete} confirm={confirmDelete} />
      <UpdateMaterial
        material={activeMaterial}
        show={showUpdate}
        setShow={setShowUpdate}
        setMessage={setMessage}
      />
    </article>
  );
}
