import * as React from 'react'

import {
  generateClientDropzoneAccept,
  generatePermittedFileTypes,
} from '@uploadthing/shared'
import { toast } from 'sonner'
import { useDropzone } from '@uploadthing/react'
import imageCompression, { Options } from 'browser-image-compression'

import { useUploadThing } from '@/lib/uploadthing'

type Params = {
  /**
   * Callback fired when the upload begins.
   */
  onUploadBegin?: () => void
  /**
   * Callback fired when the upload is complete on the client side.
   */
  onClientUploadComplete?: () => void
  /**
   * Callback fired when there is an error during upload.
   */
  onUploadError?: (error: Error) => void
  /**
   * Callback fired when image compression is complete.
   * @param url - The data URL of the compressed image.
   */
  onCompressionComplete?: (url: string) => void
  /**
   * Callback fired when the preview image is deleted.
   */
  onDeletePreview?: () => void
}

/**
 * Custom hook to handle image upload with compression and preview functionality.
 */
export function useUploadImage({
  onUploadBegin,
  onClientUploadComplete,
  onUploadError,
  onCompressionComplete,
  onDeletePreview,
}: Params = {}) {
  const [files, setFiles] = React.useState<File[]>([])

  const { startUpload, isUploading, routeConfig } = useUploadThing(
    'imageUploader',
    {
      onUploadBegin: () => {
        toast.loading('Uploading your image...', { id: 'upload-image' })
        onUploadBegin?.()
      },
      // Reset the preview image and files after submitting post form
      onClientUploadComplete: () => {
        setFiles([])
        onClientUploadComplete?.()
      },
      onUploadError: e => {
        console.log('[UPLOAD_ERROR]', e)
        toast.error('Something went wrong while uploading the image.')
        onUploadError?.(e)
      },
    },
  )

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(
      generatePermittedFileTypes(routeConfig).fileTypes,
    ),
  })

  /**
   * Handles the compression and setting of uploaded image files.
   * @param event - The change event from the file input element.
   */
  async function handleUploadFiles(event: React.ChangeEvent<HTMLInputElement>) {
    if (isUploading) return

    getInputProps?.().onChange?.(event)

    const file = event.target.files?.[0]

    if (!file) return

    const options: Options = {
      maxSizeMB: 2, // Target size in MB
      maxWidthOrHeight: 800, // Resize dimensions
      useWebWorker: true,
    }

    try {
      const compressedFile = await imageCompression(file, options)
      const url = await imageCompression.getDataUrlFromFile(compressedFile)

      setFiles([compressedFile])

      onCompressionComplete?.(url)
    } catch (error) {
      console.error('[COMPRESSION_ERROR]', error)
    }
  }

  /**
   * Starts the upload of the selected media files.
   * @return A promise that resolves to the URL of the uploaded file, or null if the upload fails or no files are selected.
   */
  async function startUploadMedia(): Promise<string | null> {
    if (files.length === 0) return null

    const res = await startUpload(files)

    if (!res || !res[0]?.ufsUrl) {
      return null
    }

    return res[0].ufsUrl
  }

  function handleDeletePreview() {
    setFiles([])
    onDeletePreview?.()
  }

  return {
    /**
     * The selected files for upload.
     */
    files,
    /**
     * Function to set the selected files.
     */
    setFiles,
    /**
     * The uploading state.
     */
    isUploading,
    /**
     * Props for the dropzone root element.
     * @example
     * <div {...getRootProps()}></div>
     */
    getRootProps,
    /**
     * Props for the file input element.
     */
    getInputProps,
    /**
     * Handles the compression and setting of uploaded image files.
     * @param event - The change event from the file input element.
     */
    handleUploadFiles,
    /**
     * Starts the upload of the selected media files.
     * @return A promise that resolves to the URL of the uploaded file, or null if the upload fails or no files are selected.
     */
    startUploadMedia,
    /**
     * Clears the preview image and files.
     */
    handleDeletePreview,
  }
}
