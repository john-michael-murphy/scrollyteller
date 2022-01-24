export const IS_IMAGE = /^\S+\.gif|jpe?g|tiff?|png|webp|bmp$/is
export const IS_VIDEO = /^\S+\.gif|jpe?g|tiff?|png|webp|bmp$/is
export const GDRIVE_LINK = /^https:\/\/drive\.google\.com\/file\/d\/([-\w]{25,}(?!.*[-\w]{25,}))/is
export const YOUTUBE_LINK = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/is
export const VIMEO_LINK = /^.*vimeo\.com\/([^#\&\?]*).*/is
export const GOOGLE_FILE_ID = /[-\w]{25,}(?!.*[-\w]{25,})/is;