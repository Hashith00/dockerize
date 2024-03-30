# dockerize-node

This npm package helps you dockerize your Node.js applications effortlessly. Dockerizing your Node.js application allows you to package it into a standardized unit for software development, making it easier to deploy and run across different environments.

## Installation

To install this package, simply run the following command:

```bash
npm i dockerize-node
```

## Usage

Once installed, you need to import the dockerize-node to your Node.js application. Here's how you can use it:

```bash
const dockerfile = require("dockerize-node");
```

The you can create you dockefile by giving your port as a argument.

```bash
dockerfile(3000);
```

## Support

If you encounter any issues or have any questions about using this package, feel free to open an issue on GitHub. We'll be happy to assist you!

## Contribution

Contributions are welcome! If you have any ideas for improving this package or encounter any bugs, please submit a pull request on GitHub.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
