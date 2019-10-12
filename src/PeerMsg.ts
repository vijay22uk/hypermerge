import { RemoteMetadata } from './Metadata'
import { DocId } from './Misc'

export type PeerMsg = RemoteMetadata | DocumentMsg

interface DocumentMsg {
  type: 'DocumentMessage'
  id: DocId
  contents: any
}