import React from 'react'
import { TwitterEmbed } from 'react-social-media-embed';
import '../pages/twitter.css'
function Twitter() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}  >
      <TwitterEmbed url="https://twitter.com/BrooklynNets/status/1647313375003811840" width={325} className='tweet' />
    </div>
  )
}

export default Twitter
