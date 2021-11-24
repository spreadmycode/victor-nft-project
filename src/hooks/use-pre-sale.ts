import { useWallet } from '@solana/wallet-adapter-react';
import React, { useEffect, useState } from 'react';
import { WHITELIST_FOR_PRES } from '../utils/whitelist';

const presalePeriod = (Number(process.env.NEXT_PUBLIC_PRESALE_PERIOD) == 1);
const treasuryPubkey = process.env.NEXT_PUBLIC_TREASURY_ADDRESS;

const usePresale = () => {
  const wallet = useWallet();
  const [isMintPossible, setIsMintPossible] = useState(false);

  useEffect(() => {
    (async () => {
        if (
            !wallet ||
            !wallet.publicKey ||
            !wallet.signAllTransactions ||
            !wallet.signTransaction
        ) {
            return;
        }

        setIsMintPossible(false);

        if (presalePeriod) {                                               // Pre-sale period
            for (let i = 0; i < WHITELIST_FOR_PRES.length; i++) {
                let address = WHITELIST_FOR_PRES[i];
                if (wallet.publicKey.toBase58() == address) {
                    setIsMintPossible(true);
                    break;
                }
            }
        } else {                                                            // Normal-sale period
            setIsMintPossible(true);
        }

        if (wallet.publicKey.toBase58() == treasuryPubkey) {                // Owner of store can mint at anytime
            setIsMintPossible(true);
        }
    })();
  }, [wallet]);

  return { isMintPossible };
}

export default usePresale;