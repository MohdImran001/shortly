import React from 'react';
import { DesktopNav, MobileNav, Intro, Content } from './'

function App() {
  return (
    <div className="App pt-10">
      <DesktopNav />
      <MobileNav />
      <Intro />
      <Content />
    </div>
  );
}

export default App;
