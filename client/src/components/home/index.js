import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';


const modalBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-10%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const Home = () => {

    const [open, setOpen] = useState(false); 

    // form 
    const [formData, setFormData] = useState({
        address:'', car:'', duration:''
    });

    const handleClose = () => setOpen(false);
    const formik = useFormik({
        validationSchema: Yup.object({
            workAddress: Yup.string()
            .required('Sorry an address is required'),
            carMake: Yup.string()
            .required('Sorry your car make is required')
        }),
        // onSubmit: (values) => {
        //     handleSubmit(values)
        // }
    });


    const submissionHandler = (e) => {
        e.preventDefault();
        setOpen(true);

    }

    const duration = [
        {
          value: 'day',
          label: 'Day',
        },
        {
          value: 'week',
          label: 'Week',
        },
        {
          value: 'month',
          label: 'Month',
        },
      ];

    return(

        <div className="form_container">
            <h1 className="projectName">Greenery Miles</h1>
        <Box
            sx={{
                '& .MuiTextField-root': { width:'100%',marginTop:'20px' },
            }}
            component="form"
            >
            <TextField
            name="workAddress"
            label="Enter your work address" 
            variant="outlined" 
            margin="normal" 
            />

            <TextField
            name="carMake"
            label="Enter your car make" 
            variant="outlined"
            margin="normal"  
            />

            <TextField
                id="outlined-select-currency"
                select
                label="Duration"
                margin="normal" 
                
                // defaultValue="Week"
            >
                {duration.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            
            
            <div className='mt-2'>
                    <Button 
                        className='mt-3'
                        variant='contained' 
                        color="success" 
                        type="submit" 
                        size="large"
                        onClick={submissionHandler}                        >
                        Submit
                    </Button>
                    <Modal  
                        hideBackdrop 
                        open={open} 
                        onClose={handleClose}>

                        <Box sx={modalBox} position="absolute" >
                            <Box 
                                display="flex"
                                justifyContent="flex-end"
                                alignItems="flex-end">
                                <Button className="modalClose"  color="error" onClick={handleClose}>x</Button>
                            </Box>
                            
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                            
                        </Box>
                    </Modal>
            </div>

        </Box>
        </div>
    )
}
export default Home;