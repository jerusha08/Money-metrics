import { makeStyles } from '@material-ui/core';



export default makeStyles(()=>({
    income: {
        borderBottom: '15px solid rgba(0, 255, 0, 0.5)',
        borderRadius: '30px',
        backgroundColor:'beige',
        
      },
      expense: {
        borderBottom: '15px solid rgba(255, 0, 0, 0.5)',
        borderRadius: '30px',
        backgroundColor:'beige',
        /*backgroundImage:'url("../../../assets/expenses.jpg")',
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat:'no-repeat', // Adjust as needed*/
      },
      
}))
