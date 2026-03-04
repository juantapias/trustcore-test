import DragInput from './components/drag-input/DragInput'
import FileList from './components/file-list/FileList'

export default function Home() {
  return (
    <main className='container mx-auto px-4'>
      <DragInput />
      <FileList />
    </main>
  )
}
