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
    }
  })
)

export const PageLayout = (({children}) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
        <Grid container classes={{ root: classes.container }} justify="center" alignItems="center" direction="row">
          <Grid> 
            <>{children}</> 
          </Grid>
        </Grid>
    </ThemeProvider>
  )
})