import React,{useState,useContext,useEffect} from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem,Paper } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import Snackbar from '../../Snackbar/Snackbar';
import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';
import formatDate from '../../../utils/formatDate';
import { incomeCategories,expenseCategories } from '../../../constants/categories';
import CustomizedSnackbar from '../../Snackbar/Snackbar';

const initialState={
    amount:'',
    category: '',
  type: 'Income',
  date: formatDate(new Date()),
}
const Form=()=>{
    const classes=useStyles();
    const [formData,setFormData]=useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext);
    const[open,setOpen]=useState(false);
    const [showText, setShowText] = useState(true);

    const createTransaction=()=>{
        const transaction={...formData,amount:Number(formData.amount),id:uuidv4()}
        addTransaction({ ...formData, amount: Number(formData.amount), id: uuidv4() });
    setFormData(initialState);
    setOpen(true);
    setShowText(false);
    }
    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;
    /*useEffect(() => {
      const timeout = setTimeout(() => {
        setShowText(false); // Hide the message after 5 seconds
      }, 1000);
  
      return () => clearTimeout(timeout); // Clear the timeout on component unmount
    }, []);*/
    return(
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Snackbar open={open} setOpen={setOpen}/>
          {showText&&(
             <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom style={{ animation: 'textColorChange 2s infinite'
    }}>
        Try Adding a Transaction!!
        </Typography>
        <style>{`
            @keyframes textColorChange {
              0% {
                color: #ff0000;
                transform: translateY(0);
              }
              50% {
                color: #00ff00;
                transform: translateY(5px);
              }
              100% {
                color: #ff0000;
                transform: translateY(0);
              }
            }
          `}</style>
        </Grid>
          )}
        <Grid item xs={6}>
            <FormControl fullwidth>
                <InputLabel>Type</InputLabel>
                <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
          {selectedCategories.map((c)=><MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth  />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date:formatDate(e.target.value)})}/>
      </Grid>
      <Grid item container justify="flex-end" xs={12}>
      <Button className={classes.button} variant="contained" color="primary" s fullWidth onClick={()=>{createTransaction();setShowText(false);}} style={{
              background: 'linear-gradient(to right, #64b3f4, #c2e59c)',
              fontSize: '0.8rem', // Adjust the font size as needed
              padding: '8px', 
              width:'350px',// Adjust the padding as needed
            }}>ADD</Button>
            </Grid>
</Grid>
</Paper>
    )
}
export default Form;