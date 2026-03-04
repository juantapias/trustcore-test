'use client'

import { IFileBase } from '@/app/types'
import { mapFilesToDescription } from '@/app/utils'
import { ChangeEvent, useState } from 'react'

export default function DragInput() {
  const [files, setFiles] = useState<IFileBase[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const inputFiles = e.currentTarget.files
    if (!inputFiles) return

    const mapped = mapFilesToDescription(inputFiles)

    setFiles(prev => [...prev, ...mapped])
  }

  const onSubmit = () => {
    setIsLoading(true)
    setFiles(prev =>
      prev.map(file => ({
        ...file,
        status: 'uploading',
      }))
    )

    setTimeout(() => {
      setFiles(prev =>
        prev.map(file => ({
          ...file,
          status: 'done',
        }))
      )
      setIsLoading(false)
    }, 3000)
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center border border-dotted h-32 w-full'>
        <input type='file' onChange={handleFile} multiple />

        {isLoading && <p>Subiendo archivo</p>}

        {files && !isLoading && <button onClick={onSubmit}>Cargar</button>}

        {isLoading && (
          <div className='flex items-center space-x-4'>
            <button>Cancelar subida</button>
            <button>Eliminar</button>
          </div>
        )}
      </div>
    </>
  )
}
