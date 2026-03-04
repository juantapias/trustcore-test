import { IFileBase } from '../types'

export function mapFilesToDescription(files: FileList | File[]): IFileBase[] {
  const fileArray: File[] =
    files instanceof FileList ? Array.from(files) : files

  const uniqueFiles = new Map<string, File>()

  for (const file of fileArray) {
    const key = `${file.name}-${file.size}`

    if (!uniqueFiles.has(key)) {
      uniqueFiles.set(key, file)
    }
  }

  return Array.from(uniqueFiles.values()).map(file => ({
    id: crypto.randomUUID(),
    name: file.name,
    size: file.size,
    type: file.type,
    state: 'idle',
  }))
}
