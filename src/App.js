import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material'
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from  './components/index.js';

const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/youtube-Clone/' element={<Feed />} />
        <Route path='/youtube-Clone/video/:id' element={<VideoDetail />} />
        <Route path='/youtube-Clone/channel/:id' element={<ChannelDetail />} />
        <Route path='/youtube-Clone/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  );
}

export default App