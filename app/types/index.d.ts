export interface IFileBase {
  id: string
  name: string
  size: number
  type: string
}

type FileIdle = FileBase & {
  state: 'idle'
}

type FileUploading = FileBase & {
  state: 'uploading'
  progress: number
}

type FileDone = FileBase & {
  state: 'done'
}

type FileError = FileBase & {
  state: 'error'
}

export type FileDescriptor = FileIdle | FileUploading | FileDone | FileError
