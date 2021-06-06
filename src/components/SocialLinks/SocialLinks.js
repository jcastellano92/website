import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import { TiktokIcon } from 'assets/icons'
import { IconButton, Grid } from '@material-ui/core';
import { homeData } from 'assets/data'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((CustomTheme) => 
  createStyles({
    icons: {
      opacity: "30%",
      '&:hover' : {
        transition: '1s',
        opacity: "100%"
      }
    }
  })
)

export const SocialLinks = () => {
  const classes = useStyles()
  return (
    <Grid container direction="row" wrap="nowrap" alignItems="center" justify="center">
      <Grid>
        <IconButton className={classes.icons} color="primary" aria-label="facebook" href={homeData.socialLinks.facebook} target="_blank">
          <FacebookIcon />
        </IconButton>
      </Grid>
      <Grid>
        <IconButton className={classes.icons} color="primary" aria-label="linkedin" href={homeData.socialLinks.linkedIn} target="_blank">
          <LinkedInIcon />
        </IconButton>
      </Grid>
      <Grid>
        <IconButton className={classes.icons} color="primary" aria-label="instagram" href={homeData.socialLinks.instagram} target="_blank">
          <InstagramIcon />
        </IconButton>
      </Grid>
      <Grid>
        <IconButton className={classes.icons} color="primary" aria-label="github" href={homeData.socialLinks.gitHub} target="_blank">
          <GitHubIcon />
        </IconButton>
      </Grid>
      <Grid>
        <IconButton className={classes.icons} color="primary" aria-label="tiktok" href={homeData.socialLinks.tikTok} target="_blank">
          <TiktokIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}