import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xccA34F695861CD3758ff2Ec8f287E99BceB5eED6", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Master Ninja Katana",
        description: "This NFT will give you access to MasterDAO!",
        image: readFileSync("scripts/assets/ninja_master_katana.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();