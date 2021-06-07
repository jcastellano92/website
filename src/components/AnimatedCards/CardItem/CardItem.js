import React from "react";
import { motion } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { engineerData } from 'assets/data'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => 
  createStyles({
    overlay: {
      zIndex: 0,
      position: 'fixed',
      background: 'rgba(0, 0, 0, 0.8)',
      willChange: 'opacity',
      top: 0,
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      overflowY: 'hidden'
    },
    cardContentContainer: {
      zIndex: 1,
      width: '100%',
      height: '100%',
      display: 'block',
      top: 0,
      left: 0,
      position: 'fixed',
      overflowX: 'hidden',
      padding: '40px 0',
      pointerEvents: 'none'
    },
    cardContent: {
      pointerEvents: 'auto',
      position: 'relative',
      borderRadius: '20px',
      background: '#1c1c1e',
      overflow: 'hidden',
      width: '100%',
      margin: '0 auto',
      height: 'auto',
      maxWidth: '700px',
    },
    cardImageContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      overflow: 'hidden',
      height: '420px',
      width: '100%',
    },
    titleContainer: {
      position: 'absolute',
      top: '30px',
      left: '30px',
      maxWidth: '300px',
      textAlign: 'left'
    },
    category: {
      color: '#fff',
      fontSize: '14px',
      textTransform: 'uppercase'
    },
    content: {
      textAlign: 'left',
      padding: '460px 35px 35px 35px',
      maxWidth: '700px',
      width: '90vw',
    },
    link: {
      width: '100%',
      height: '100%',
      display: 'block',
      top: 0,
      left: 0,
      right: 0,
      position: 'absolute'
    }
  })
)

export function CardItem({ id }) {
  const data = engineerData.cardData.find(item => item.id === id);
  const classes = useStyles()

  if(!data) return <></>

  const title = data.title
  const category = data.category

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className={classes.overlay}
      >
        <Link className={classes.link} to="/Engineer" />
      </motion.div>
      <Grid container className={classes.cardContentContainer}>
        <motion.div className={classes.cardContent} layoutId={`card-container-${id}`}>
          <motion.div
            className={classes.cardImageContainer}
            layoutId={`card-image-container-${id}`}
          >
            <img src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className={classes.titleContainer}
            layoutId={`title-container-${id}`}
          >
            <span className={classes.category}>{category}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className={classes.content} animate>
            <LoremIpsum
              p={6}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />
          </motion.div>
        </motion.div>
      </Grid>
    </>
  );
}
