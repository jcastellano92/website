import { useHistory } from "react-router-dom"
import { Button } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((CustomTheme) => 
  createStyles({
    buttonStyle: {
      opacity: '60%',
      textShadow: '0px 2px 6px #A8BFFF',
      '&:hover' : {
        transition: '1s',
        opacity: "100%"
      },
      [CustomTheme.breakpoints.down('xs')]: {
        
        fontSize: '2.7vw',
        fontWeight: 'lighter',
        letterSpacing: '1px'
      },
      [CustomTheme.breakpoints.up('sm')]: {
        padding: '5px 10px',
        marginLeft:'10px',
        marginRight:'10px',
        fontSize: '12px',
        fontWeight: 'lighter',
        letterSpacing: '5px'
      },
      [CustomTheme.breakpoints.up('lg')]: {
        padding: '6px 16px',
        marginLeft:'30px',
        marginRight:'30px',
        fontSize: '20px',
        fontWeight: 'lighter',
        letterSpacing: '5px'
      },
    }
  })
)

export const NavLink = ({data, key}) => {
  const classes = useStyles()
  const history = useHistory()

  function handleClick() {
    history.push(data.location)
  }

  return(
    <Button key={key} onClick={handleClick} color="secondary" className={classes.buttonStyle}>{data.title}</Button>
  )
}