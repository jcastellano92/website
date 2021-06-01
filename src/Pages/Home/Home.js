import { ButtonGroup } from '@material-ui/core'
import { PageLayout } from 'layouts'
import { Typography } from '@material-ui/core'
import { homeData } from 'assets/data'
import { NavLink, SocialLinks } from 'components'
import ReactTypingEffect from 'react-typing-effect'

export const Home = () => {
  return (
    <PageLayout>
      <Typography variant="h1">{homeData.title}</Typography>
      <Typography variant="h2">
        <ReactTypingEffect
          text={homeData.subtitle}
          eraseDelay={1000}
          typingDelay={1000}
        />
      </Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        {homeData.links.map((link, index) => {
          return(<NavLink key={index} data={link}/>)
        })}
      </ButtonGroup>
      <SocialLinks/>
    </PageLayout>
  )
}