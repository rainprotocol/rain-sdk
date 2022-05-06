import { ethers } from 'hardhat';
import { BigNumberish, Signer } from 'ethers';
import { assert } from 'chai';

import {
  ReserveTokenTest,
  ReserveTokenERC721,
  ReserveTokenERC1155,
} from '../typechain';

/**
 * Hardhat network chainID
 */
export const chainId = 31337;

/**
 * Enum for each Tier
 */
export enum Tier {
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
}

/**
 * Addresses saved that are in SDK BookAddresses deployed to Hardhat network.
 * **These addresses are deterministically generated with the HH signers.**
 */
export interface Addresses {
  RedeemableERC20Factory: string;
  VerifyFactory: string;
  VerifyTierFactory: string;
  ERC20BalanceTierFactory: string;
  ERC20TransferTierFactory: string;
  CombineTierFactory: string;
  ERC721BalanceTierFactory: string;
  GatedNFTFactory: string;
  RedeemableERC20ClaimEscrow: string;
  NoticeBoard: string;
  EmissionsERC20Factory: string;
  SaleFactory: string;
  AlwaysTier: string;
}

export const sixZeros = '000000';
export const eighteenZeros = '000000000000000000';

export const RESERVE_ONE = ethers.BigNumber.from('1' + sixZeros);
export const ONE = ethers.BigNumber.from('1' + eighteenZeros);
export const zeroAddress = ethers.constants.AddressZero;

/**
 * Return the Levels tier used by default with ERC20 tokens. LEVELS always will be an array with 8 elements to
 * correspond to the 8 TierLevels
 */
export const TierLevelsERC20: BigNumberish[] = Array.from(
  Array(8).keys()
).map(value => ethers.BigNumber.from(++value + eighteenZeros)); // [1,2,3,4,5,6,7,8] each mul by 1*10**18

export const TierLevelsERC721 = Array.from(Array(8).keys()).map((value) =>
  ethers.BigNumber.from(++value)
); // [1,2,3,4,5,6,7,8]

export async function deployErc20(signer?: Signer): Promise<ReserveTokenTest> {
  const TokenFactory = await ethers.getContractFactory(
    'ReserveTokenTest',
    signer
  );
  return (await TokenFactory.deploy()) as ReserveTokenTest;
}

export async function deployErc721(
  signer?: Signer
): Promise<ReserveTokenERC721> {
  const TokenFactory = await ethers.getContractFactory(
    'ReserveTokenERC721',
    signer
  );
  return (await TokenFactory.deploy()) as ReserveTokenERC721;
}

export async function deployErc1155(
  signer?: Signer
): Promise<ReserveTokenERC1155> {
  const TokenFactory = await ethers.getContractFactory(
    'ReserveTokenERC1155',
    signer
  );
  return (await TokenFactory.deploy()) as ReserveTokenERC1155;
}

/**
 * Expect that a async function/Promise throw an Error. Should be use only for
 * JS errors. To catch error in EVM, should use the ethereum-waffle library.
 *
 * @param cb - async functon or Promise (same)
 * @param errorMsg - (optional) Error message that is expected
 */
export async function expectAsyncError(
  cb: Promise<unknown>,
  errorMsg?: string
): Promise<void> {
  try {
    await cb;
    assert(false, 'no error was throw');
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown Error';

    if (message === 'no error was throw') {
      if (errorMsg) {
        assert(false, `Expected an error with "${errorMsg}" but ${message}`);
      }
      assert(false, message);
    }

    if (!errorMsg) {
      return;
    }

    if (errorMsg === message) {
      return;
    } else {
      assert(
        false,
        `Expected an error with "${errorMsg}" but got "${message}"`
      );
    }
  }
}

export const mockSubgraphReceipt = () => {};
