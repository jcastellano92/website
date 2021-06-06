import React from 'react'

import { Typography, Grid, Divider, IconButton } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from "react-router-dom";
import { CustomTheme } from 'utils'

const useStyles = makeStyles((theme) => 
  createStyles({
    container: {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      padding: '0',
      backgroundColor:'#000000',
      overflow: 'hidden',
      overflowY: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    innerContainer: {
      maxWidth: '990px',
      backgroundColor:"rgba(0,0,0,.8)",
      margin: '20vh 25px',
      borderRadius: '20px',
      animationName: '$grow',
      animationDuration: '2s',
      [CustomTheme.breakpoints.down('sm')]: {
        padding: '20px 15px',
      },
      [CustomTheme.breakpoints.up('md')]: {
        padding: '45px 25px',
      },
    },
    header: {
      width: '100%',
      marginBottom: '20px'
    },
    titleContainer: {
      marginBottom: '2%'
    },
    title: {
      textShadow: '0 0 1px #000000, 0 2px 6px #b3ceff',
      cursor: 'default',
      userSelect: 'none',
      fontWeight: 'lighter',
      textTransform: 'uppercase',
      fontFamily: 'Raleway, sans-serif',
      textAlign: 'center',
      [CustomTheme.breakpoints.down('xs')]: {
        fontSize: "8vw",
        letterSpacing: '.5px',
      },
      [CustomTheme.breakpoints.up('sm')]: {
        fontSize: "40px",
        letterSpacing: '.5px',
        paddingLeft:'25px'
      },
      [CustomTheme.breakpoints.up('md')]: {
        fontSize: "55px",
        letterSpacing: '5px',
      }
    },
    divider: {
      backgroundColor: CustomTheme.palette.secondary.main,
      opacity: '50%',
    },
    button: {
      display: 'block',
      [CustomTheme.breakpoints.down('xs')]: {
        width: '40px',
        height: '40px',
      },
      [CustomTheme.breakpoints.up('sm')]: {
        width: '50px',
        height: '50px'
      },
      [CustomTheme.breakpoints.up('md')]: {
        width: '60px',
        height: '60px',
      },
      [CustomTheme.breakpoints.up('lg')]: {
        width: '63px',
        height: '63px',
      },
    },
    icon: {
      transform: 'translate(50%,50%)',
      position: 'absolute',
      top: '-10%',
      right: '39%',
      [CustomTheme.breakpoints.down('xs')]: {
        fontSize: '25px'
      },
      [CustomTheme.breakpoints.up('sm')]: {
        fontSize: '30px'
      },
      [CustomTheme.breakpoints.up('md')]: {
        fontSize: '38px'
      },
      [CustomTheme.breakpoints.up('lg')]: {
        fontSize: '38px'
      },
    },
    '@keyframes grow': {
      '0%': {
        marginTop: '100vh',
      },
      '100%': {
        marginTop: '20vh',
      },
    },
  })
)

export const CardLayout = ({children, title, backgroundImageUrl}) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
      <Grid container className={classes.container} style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.73)), url(${backgroundImageUrl})`}} justify="center" alignItems="flex-start" direction="row">
        <Grid container direction="row" className={classes.innerContainer} >
          <Grid className={classes.header}>
            <Grid container justify="flex-start" alignItems="center" wrap='nowrap' className={classes.titleContainer}>
              <Link to="/">
                <IconButton aria-label="back" color="secondary" className={classes.button} to>
                  <ArrowBackIosIcon className={classes.icon}/>
                </IconButton>
              </Link>
              <Typography variant="h1" color='secondary' className={classes.title}>
                {title}
              </Typography>
            </Grid>
            <Divider className={classes.divider}/>
          </Grid>
          
          <Grid> 
            <>{children}</> 
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}