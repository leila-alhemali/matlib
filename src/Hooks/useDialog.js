import { useState } from "react";
import useMessage from "./useMessage";

const useDialog = (activeMaterial) => {
  const [showDialog, setShowDialog] = useState(false);
  const {message, setMessage} = useMessage();


  const materialId = activeMaterial.material_id;

  const confirmDelete = () => {

      //rewrite axios call with graphQL call to confirm delete 

    setShowDialog(false);
  };

  const cancelDelete = () => {
    setShowDialog(false);
  };

  return { setShowDialog, showDialog, message, confirmDelete, cancelDelete, setMessage };
};

export default useDialog;
