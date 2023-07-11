import {
  Contract,
  NFTTransfer as NFTTransferEvent
} from "../generated/Contract/Contract"
import { NFT } from '../generated/schema'

export function handleNFTTransfer(event: NFTTransferEvent): void {

  const nft = new NFT(event.params.tokenID.toString())
  nft.to = event.params.to
  nft.from = event.params.to
  nft.price = event.params.price
  const nftMarket = Contract.bind(event.address)
  const tokenURI = nftMarket.tokenURI(event.params.tokenID)
  nft.tokenURI = tokenURI

  nft.save()
}