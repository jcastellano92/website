import { PageLayout } from 'layouts'
import { Typography, ButtonGroup, Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { homeData } from 'assets/data'
import { NavLink, SocialLinks } from 'components'
import ReactTypingEffect from 'react-typing-effect'
import BackgroundImage from 'assets/images/HOME.png'

const useStyles = makeStyles((CustomTheme) => 
  createStyles({
    titleContainer: {
      marginTop: '1%',
    },
    title: {
      textShadow: '0 0 1px #000000, 0 2px 6px #b3ceff',
      cursor: 'default',
      userSelect: 'none',
      textTransform: 'uppercase',
      fontFamily: 'Raleway, sans-serif',
      textAlign: 'center',
      fontWeight: 'lighter',
      animationName: '$fade1',
      animationDuration: '3s',
      [CustomTheme.breakpoints.down('xs')]: {
        fontSize: "10vw",
        letterSpacing: '10px',
      },
      [CustomTheme.breakpoints.up('sm')]: {
        fontSize: "7vw",
        letterSpacing: '20px',
      },
      [CustomTheme.breakpoints.up('md')]: {
        fontSize: "5vw",
        letterSpacing: '20px',
      },
      [CustomTheme.breakpoints.up('lg')]: {
        fontSize: "4vw",
        letterSpacing: '20px',
      }
    },
    subtitleContainer: { 
      [CustomTheme.breakpoints.down('sm')]: {
        marginTop: '1%'
      },
      [CustomTheme.breakpoints.up('md')]: {
        marginTop: '1%'
      }
    },
    subtitle: {
      cursor: 'default',
      userSelect: 'none',
      opacity: '50%',
      animationName: '$fade3',
      animationDuration: '4.5s',
      [CustomTheme.breakpoints.down('xs')]: {
        fontSize: "3.4vw",
        fontWeight: 'lighter',
        letterSpacing: '15px',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginLeft: '15px',
      },
      [CustomTheme.breakpoints.up('sm')]: {
        fontSize: "1.6vw",
        fontWeight: 'lighter',
        letterSpacing: '15px',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginLeft: '25px',
      }
    },
    cursor: {
      opacity: '0 !important'
    },
    linksContainer: {
      marginTop: '5%',
      animationName: '$fade2',
      animationDuration: '4.5s',
    },
    socialContainer: {
      marginTop: '10%',
      marginBottom: '20px',
      animationName: '$fade2',
      animationDuration: '6.5s',
    },
    '@keyframes fade1': {
      '0%': {
        opacity: '0%',
      },
      '40%': {
        opacity: '0%',
      },
      '100%': {
        opacity: '100%',
      },
    },
    '@keyframes fade2': {
      '0%': {
        opacity: '0%',
      },
      '40%': {
        opacity: '0%',
      },
      '100%': {
        opacity: '100%',
      },
    },
    '@keyframes fade3': {
      '0%': {
        opacity: '0%',
      },
      '40%': {
        opacity: '0%',
      },
      '100%': {
        opacity: '50%',
      },
    },
  })
)

export const Home = () => {
  const classes = useStyles()
  return (
    <PageLayout backgroundImageUrl={BackgroundImage}>
      <Grid container direction="row" wrap="nowrap" alignItems="center" justify="center" className={classes.titleContainer}>
        <Typography variant="h1" className={classes.title} color="primary">{homeData.title}</Typography>
      </Grid>
      <Grid container direction="row" wrap="nowrap" alignItems="center" justify="center" className={classes.subtitleContainer}>
        <Typography variant="h2" className={classes.subtitle} color="secondary">
          <ReactTypingEffect
            className={classes.subtitle}
            text={homeData.subtitle}
            eraseDelay={1000}
            typingDelay={1000}
            cursorClassName={classes.cursor}
            speed={100}
            eraseSpeed={100}
          />   
        </Typography>
      </Grid>
      <Grid container direction="row" wrap="nowrap" alignItems="center" justify="center" className={classes.linksContainer}>
        <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
          {homeData.links.map((link, index) => {
            return(<div key={index} className={classes.button}><NavLink data={link} /></div>)
          })}
        </ButtonGroup>
      </Grid>
      <Grid container direction="row" wrap="nowrap" alignItems="center" justify="center" className={classes.socialContainer}>
        <SocialLinks/>
      </Grid>
    </PageLayout>
  )
}