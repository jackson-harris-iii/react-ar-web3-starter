# React AR Web3 Starter

## Getting started

To make it easy for you to get started with [8thWall](https://www.8thwall.com/) AR for web and Web3 here's a repo to get you up and running with a [self-hosted](https://www.8thwall.com/docs/web/#self-hosted-domains) version of 8thWall. It includes some pre-configured web3 libraries and it is built using [Next.js](https://nextjs.org/) so you can deploy easily to [Vercel](https://vercel.com/)!

This example assumes you have access to an 8thWall workspace through the[Lightship VPS World Tour](https://lightship.dev/blog/announcing-lightship-vps-world-tour/), an [8thWall free trial](https://www.8thwall.com/start-your-free-trial), or paid account. You will also need a github account which will make deploying to vercel easy and most likely free.

## Installation

- [ ] Clone this repository

  ```
  git clone --- INSERT PUBLIC REPO URL HERE ---
  cd react-ar-web3-starter
  yarn
  ```

- [ ] Install [mkcert](https://github.com/FiloSottile/mkcert) globally

  On macOS, use [Homebrew](https://brew.sh/)

  ```
  brew install mkcert
  brew install nss # if you use Firefox
  ```

  or [MacPorts](https://www.macports.org/).

  ```
  sudo port selfupdate
  sudo port install mkcert
  sudo port install nss # if you use Firefox
  ```

- [ ] Generate a certificate with key by running the following command in the src directory of this repo.

  ```
  mkcert localhost
  ```

- [ ] Start server
  ```
  node server.js
  ```
