import { CardLayout } from 'layouts'
//import { Typography, ButtonGroup, Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { designerData } from 'assets/data'
import BackgroundImage from 'assets/images/HOME.png'

const useStyles = makeStyles((CustomTheme) => 
  createStyles({
    test: {
      height: '100px'
    }
  })
)

export const Designer = () => {
  const classes = useStyles()
  return (
    <CardLayout backgroundImageUrl={BackgroundImage} title={designerData.title}>
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