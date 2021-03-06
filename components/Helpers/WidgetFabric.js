/* eslint-disable react/prop-types */
import React from 'react';

// components
import Grid from '../Elements/widgets/Grid';
import Carousel from '../Elements/widgets/Carousel';
import PublicityBanner from '../Base/PublicityBanner';
import ClientWidgets from '../Elements/widgets/Clientwidgets';
import Recomendation from '../Elements/widgets/Recomendation';
import Title from '../Base/Title';

const widgetMap = {
  grid: Grid,
  carousel: Carousel,
  publicityBanner: PublicityBanner,
  recomendation: Recomendation,
  client: ClientWidgets,
};

const WidgetFabric = ({
  type, data, title, items,
}) => {
  const Widget = widgetMap[type];
  const showTitle = title || (title !== '' && title && title.length > 3);
  return (
    <>
      <section>
        { showTitle && <Title text={title} /> }
        <Widget cards={data} items={items} />
      </section>
    </>
  );
};

export default WidgetFabric;
