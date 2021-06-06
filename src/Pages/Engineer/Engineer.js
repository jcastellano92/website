import { CardLayout } from 'layouts'
//import { Typography, ButtonGroup, Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { engineerData } from 'assets/data'
import BackgroundImage from 'assets/images/HOME.png'

const useStyles = makeStyles((CustomTheme) => 
  createStyles({
    test: {
      height: '100px'
    }
  })
)

export const Engineer = () => {
  const classes = useStyles()
  return (
    <CardLayout backgroundImageUrl={BackgroundImage} title={engineerData.title}>
      <div className={classes.test}>test</div>
      <div className={classes.test}>test</div>
      <div className={classes.test}>test</div>
      <div className={classes.test}>test</div>
      <div className={classes.test}>test</div>
      <div className={classes.test}>test</div>
      <div className={classes.test}>test</div>
      <div className={classes.test}>test</div>
      <div className={classes.test}>test</div>
      <div className={classes.test}>test</div>
    </CardLayout>
  )
}