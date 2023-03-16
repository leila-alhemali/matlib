import React from "react";
import useForm from "../Hooks/useForm";
import useCheckbox from "../Hooks/useCheckbox";
import useMessage from "../Hooks/useMessage";
import { View, Button } from "@aws-amplify/ui-react";

import { useContext } from "react";
import { UserContext } from "../App";

import { API, Storage } from "aws-amplify";

import { createMaterial as createMaterialMutation } from "../graphql/mutations";


const initialMaterial = {
  material_name: "",
  material_description: "",
  material_unit: "",
  phone_number: null,
  email: null,
  image: File,
};

const checkboxes = {
  phone: false,
  email: false,
};

export default function NewMaterial() {
  //do this when I want to access the user
  const user = useContext(UserContext);


  const { formData, handleInputChange, handleImageUpload, setFormData } =
    useForm(initialMaterial);
  const { checked, handleCheckbox } = useCheckbox(checkboxes);
  const { message, setMessage } = useMessage("");

  async function createMaterial(event) {
    event.preventDefault();
    //message context is not working
    // setMessage("Please stay on this page while we add the material to the database");
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("material_name"),
      member: user.username,
      description: form.get("material_description"),
      amount: form.get("material_unit"),
      phoneNumber: form.get("phone_number"),
      email: user.attributes.email,
      image: image.name,
    };
    if (!!data.image) {
      await Storage.put(data.name, image);
    }
    console.log(data);
    await API.graphql({
      query: createMaterialMutation,
      variables: { input: data },
    });
    event.target.reset();
    console.log("function executed");
  }

  return (
    <div className="MaterialFormContainer">
      {message ? (
        <p className="Message">{message}</p>
      ) : (
        <h5>Submit a new material to the database.</h5>
      )}
      <form className="MaterialForm" onSubmit={createMaterial}>
        <label>
          Name of Material
          <input
            name="material_name"
            type="text"
            placeholder="Material name"
            value={formData.material_name}
            onChange={handleInputChange}
          ></input>
        </label>
        <label>
          Describe the materials
          <input
            name="material_description"
            type="text"
            placeholder="Uses, quality, color, type, etc."
            value={formData.material_description}
            onChange={handleInputChange}
          ></input>
        </label>
        <label>
          Amount available
          <input
            name="material_unit"
            type="text"
            placeholder="Weight, length, height, etc."
            value={formData.material_unit}
            onChange={handleInputChange}
          ></input>
        </label>
        <div>
          <label>
            Contact Method: Select all that apply<br></br>
            <label for="phone">phone</label>
            <input
              name="phone"
              type="checkbox"
              onChange={() => handleCheckbox("phone", checked.phone)}
            ></input>
            {checked.phone === true ? (
              <input
                name="phone_number"
                type="text"
                placeholder="Phone Number"
                value={formData.phone_number}
                onChange={handleInputChange}
              ></input>
            ) : (
              ""
            )}
          </label>
        </div>
        <View
          name="image"
          as="input"
          type="file"
          style={{ alignSelf: "end" }}
        />
        <button className="Button" type="submit">
          Submit Material
        </button>
      </form>
    </div>
  );
}
