/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Token, TokenInterface } from "../Token";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526040518060400160405280600a81526020017f4441505020546f6b656e0000000000000000000000000000000000000000000081525060009081610048919061035e565b506040518060400160405280600481526020017f44415050000000000000000000000000000000000000000000000000000000008152506001908161008d919061035e565b50601260025534801561009f57600080fd5b50600254600a6100af9190610592565b620f42406100bd91906105dd565b600381905550600354600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061061f565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061018f57607f821691505b6020821081036101a2576101a1610148565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261020a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826101cd565b61021486836101cd565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061025b6102566102518461022c565b610236565b61022c565b9050919050565b6000819050919050565b61027583610240565b61028961028182610262565b8484546101da565b825550505050565b600090565b61029e610291565b6102a981848461026c565b505050565b5b818110156102cd576102c2600082610296565b6001810190506102af565b5050565b601f821115610312576102e3816101a8565b6102ec846101bd565b810160208510156102fb578190505b61030f610307856101bd565b8301826102ae565b50505b505050565b600082821c905092915050565b600061033560001984600802610317565b1980831691505092915050565b600061034e8383610324565b9150826002028217905092915050565b6103678261010e565b67ffffffffffffffff8111156103805761037f610119565b5b61038a8254610177565b6103958282856102d1565b600060209050601f8311600181146103c857600084156103b6578287015190505b6103c08582610342565b865550610428565b601f1984166103d6866101a8565b60005b828110156103fe578489015182556001820191506020850194506020810190506103d9565b8683101561041b5784890151610417601f891682610324565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b60018511156104b65780860481111561049257610491610430565b5b60018516156104a15780820291505b80810290506104af8561045f565b9450610476565b94509492505050565b6000826104cf576001905061058b565b816104dd576000905061058b565b81600181146104f357600281146104fd5761052c565b600191505061058b565b60ff84111561050f5761050e610430565b5b8360020a91508482111561052657610525610430565b5b5061058b565b5060208310610133831016604e8410600b84101617156105615782820a90508381111561055c5761055b610430565b5b61058b565b61056e848484600161046c565b9250905081840481111561058557610584610430565b5b81810290505b9392505050565b600061059d8261022c565b91506105a88361022c565b92506105d57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846104bf565b905092915050565b60006105e88261022c565b91506105f38361022c565b92508282026106018161022c565b9150828204841483151761061857610617610430565b5b5092915050565b610ea38061062e6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce5671461013457806370a082311461015257806395d89b4114610182578063a9059cbb146101a0578063dd62ed3e146101d057610093565b806306fdde0314610098578063095ea7b3146100b657806318160ddd146100e657806323b872dd14610104575b600080fd5b6100a0610200565b6040516100ad9190610a17565b60405180910390f35b6100d060048036038101906100cb9190610ad2565b61028e565b6040516100dd9190610b2d565b60405180910390f35b6100ee6103ee565b6040516100fb9190610b57565b60405180910390f35b61011e60048036038101906101199190610b72565b6103f4565b60405161012b9190610b2d565b60405180910390f35b61013c610656565b6040516101499190610b57565b60405180910390f35b61016c60048036038101906101679190610bc5565b61065c565b6040516101799190610b57565b60405180910390f35b61018a610674565b6040516101979190610a17565b60405180910390f35b6101ba60048036038101906101b59190610ad2565b610702565b6040516101c79190610b2d565b60405180910390f35b6101ea60048036038101906101e59190610bf2565b610766565b6040516101f79190610b57565b60405180910390f35b6000805461020d90610c61565b80601f016020809104026020016040519081016040528092919081815260200182805461023990610c61565b80156102865780601f1061025b57610100808354040283529160200191610286565b820191906000526020600020905b81548152906001019060200180831161026957829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036102fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f590610cde565b60405180910390fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516103dc9190610b57565b60405180910390a36001905092915050565b60035481565b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115610478576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046f90610d4a565b60405180910390fd5b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115610537576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052e90610db6565b60405180910390fd5b81600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105bf9190610e05565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061064a84848461078b565b50600190509392505050565b60025481565b60046020528060005260406000206000915090505481565b6001805461068190610c61565b80601f01602080910402602001604051908101604052809291908181526020018280546106ad90610c61565b80156106fa5780601f106106cf576101008083540402835291602001916106fa565b820191906000526020600020905b8154815290600101906020018083116106dd57829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561075057600080fd5b61075b33848461078b565b506001905092915050565b6005602052816000526040600020602052806000526040600020600091509150505481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f290610cde565b60405180910390fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108469190610e05565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108d49190610e39565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109749190610b57565b60405180910390a3600190509392505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156109c15780820151818401526020810190506109a6565b60008484015250505050565b6000601f19601f8301169050919050565b60006109e982610987565b6109f38185610992565b9350610a038185602086016109a3565b610a0c816109cd565b840191505092915050565b60006020820190508181036000830152610a3181846109de565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a6982610a3e565b9050919050565b610a7981610a5e565b8114610a8457600080fd5b50565b600081359050610a9681610a70565b92915050565b6000819050919050565b610aaf81610a9c565b8114610aba57600080fd5b50565b600081359050610acc81610aa6565b92915050565b60008060408385031215610ae957610ae8610a39565b5b6000610af785828601610a87565b9250506020610b0885828601610abd565b9150509250929050565b60008115159050919050565b610b2781610b12565b82525050565b6000602082019050610b426000830184610b1e565b92915050565b610b5181610a9c565b82525050565b6000602082019050610b6c6000830184610b48565b92915050565b600080600060608486031215610b8b57610b8a610a39565b5b6000610b9986828701610a87565b9350506020610baa86828701610a87565b9250506040610bbb86828701610abd565b9150509250925092565b600060208284031215610bdb57610bda610a39565b5b6000610be984828501610a87565b91505092915050565b60008060408385031215610c0957610c08610a39565b5b6000610c1785828601610a87565b9250506020610c2885828601610a87565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610c7957607f821691505b602082108103610c8c57610c8b610c32565b5b50919050565b7f696e76616c696420616464726573730000000000000000000000000000000000600082015250565b6000610cc8600f83610992565b9150610cd382610c92565b602082019050919050565b60006020820190508181036000830152610cf781610cbb565b9050919050565b7f6e6f7420656e6f7567682062616c616e63650000000000000000000000000000600082015250565b6000610d34601283610992565b9150610d3f82610cfe565b602082019050919050565b60006020820190508181036000830152610d6381610d27565b9050919050565b7f6e6f7420656e6f75676820616c6c6f77616e6365000000000000000000000000600082015250565b6000610da0601483610992565b9150610dab82610d6a565b602082019050919050565b60006020820190508181036000830152610dcf81610d93565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e1082610a9c565b9150610e1b83610a9c565b9250828203905081811115610e3357610e32610dd6565b5b92915050565b6000610e4482610a9c565b9150610e4f83610a9c565b9250828201905080821115610e6757610e66610dd6565b5b9291505056fea264697066735822122015bfc7bf82c5147309a6fd8fcd8400cf228367563499fd6875664b0f5e65734a64736f6c634300081c0033";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Token & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Token__factory {
    return super.connect(runner) as Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new Interface(_abi) as TokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Token {
    return new Contract(address, _abi, runner) as unknown as Token;
  }
}
