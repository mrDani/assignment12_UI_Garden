import React from 'react';
import styled from 'styled-components';
import { Button } from './components/Button';
import { Label } from './components/Label';
import { Text } from './components/Text';
import { Table } from './components/Table';
import { Dropdown } from './components/Dropdown';
import { RadioButton } from './components/RadioButton';
import { Img } from './components/Img';
import { HeroImage } from './components/HeroImage';
import { Card } from './components/Card';

const AppContainer = styled.div`
  text-align: center;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function App() {
  return (
    <AppContainer>
      <h1>UI Garden Component Library</h1>

      <h2>Button</h2>
      <Button text="Click Me" onClick={() => alert('Button Clicked!')} />
      <Button text="Disabled Button" onClick={() => {}} disabled />

      <h2>Label</h2>
      <Label text="This is a Label" color="#ff69b4" />
      <Label text="Disabled Label" color="#ff69b4" disabled />

      <h2>Text</h2>
      <Text content="This is a text component." size="medium" />
      <Text content="Disabled Text" size="medium" disabled />

      <h2>Table</h2>
      <Table
        headers={['Name', 'Age', 'Country']}
        rows={[
          ['Alice', '25', 'USA'],
          ['Bob', '30', 'UK'],
        ]}
        footer="Footer text"
      />

      <h2>Dropdown</h2>
      <Dropdown
        options={['Option 1', 'Option 2', 'Option 3']}
        selected="Option 1"
        onChange={(value) => console.log(value)}
      />
      <Dropdown
        options={['Option 1', 'Option 2', 'Option 3']}
        selected="Option 1"
        onChange={(value) => console.log(value)}
        disabled
      />

      <h2>Radio Button</h2>
      <RadioButton
        options={['Option A', 'Option B', 'Option C']}
        selected="Option A"
        onChange={(value) => console.log(value)}
      />
      <RadioButton
        options={['Option A', 'Option B', 'Option C']}
        selected="Option A"
        onChange={(value) => console.log(value)}
        disabled
      />

      <h2>Image</h2>
      <Img
        src="https://via.placeholder.com/300"
        alt="Placeholder Image"
        width="300px"
        height="200px"
      />
      <Img
        src="https://via.placeholder.com/300"
        alt="Disabled Image"
        width="300px"
        height="200px"
        disabled
      />

      <h2>Hero Image</h2>
      <HeroImage
        backgroundImage="https://via.placeholder.com/1200x300"
        title="Hero Title"
        subtitle="This is the hero subtitle"
      />
      <HeroImage
        backgroundImage="https://via.placeholder.com/1200x300"
        title="Disabled Hero"
        subtitle="This is a disabled hero"
        disabled
      />

      <h2>Card</h2>
      <Card
        imageSrc="https://via.placeholder.com/300x200"
        title="Card Title"
        description="This is a description of the card."
        buttonLabel="Learn More"
        onButtonClick={() => alert('Button Clicked!')}
      />
      <Card
        imageSrc="https://via.placeholder.com/300x200"
        title="Disabled Card"
        description="This is a disabled card."
        buttonLabel="Learn More"
        onButtonClick={() => {}}
        disabled
      />
    </AppContainer>
  );
}

export default App;
