import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext';

const Video = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)

  useEffect(() => {
    document.title = 'It Feels So Good (Radio Edit)'

  }, [])

  return (
    <div>
      <h1>Hola, {userInfo.name}. Este es tu video</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0bcYxH65kSg?si=E81AliwWpZabJ0sd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Video