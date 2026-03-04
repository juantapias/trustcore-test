import React from 'react'

export default function FileList() {
  return (
    <div>
      <div className='grid grid-rows-1'>
        <div className='grid grid-cols-3'>
          <div>
            <span>Nombre del archivo</span>
          </div>
          <div>
            <span>Tamaño del archivo</span>
          </div>
          <div>
            <span>Progreso</span>
          </div>
        </div>
      </div>
    </div>
  )
}
