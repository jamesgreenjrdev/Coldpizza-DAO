import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x3EAaA16b5033948864d453476c0784028ED8c377");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "ColdpizzaDAO Entry Token",
        description: "This NFT will give you access to ColdpizzaDAO!",
        image: readFileSync("scripts/assets/coldpizzaToken.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();