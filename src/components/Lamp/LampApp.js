import React, { useState } from 'react';
import styled from 'styled-components';
import Lamp from './components/Lamp/Lamp';
import LightSwitch from './components/Lamp/LightSwitch';

const LampApp = () => {
  /// state is immutable always use stateSetter
  /// as many states we want...

  const [isLampOneOn, setIsLampOneOn] = useState(false); ///lamp1
  const [isLampTwoOn, setIsLampTwoOn] = useState(true); ///lamp2

  const handleLightSwitchOne = () => setIsLampOneOn((prev) => !prev);
  const handleLightSwitchTwo = () => setIsLampTwoOn((prev) => !prev);

  return (
    <Room>
      <Lamp lampOn={isLampOneOn} position="left" />
      <Lamp lampOn={isLampTwoOn} position="right" />
      <LightSwitch
        name="one"
        callback={handleLightSwitchOne}
        switchOn={isLampOneOn}
        position="left"
      />
      <LightSwitch
        name="one"
        callback={handleLightSwitchOne}
        switchOn={isLampOneOn}
        position="left"
      />
      <LightSwitch
        name="two"
        callback={handleLightSwitchTwo}
        switchOn={isLampTwoOn}
        position="right"
      />
    </Room>
  );
};

export default LampApp;

const Room = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 10px solid black;
  margin: 0 auto;
`;
