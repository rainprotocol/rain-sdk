/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SSTORE2, SSTORE2Interface } from "../SSTORE2";

const _abi = [
  {
    inputs: [],
    name: "WriteError",
    type: "error",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122062b631be640ee5eed0789c5880959657c36cd39fd95d8a3f692631801639ee9f64736f6c63430008110033";

type SSTORE2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SSTORE2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SSTORE2__factory extends ContractFactory {
  constructor(...args: SSTORE2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SSTORE2> {
    return super.deploy(overrides || {}) as Promise<SSTORE2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SSTORE2 {
    return super.attach(address) as SSTORE2;
  }
  connect(signer: Signer): SSTORE2__factory {
    return super.connect(signer) as SSTORE2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SSTORE2Interface {
    return new utils.Interface(_abi) as SSTORE2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SSTORE2 {
    return new Contract(address, _abi, signerOrProvider) as SSTORE2;
  }
}
