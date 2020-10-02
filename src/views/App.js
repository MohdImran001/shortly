import React from 'react';
import { DesktopNav, MobileNav, Intro, Content, Boost, Footer } from './'

function App() {
  return (
    <div className="App pt-10">
      <DesktopNav />
      <MobileNav />
      <Intro />
      <Content />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
