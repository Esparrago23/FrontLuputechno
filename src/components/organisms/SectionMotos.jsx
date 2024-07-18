import React, { useRef, useState } from "react";
import Principal from "../molecules/Principal";
import Swal from "sweetalert2";
import Label from "../atoms/Label";
import Formulario from "../molecules/Formulario";
import ModalEliminar from "./ModalEliminar";
import Button_icons from "../atoms/Button_icons";
import Img from "../atoms/Img";
import FormularioEditar from "../molecules/FormularioEditar";
//depuracion de codigo, codigo repetido sweetalert

function SectionMotos() {
  const modalRef = useRef(null);
  const modalRefEdit = useRef(null);
  const deleteModalRef = useRef(null);
  const [currentPage, setCurrentPage] = useState("vehiculos");

  const openModal = () => {
    modalRef.current.showModal();
  };

  const openEditModal = () => {
    modalRefEdit.current.showModal();
  };

  const closeEditModal = () => {
    modalRefEdit.current.close();
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  const openDeleteModal = (page) => {
    setCurrentPage(page);
    deleteModalRef.current.showModal();
  };

  const closeDeleteModal = () => {
    deleteModalRef.current.close();
  };

  const seeVehiculos = async (e) => {
    const storedData = sessionStorage.getItem('token'); // Obtener la cadena JSON
const data = storedData ? JSON.parse(storedData) : null; // Convertir la cadena de nuevo a un objeto
console.log(data); 
console.log(data.token)
    e.preventDefault();
    try {
      const response = await fetch('https://lupultechnoapi.integrador.xyz/api/Vehiculos', {
          method: 'GET',
          headers: {
              'Content-Type':'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': data.token
          }
      });
      if (!response.ok) {
        throw new Error('Error en la autenticación');
    }
      const data = await response.json();
      console.log(data)
      
  } catch (error) {
      setError(error.message);
  }
  };

  const handleAddVehiculoMoto = () => {
    // Simulación de llamada a la API
    console.log("Vehiculo Agregado");

    return(

    Swal.fire({
        title: '!Éxito',
        text: 'Vehiculo agregado correctamente.',
        icon: 'success',
        confirmButtonText: 'OK',
        target: document.getElementById('principal'), //problema encontrado, este esta causando problema.
    }).then(() => {
        // Llama a la función para cerrar la modal
        closeModal();
    })

)
    ;

};

const handleEditVehiculoMoto = () => {
  // Simulación de llamada a la API
  console.log("Vehiculo Editado");

  return(

  Swal.fire({
      title: '!Éxito',
      text: 'Datos de Vehiculo Editados.',
      icon: 'success',
      confirmButtonText: 'OK',
      target: document.getElementById('principalEditar'), //problema encontrado, este esta causando problema.
  }).then(() => {
      // Llama a la función para cerrar la modal
      closeEditModal();
  })

)
  ;

};

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="mb-4 text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-stone-950">
          <Label className="m-2 font-bold" text="LISTO PARA TRABAJAR!" />
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Principal onClick={openModal} image={"/Moto.png"} text="Añadir." />
          <Principal
            image={"/Moto.png"}
            text="Visualizar"
            onClick={seeVehiculos}
          />
          <Principal
            onClick={openEditModal}
            image={"/pen-svgrepo-com(2).svg"}
            text="Editar."
          />
          <Principal
            onClick={() => openDeleteModal("vehiculos")}
            image={"/trash-xmark-svgrepo-com.svg"}
            text="Eliminar."
          />
        </div>

        <dialog
          ref={modalRef}
          className="border-4 border-black bg-azulIntegradorClaro"
        >
          <div>
            <Formulario />
            <div className="absolute top-0 right-0 w-12">
                <Button_icons onClick={closeModal}>
                  <Img image="/Cancelar.png" alt="Logo" />
                </Button_icons>
              </div>
            <div className="flex justify-center">
              
              <button
                className="w-1/5 p-2 m-1 font-bold text-white bg-green-600 border"
                onClick={handleAddVehiculoMoto}
              >
                Añadir
              </button>
            </div>
          </div>
        </dialog>

        <dialog
          ref={modalRefEdit}
          className="border-4 border-black bg-azulIntegradorClaro" id="principalEditar"
        >
          <div>
            <h1 className="m-2 font-bold">Editar Datos</h1>
            <FormularioEditar />
              <div className="absolute top-0 right-0 w-12">
                <Button_icons onClick={closeEditModal}>
                  <Img image="/Cancelar.png" alt="Logo" />
                </Button_icons>
              </div>
              <div className="flex justify-center">
              <button
                className="w-1/5 p-2 m-1 font-bold text-white bg-green-500 "
                onClick={handleEditVehiculoMoto}
              >
                Guardar
              </button>
            </div>
          </div>
        </dialog>

        <dialog
          ref={deleteModalRef}
          className="w-full max-w-md p-4 border-4 border-black bg-azulIntegradorClaro sm:w-1/2 sm:max-w-lg"
        >
          <div className="flex flex-col items-center">
            <ModalEliminar
              currentPage={currentPage}
              onCancel={closeDeleteModal}
            />
          </div>
        </dialog>
      </div>
    </>
  );
}

export default SectionMotos;
