const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE3Mjc2ZjdhLTE4YzAtNDJjOS05MjUyLTk1ZGFhODkxNmRiMyIsImtleSI6InIyNXQ2dXIzIiwiaWF0IjoxNjY3NjcyNDE1fQ.1lDEuJywc9a7WoN2RlNdEuNYLCCG8iZkN2dK0mx2x5s"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});

async function run() {
    const collection = await revise.addCollection({
        name: "AnimalNFT",
        uri: "AnimalNFTTest",
      });
    
      const nft = await revise.addNFT(
        {
          image:
            "https://revise-testing.fra1.digitaloceanspaces.com/sample-collection/3.jpg",
          name: "Kushagra Lord",
          tokenId: "2",
          description: "This is a test description",
        },
        [{ attack: "100" }, { color: "maroon" }, { stamina: "0" }],
        "85f3d692-90dc-4e90-9344-3ade35275f9b"
      );
    
      console.log(nft);
}
run()

