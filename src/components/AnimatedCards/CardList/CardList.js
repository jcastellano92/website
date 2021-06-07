import React from "react";
import { engineerData } from 'assets/data'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';


const useStyles = makeStyles(() => 
  createStyles({
    innerContainer: {
      
    },
    titleContainer: {
      position: 'absolute',
      top: '35px',
      left: '35px',
    },
    cardContentContainer: {
      overflow: 'hidden',
      position: 'relative',
      flex: '0 0 calc(40% - 20px)',
      maxWidth: 'calc(40% - 20px)',
      borderRadius: '5%',
      lineHeight: 0,
      margin: '20px 20px',
      '&:nth-child(odd)': {
        marginLeft: 0,
      },
      '&:nth-child(even)': {
        marginRight: 0,
      },
      '&:nth-child(4n + 1),&:nth-child(4n + 4)': {
        flex: '0 0 calc(60% - 20px)',
        maxWidth: 'calc(60% - 20px)'
      },
    },
    cardContentInner: {
      maxWidth: '100%',
      
    }
  })
)

function Card({ id, title, category }) {
  const classes = useStyles()
  return (
    <motion.div container className={classes.cardContentContainer} layoutId={`card-container-${id}`} >
      <Link to={`Engineer/${id}`} className={classes.cardContentInner}>
        <Grid >
          <motion.div>
            <motion.div
              layoutId={`card-image-container-${id}`}
            >
              <img src={`images/${id}.jpg`} alt="" />
            </motion.div>
            <motion.div
              layoutId={`title-container-${id}`}
              className={classes.titleContainer}
            >
              <span>{category}</span>
              <h2>{title}</h2>
            </motion.div>
          </motion.div>
        </Grid>
      </Link>
    </motion.div>
  );
}

export function CardList({ selectedId }) {
  return (
    <Grid container>
      {engineerData.cardData.map(card => (
        <Card id={card.id} key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </Grid>
  );
}
