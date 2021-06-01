import { useHistory } from "react-router-dom"
import { Button } from '@material-ui/core'

export const NavLink = ({data, key}) => {
  console.log(data);
  const history = useHistory()

  function handleClick() {
    history.push(data.location)
  }

  return(
    <Button key={key} onClick={handleClick}>{data.title}</Button>
  )
}