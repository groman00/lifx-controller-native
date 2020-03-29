import * as React from 'react';
import { Text, View } from 'react-native';
import { withAppContext } from '../components/HOCS';
import ColorPanel from '../components/ColorPanel';

const DetailScreen = ({ route, context }) => {
  const { group, light } = route.params;
  const config = context.lightings[group];
  const title = `${config.title} ${light || 'Group'}`;
  let selector;
  if (!config.lights) {
    selector = config.selector;
  } else if (light) {
    selector = config.lights[light];
  } else {
    selector = Object.keys(config.lights).map(key => config.lights[key]).join(',');
  }
  return (
    <>
      <View style={{ padding: 30 }}>
        <Text>{title}</Text>
      </View>
      <View style={{ padding: 30 }}>
        <ColorPanel selector={selector} fullColor={group === 'color'}/>
      </View>    
    </>
  );
};

export default withAppContext(DetailScreen);
