import React from 'react'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

import { CustomTheme } from 'utils'

const useStyles = makeStyles(() => 
  createStyles({
    container: {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      padding: '0',
      backgroundColor:'#000000',
      overflow: 'hidden',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  })
)

export const PageLayout = (({children, backgroundImageUrl}) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
        <Grid container classes={{ root: classes.container }} style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.73)), url(${backgroundImageUrl})`}} justify="center" alignItems="flex-end" direction="row">
          <Grid> 
            <>{children}</> 
          </Grid>
        </Grid>
    </ThemeProvider>
  )
})