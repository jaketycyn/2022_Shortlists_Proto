import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";

const AddList = () => {
  const { isEditing, showAlert, displayAlert } = useAppContext();
  return (
    <div>
      <form className="form">
        <h3>{isEditing ? "edit list" : "add list"}</h3>
      </form>
    </div>
  );
};

export default AddList;
