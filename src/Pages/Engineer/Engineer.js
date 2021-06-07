import { CardLayout } from 'layouts'
import { engineerData } from 'assets/data'
import { CardList, CardItem } from 'components/AnimatedCards'
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Route, useRouteMatch, useParams } from 'react-router-dom'
import React from "react";

import BackgroundImage from 'assets/images/HOME.png'

export const Engineer = () => {
  const { url } = useRouteMatch()
  console.log(useParams());

  return (
    <CardLayout title='Engineer Projects' backgroundImageUrl={BackgroundImage}>
      <AnimateSharedLayout type=''>
        <Route exact path={url}>
          <CardList/>
          <AnimatePresence key={url}>
            <CardItem />
          </AnimatePresence>
        </Route>
        {engineerData.cardData.map((item,key)=>{
          return(
            <Route path={`${url}/${item.id}`} key={key}>
              <CardList selectedId={item.id} />
              <AnimatePresence key={url}>
                {item.id && <CardItem id={item.id} key={item.id} />}
              </AnimatePresence>
            </Route>
          )
        })}
      </AnimateSharedLayout>
    </CardLayout>
  );
}