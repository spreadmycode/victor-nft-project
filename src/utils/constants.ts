import { PublicKey } from '@solana/web3.js';

export const PRESALE_CONTRACT_ID = new PublicKey('Byq2Wk6d3NYQxjQFKmdwvyxUKNqpgGHPKvK7PFcb2i8G');

export const PRESALE_CONTRACT_ACCOUNT = new PublicKey('9zgM9nesuoYridXmKDgRNVGkfVR9qm3qGLT52nS45M1q');

export const CONTRACT_PIVATE_KEY = '[134,249,173,111,109,76,128,104,176,175,5,179,234,201,62,227,83,242,122,177,100,246,209,223,101,188,190,103,38,248,234,102,243,46,216,59,98,39,92,61,234,200,245,193,213,156,88,94,3,250,65,52,170,188,145,142,238,81,66,208,253,36,169,163]';

export const MINTER_STATUS = {
    Available           : 0,
    NotExistInWhiteList : 1,
    AlreadyMinted       : 2,
    PreSaleNoItem       : 3,
    PreSaleEnded        : 4,
    PreSaleNotStarted   : 5,
};

export const CANDY_START_DATE           = "1631750400000";

export const CANDY_MACHINE1_PRICE_SOL   = 1;
export const CANDY_MACHINE1_ID          = "29psGubQRdXHDArtt27QwezWH2sSgvxK3PJRnvEkqick";
export const CANDY_MACHINE1_CONFIG      = "3vNYDmfRFFQo5cb2Asww3kNTZ71zX2CwvyFPB3bct6ww";

export const CANDY_MACHINE2_PRICE_SOL   = 2;
export const CANDY_MACHINE2_ID          = "DgXnb59NKuGjp8voL9kbvsvyyVjb7sueWw7pVdXkziSJ";
export const CANDY_MACHINE2_CONFIG      = "DWox2j9ehSAR1iKLbCot4kvDYByDYVN39CBMZNsP3tKS";