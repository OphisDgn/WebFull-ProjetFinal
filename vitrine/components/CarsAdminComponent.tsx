import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrayComponent, InputTextComponent, ButtonComponent, TextareaComponent } from "my-lib-ui";
import { type } from "os";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CarsAdminComponent: React.FC = () => {
  const hd = ["Nom", "Modèle", "Prix", "Description", "Action"];
  const [carsItems, setCarsItems] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState(null);
  const [open, setOpen] = useState<boolean>(false);
  const [loadCreate, setLoadCreate] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

   const requestList = () => {
    axios.get('http://localhost:8000/cars', {
     headers: 
     {
       'Authorization': `Bearer ${token}`
     }
    })
    .then((response) => {
      console.log(response.data);
      setCarsItems(response.data.cars);
      setLoading(false)
   })
   .catch((error) => { 
     console.log(error);
   })
  };

  
  const onSubmitRegister = (carsID: number) => {
    setLoading(true);
    axios.post('http://localhost:8000/cars/delete/' + carsID, "", {
      headers: {
        'Authorization': `Bearer ${token}`
      }})
    .then((onfulfilled) => {
      requestList();
    })
    .catch((onrejected) => {
      console.log(onrejected)
    })
  };

  const onSubmitCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let doc = document.getElementById("modal-modal-description");
    if(!doc) return;
    let formInputs = doc.querySelectorAll('input');
    if(!formInputs) return;
    let formTextarea = doc.querySelector('textarea');
    if (!formTextarea) return;

    const carData: Object = {
      name: formInputs[1].value,
      model: formInputs[0].value,
      price: formInputs[2].value,
      image: formInputs[3].value,
      description: formTextarea.value,
    };

    //console.log(carData);
    if (carData) {
      setLoadCreate(true);
      axios.post('http://localhost:8000/cars/create', carData, {
        headers: 
        {
          'Authorization': `Bearer ${token}`
        }
       })
      .then((onfulfilled) => {
        console.log(onfulfilled.data);
        setLoading(true);
        setLoadCreate(false);
        handleClose();
        requestList();
      })
      .catch((onrejected) => {
        setLoadCreate(false);
        console.log(onrejected.response.data);
      });
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  useEffect(() => {
    if(token){
      requestList()
    }
   
  }, [token]);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <section className="panel-admin-container">
      {!loading && (
        <div>
          <div className="form_list_figma_right">
            <button className="button_create_car" onClick={handleOpen}>Créer une voiture</button>
          </div>
          <ArrayComponent carsItems={carsItems} headers={hd} onDeleted={onSubmitRegister} typeList={"cars"}/>

          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Créer une voiture
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <form onSubmit={(e) => onSubmitCreate(e)}>
                  <div className="form_create_row_position">
                    <InputTextComponent label="Modèle" type="text" name="model"/>
                    <InputTextComponent label="Nom" type="text" name="name"/>
                  </div>
                  
                  <div className="form_create_row_position">
                    <InputTextComponent label="Prix" type="number" name="price" step="0.01"/>
                    <InputTextComponent label="Image" type="text" name="image"/>
                  </div>
                  
                  <div className="form_create_row_position form_create_textarea">
                    <TextareaComponent label="Description" name="description"/>
                  </div>

                  {!loadCreate && (
                  <div className="form_create_row_position form_create_row_center">
                    <ButtonComponent type={'submit'} label="Créer"/>
                  </div>
                  )}
                  {loadCreate && (
                  <div className="form_create_row_position form_create_row_center">
                    <div className="loading-icon"></div>
                  </div>
                  )}
                  
                </form>
              </Typography>
            </Box>
          </Modal>
        
        </div>

      )}
      {loading && (
        <div className="form_list_figma_centered">
          <div className="loading-icon"></div>
        </div>
      )}
    </section>
  );
};

export default CarsAdminComponent;