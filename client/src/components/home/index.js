import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { getDistanceByAddress, getCoords } from "../../apis";

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
    const[price, setPrice] = useState(0);

    // form
    const [formData, setFormData] = useState({
        origin:'', destination:'', time_option:''
    });

    const [timeOption, setTimeOption] = useState("1");
    const [modalPrompt, setModalPrompt] = useState({
        co2emission:'', distance: '', duration: '', gasoline: '',
    });

    const [car, setCar] = useState('');

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


    const submissionHandler = async (e) => {
        e.preventDefault();
        // test grouping data
        console.log(formData);
        setTimeOption(formData.time_option)

        try {
            const { data } = await getDistanceByAddress(formData);
            setModalPrompt({
                gasoline: data.gasoline,
                co2emission: data.co2emission,
                distance: data.distance,
                duration: data.duration,

            })

        } catch (error) {
            console.log(error);
        }
        // TODO: calling APIS
        setOpen(true);
        clear(e);
    }

    const clear = (e) => {
        setFormData({
            origin:'', time_option:'', destination: ''
        });
        setCar('');
    }

    const duration = [
        {
          value: '1',
          label: 'Day',
        },
        {
          value: '7',
          label: 'Week',
        },
        {
          value: '30',
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
                label="Enter your home address"
                variant="outlined"
                margin="normal"
                value={formData.origin}
                onChange={(e)=>
                    setFormData({...formData, origin: e.target.value})}
            />

            <TextField
            name="workAddress"
            label="Enter your work address" 
            variant="outlined" 
            margin="normal"
            value={formData.destination}
            onChange={(e)=>
                setFormData({...formData, destination: e.target.value})}
            />

            <TextField
            name="carMake"
            label="Enter your car make" 
            variant="outlined"
            margin="normal"
            value={car}
            onChange={(e) =>
                setCar(e.target.value)}
            />
            <TextField
                id="outlined-select-currency"
                select
                label="Duration"
                margin="normal" 
                value={formData.time_option}
                onChange={(e) =>
                    setFormData({...formData, time_option: e.target.value})}
                // defaultValue="Week"
            >
                {duration.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button
                className='mt-3'
                variant='contained'
                color="success"
                type="submit"
                size="large"
                onClick={submissionHandler}
            >
                Submit
            </Button>

            
            <div className='mt-2'>
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
                                Your Gasoline Cost Information:
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                - Distance between origin and destination: { modalPrompt.distance }.
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                - { modalPrompt.duration } each direction.
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                               - { Number(modalPrompt.gasoline).toFixed() } {Number(modalPrompt.gasoline) > 1 ? 'liters ' : 'liter '}
                                gasoline will be consumed for {timeOption} {Number(timeOption) > 1 ? 'days' : 'day' }.
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                - You spend ${Number(modalPrompt.gasoline) * 1.48} for gasoline cost.
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                - { modalPrompt.co2emission } Co2 emission in total.
                            </Typography>
                            
                        </Box>
                    </Modal>
            </div>
        </Box>
        </div>
    )
}
export default Home;