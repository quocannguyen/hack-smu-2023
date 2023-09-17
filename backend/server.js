const express = require("express");
const bodyParser = require("body-parser");
const { ethers } = require("ethers");
const { InputBox__factory } = require("@cartesi/rollups");
const { JsonRpcProvider } = require("@ethersproject/providers");
const axios = require("axios");

const app = express();
const port = 3000; // Choose an appropriate port

// Standard configuration for local development environment
const DAPP_ADDRESS = "0x70ac08179605AF2D9e75782b8DEcDD3c22aA4D0C";

const INPUTBOX_ADDRESS = "0x59b22D57D4f067708AB0c00552767405926dc768";
const HARDHAT_DEFAULT_MNEMONIC =
  "test test test test test test test test test test test junk";
const HARDHAT_LOCALHOST_RPC_URL = "http://localhost:8545";

// Parse JSON requests
app.use(bodyParser.json());

// Define a route for handling POST requests to "/add_input"
app.post("/add_input", async (req, res) => {
  try {
    const { value, accountIndex } = req.body;

    // Now you should be able to access middleValue and accountIndex
    console.log("middleValue:", value);
    console.log("accountIndex:", accountIndex);

    newValue = JSON.stringify(value);

    // Start a connection
    const provider = new JsonRpcProvider(HARDHAT_LOCALHOST_RPC_URL);
    const signer = ethers.Wallet.fromMnemonic(
      HARDHAT_DEFAULT_MNEMONIC,
      `m/44'/60'/0'/0/${accountIndex}`
    ).connect(provider);

    // Instantiate the InputBox contract
    const inputBox = InputBox__factory.connect(INPUTBOX_ADDRESS, signer);

    // Encode the input
    const inputBytes = ethers.utils.isBytesLike(newValue)
      ? newValue
      : ethers.utils.toUtf8Bytes(value);

    // Send the transaction
    const tx = await inputBox.addInput(DAPP_ADDRESS, inputBytes);
    console.log(`transaction: ${tx.hash}`);

    // For demonstration purposes, we'll send a simple response
    res.status(200).json({ message: "Input added successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Define your GraphQL query
const query = `
  query GetNotices($cursor: String) {
    notices(after: $cursor) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          index
          input {
            index
          }
          payload
        }
      }
    }
  }
`;

// Define a function to make a GraphQL request to the remote server
async function fetchNotices(cursor) {
  try {
    const response = await axios.post("http://localhost:4000/graphql", {
      query,
      variables: { cursor },
    });

    // Extract and return the data from the response
    return response.data.data.notices.edges;
  } catch (error) {
    console.error("Error querying remote server:", error);
    return [];
  }
}

// Define an endpoint to retrieve notices from the remote server
app.get("/notices", async (req, res) => {
  const cursor = req.query.cursor || null;
  const notices = await fetchNotices(cursor);

  // Extract and format echoes from notices
  const echoes = notices.map(({ node }) => {
    const echo = ethers.utils.toUtf8String(node.payload);
    return { echo };
  });

  res.json(echoes);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
