"use client";
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FaLightbulb, FaLock, FaCar, FaKey, FaSun, FaArrowLeft } from 'react-icons/fa';
import { MdDirectionsCar, MdSecurity, MdMiscellaneousServices } from 'react-icons/md';

const Container = styled.div`
  display: flex;
  height: 600px;
  width: 100%;
  max-width: 2000px;
  margin: 5px;
  margin-left: 20px;
`;

const Sidebar = styled.div`
  width: 24.5%;
  background: #1c1c1c;
  color: #fff;
  padding: 20px;
`;

const MainContent = styled.div`
  flex: 1;
  background: #000;
  color: #fff;
  padding: 20px;
  padding-left:1%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  color: #aaa;
  &:hover {
    background: #333;
    width: 110%;
  }

  &.highlight {
    background: #444;
    color: #fff;
    width: 110%;
  }

  svg {
    margin-right: 10px;
  }
`;

const ContentSection = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Slider = styled.input`
  width: 75%;
  height: 40px;
  background: #333;
  border: none;
  padding: 0;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 20px;
  appearance: none;
  z-index: 1;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 0; /* Make the thumb invisible */
    height: 0;
    background: none;
    border: none;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 40px;
    background: linear-gradient(
      to right,
      #888 0%,
      #aaa ${(props) => props.value}%,
      #333 ${(props) => props.value}%,
      #333 100%
    );
    border-radius: 20px;
    z-index: 0;
  }
`;

const BrightnessValue = styled.div`
  position: absolute;
  top: 50%;
  left: 38%; /* Always center horizontally */
  transform: translate(-50%, -50%);
  color: #000;
  font-weight: bold;
  z-index: 2;
`;

const SunIcon = styled(FaSun)`
  position: absolute;
  right: 25%; /* Adjust to place inside the slider */
  color: #fff;
  font-size: 20px;
  z-index: 2;
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  width: 75%;
  margin-bottom: 20px;
  border-radius: 50px;
  overflow: hidden;
  background: #333;
`;

const ToggleButton = styled.button<{ active: boolean }>`
  flex: 1;
  background: ${(props) => (props.active ? '#777' : '#333')};
  color: #f4f4f4;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #999;
  }
`;

const LinkButton = styled.button`
  background: #000;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  padding-left:3%;
  padding-top:2.9%;
  font-size: 16px;
  svg {
    margin-right: 5px;
  }
 
`;

const Dashboard: FC = () => {
  const [brightness, setBrightness] = useState(10); // Initial brightness value
  const [visibilityMode, setVisibilityMode] = useState<'day' | 'night' | 'auto'>('night');
  const [distanceFormat, setDistanceFormat] = useState<'kilometers' | 'miles'>('miles');
  const [temperatureFormat, setTemperatureFormat] = useState<'°F' | '°C'>('°F');

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrightness(parseInt(e.target.value, 10));
  };

  const toggleVisibilityMode = (mode: 'day' | 'night' | 'auto') => {
    setVisibilityMode(mode);
  };

  const toggleDistanceFormat = (format: 'kilometers' | 'miles') => {
    setDistanceFormat(format);
  };

  const toggleTemperatureFormat = (format: '°F' | '°C') => {
    setTemperatureFormat(format);
  };

  return (
    <Container>
      <Sidebar>
        <MenuItem><FaLightbulb /> Quick Controls</MenuItem>
        <MenuItem><FaLightbulb /> Lights</MenuItem>
        <MenuItem><FaLock /> Locks</MenuItem>
        <MenuItem className="highlight"><MdDirectionsCar /> Display</MenuItem>
        <MenuItem><FaCar /> Driving</MenuItem>
        <MenuItem><FaKey /> Autopilot</MenuItem>
        <MenuItem><MdSecurity /> Safety & Security</MenuItem>
        <MenuItem><MdMiscellaneousServices /> Service</MenuItem>
      </Sidebar>
      <LinkButton>
            <FaArrowLeft />
          </LinkButton>
      <MainContent>
         <ContentSection>
          <h3>Visibility Mode</h3>
          <ToggleButtonGroup>
            <ToggleButton
              active={visibilityMode === 'day'}
              onClick={() => toggleVisibilityMode('day')}
            >
              Day
            </ToggleButton>
            <ToggleButton
              active={visibilityMode === 'night'}
              onClick={() => toggleVisibilityMode('night')}
            >
              Night
            </ToggleButton>
            <ToggleButton
              active={visibilityMode === 'auto'}
              onClick={() => toggleVisibilityMode('auto')}
            >
              Auto
            </ToggleButton>
          </ToggleButtonGroup>
         </ContentSection>
         <ContentSection>
          <h3><MdDirectionsCar /> Display Brightness</h3>
          <SliderContainer>
            <BrightnessValue value={brightness}>{brightness}%</BrightnessValue>
            <Slider
              type="range"
              min="0"
              max="100"
              value={brightness}
              onChange={handleSliderChange}
              data-value={`${brightness}%`}
            />
            <SunIcon />
          </SliderContainer>
         </ContentSection>
         <ContentSection>
          <h3>Distance Formatting</h3>
          <ToggleButtonGroup>
            <ToggleButton
              active={distanceFormat === 'kilometers'}
              onClick={() => toggleDistanceFormat('kilometers')}
            >
              Kilometers
            </ToggleButton>
            <ToggleButton
              active={distanceFormat === 'miles'}
              onClick={() => toggleDistanceFormat('miles')}
            >
              Miles
            </ToggleButton>
          </ToggleButtonGroup>
         </ContentSection>
         <ContentSection>
          <h3>Temperature Formatting</h3>
          <ToggleButtonGroup>
            <ToggleButton
              active={temperatureFormat === '°F'}
              onClick={() => toggleTemperatureFormat('°F')}
            >
              °F
            </ToggleButton>
            <ToggleButton
              active={temperatureFormat === '°C'}
              onClick={() => toggleTemperatureFormat('°C')}
            >
              °C
            </ToggleButton>
          </ToggleButtonGroup>
         </ContentSection>
        </MainContent>
    </Container>
  );
};

export default Dashboard;
