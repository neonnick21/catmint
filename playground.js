/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const catNFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (catname, catcolor, catsize, catfur, catbreed) {
    catnft = {
        "name": catname,
        "color": catcolor,
        "size": catsize,
        "fur": catfur,
        "breed": catbreed
    }
    catNFTs.push(catnft);
    console.log("Minted: "+ catname);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTS () {
    for(i=0;i<catNFTs.length; i++){
        console.log("\nID: \t"+(i+1)); 
        console.log("Name: \t"+ catNFTs[i].name);
        console.log("Color: \t"+ catNFTs[i].color);
        console.log("Size: \t"+ catNFTs[i].size);
        console.log("Fur: \t"+ catNFTs[i].fur);
        console.log("Breed: \t"+ catNFTs[i].breed);
    }
}    
// print the total number of NFTS we have minted to the console
function getTotalSupply(){ 
    console.log("\nTotal Supply: " + catNFTs.length);
}

// call your functions below this line mintNFT("Bob", "Blue", "Hoodie", "Gold Chain");
mintNFT("Momo","Orange & White","Chonky","Stripes","Tabby");
mintNFT("Kiro","Black & White","Regular","Spots","Tuxedo");
mintNFT("Mio","Grey","Regular","Stripes","Tabby");
listNFTS();
getTotalSupply();
