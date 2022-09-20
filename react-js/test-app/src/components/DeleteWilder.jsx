import axios from "axios";
// import { useEffect, useState } from "react";
import styles from "../styles/DeleteWilder.module.css";

function DeleteWilder({ wilderInfos, onDeleteWilder, setDeleteWilderIsOpen }) {
  const deleteWilderAndReload = async () => {
    await axios.delete(`http://localhost:3001/api/wilders/${wilderInfos.id}`);
    onDeleteWilder();
  };

  return (
    <div className="modale">
      <h2>Warning, any deletion in permanent!</h2>
      <p>
        Would you realy delete this wilder:{" "}
        <span className={styles.text_important}>{wilderInfos.name}</span>
      </p>

      <button
        onClick={() => {
          deleteWilderAndReload();
          setDeleteWilderIsOpen({ isOpen: false });
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setDeleteWilderIsOpen({ isOpen: false });
        }}
      >
        I changed my mind
      </button>
    </div>
  );
}

export default DeleteWilder;
