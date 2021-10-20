import { PublicKey } from '@solana/web3.js';

export const PRESALE_CONTRACT_ID = new PublicKey('7Yaz2MPDx8e6Jxktm5u3tk3Hh76bdcghWjsB1fQrNUPC');

export const PRESALE_CONTRACT_ACCOUNT = new PublicKey('BafbgnB9Hqz5yVjMRfQoKvVWKhKMFT4x8qzRE7Ykk1ux');

export const CONTRACT_PIVATE_KEY = '[134,249,173,111,109,76,128,104,176,175,5,179,234,201,62,227,83,242,122,177,100,246,209,223,101,188,190,103,38,248,234,102,243,46,216,59,98,39,92,61,234,200,245,193,213,156,88,94,3,250,65,52,170,188,145,142,238,81,66,208,253,36,169,163]';

export const MINTER_STATUS = {
    Available           : 0,
    NotExistInWhiteList : 1,
    AlreadyMinted       : 2,
    PreSaleNoItem       : 3,
    PreSaleEnded        : 4,
    PreSaleNotStarted   : 5,
};
