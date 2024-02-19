import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

export default function Folder({ folder }) {

  return (
    <Button 
      to={`/folder/${folder.id}`} 
      as={Link} 
      variant='outline-dark' 
      className="text-truncate w-100"
    >
      <FontAwesomeIcon icon={faFolder} className='fa-2'/>
      {folder.name}
    </Button>
  )
}