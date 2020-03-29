import React, { useState } from 'react';
import { View, Slider, Text, StyleSheet } from 'react-native';

import { withAppContext } from './HOCS';

const ColorPanel = ({ context, selector, fullColor }) => {
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(0);
  const [brightness, setBrightness] = useState(.5);
  const [kelvin, setKelvin] = useState(2700);
  const slidersChanged = () => {
    context.setState(selector, `hue:${hue} saturation:${saturation} brightness:${brightness} kelvin:${kelvin}`);
  };
  return (
    <>
      <View style={{ padding: 30 }}>
        <Text>Brightness: {brightness}</Text>
        <Slider
          onSlidingComplete={slidersChanged}
          onValueChange={(value) => setBrightness(value)}
          value={brightness}
          step={.01}
          minimumValue={0}
          maximumValue={1}
        />   
      </View>    
      <View style={{ padding: 30 }}>
        <Text>Kelvin: {kelvin}</Text>
        <Slider
          onSlidingComplete={slidersChanged}
          onValueChange={value => setKelvin(value)}
          value={kelvin}
          valueLabelDisplay="auto"
          step={100}
          minimumValue={1500}
          maximumValue={9000}
        />   
      </View>        
      <View style={{ padding: 30 }}>
        <Text>Hue: {hue}</Text>
        <Slider
          disabled={!fullColor}
          onSlidingComplete={slidersChanged}
          onValueChange={value => setHue(value)}
          value={hue}
          step={1}
          minimumValue={0}
          maximumValue={360}
        />   
      </View>
      <View style={{ padding: 30 }}>
        <Text>Saturation: {saturation}</Text>
        <Slider
          disabled={!fullColor}        
          onSlidingComplete={slidersChanged}
          onValueChange={value => setSaturation(value)}
          value={saturation}
          step={.01}
          minimumValue={0}
          maximumValue={1}
        />   
      </View>                    
    </>
  );
};

// const styles = StyleSheet.create({
  // container: {
  //     flex: 1,
  //     justifyContent: 'center',
  // },
  // thumb: {
    // width: 50,
    // height: 80,
    // backgroundColor: colors.primary,
    // borderBottomRightRadius: 100,
    // borderTopRightRadius: 100,
  // },
  // track:{
  //     height: 80,
  //     borderBottomRightRadius: 20,
  //     borderTopRightRadius: 20,
  // }
// });

export default withAppContext(ColorPanel);
