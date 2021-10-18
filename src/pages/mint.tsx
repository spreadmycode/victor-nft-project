    <div>
        {wallet.connected &&
        <p className="text-gray-800 font-bold text-lg cursor-default">Address: {shortenAddress(wallet.publicKey?.toBase58() || "")}</p>
        }

        {wallet.connected &&
        <>
            <p className="text-gray-800 font-bold text-lg cursor-default">Balance: {(balance || 0).toLocaleString()} SOL</p>
            <p className="text-gray-800 font-bold text-lg cursor-default">Available: {nftsData.itemsRemaining}</p>
            <p className="text-gray-800 font-bold text-lg cursor-default">Minted: {nftsData.itemsRedeemed}</p>
            <p className="text-gray-800 font-bold text-lg cursor-default">Total: {nftsData.itemsAvailable}</p>
        </>
        }

        <div className="flex flex-col justify-start items-start">
        {wallet.connected &&
            // <RecaptchaButton
            <button
            // actionName="mint"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5"
            disabled={isSoldOut || isMinting || !isActive}
            onClick={onMint}
            >
            {isSoldOut ? (
                "SOLD OUT"
            ) : isActive ?
                <span>MINT {isMinting && 'LOADING...'}</span> :
                <Countdown
                date={mintStartDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
                />
            }
            </button>
            // </RecaptchaButton>
        }

        {wallet.connected &&
        <>
            <input type="number" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5" 
            step={1} min={2} max={5} value={packCount} 
            onChange={(e) => { setPackCount(Number.parseInt(e.target.value)); }} 
            />
            {/* <RecaptchaButton */}
            <button
            // actionName="mint5"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-2"
            disabled={isSoldOut || isMinting || !isActive}
            onClick={() => onMintMultiple(packCount)}
            >
            {isSoldOut ? (
                "SOLD OUT"
            ) : isActive ?
                <span>{packCount} NFTs {isMinting && 'LOADING...'}</span> :
                <Countdown
                date={mintStartDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
                />
            }
            </button>
            {/* </RecaptchaButton> */}
        </>
        }
        </div>
    </div>