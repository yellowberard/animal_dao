import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { Container } from "reactstrap";
import useMetaMask from '../../hooks/useMetaMask';
// import { Web3Modal } from '@web3modal/react'
// import { Web3Button, useAccount } from '@web3modal/react'

// import { WalletContext } from "../../context/WalletContext";
import logoImg from "../../assets/images/1.png";
import { NavLink } from "react-router-dom";

const NAV__LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Donate",
    url: "/market",
  },
  {
    display: "Adopt",
    url: "/adopt",
  },
  {
    display: "Design",
    url: "/create",
  },
  {
    display: "Stray Info",
    url: "/contact",
  },
  {
    display: "Whitepaper",
    url: "",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  // const [wltAddress, changeWltAddress] = useState(null);

  // const { isOpen, open, close } = useConnectModal()
  // const { account } = useAccount()
  // useEffect(() => {
  //   changeWltAddress()
    
  // }, [account]);

  // const [walletConnected, setWalletConnected] = useState(false);

  // const { connectWallet, currentAccount, disconnectWallet } =
  //   React.useContext(WalletContext);

  //   const handleDisconnectWallet = () => {
  //     disconnectWallet();
  //     setWalletConnected(false);
  //   };
  
  //   const handleSubmitWallet = () => {
  //     connectWallet();
  //     console.log(currentAccount);
  //     currentAccount === ""
  //       ? setWalletConnected(false)
  //       : setWalletConnected(true);
  //   };

  const { connect, disconnect, balance, isActive, account } = useMetaMask()

  if (window.ethereum) {
    console.log("WALLET FOUND");
  }
  else{
    alert("install metamask extension!!");
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  const truncate = (input) =>
        input?.length > 30 ? `${input.substring(0, 6)}...` : input;

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className=" d-flex gap-2 align-items-center ">
              <span>
                {/* <i class="ri-fire-fill"></i> */}
                <img src={logoImg} className='logoImg'/>
              </span>
              AnimalCareDAO
            </h2>
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5 ">
            {/* {isActive ? (
              <button className="btn d-flex gap-2 align-items-center" onClick={disconnect}>
                <span>
                  <i class="ri-wallet-line"></i>
                </span>
                <span className='wltCntText'>Disconnect Wallet</span>
              </button>
            ): ( */}
              <button className="btn d-flex gap-2 align-items-center" onClick={connect}>
                <span>
                  <i class="ri-wallet-line"></i>
                </span>
                <span className='wltCntText'>{isActive ? truncate(account) : "Connect Wallet"}</span>
              </button>
            {/* )} */}
            
            {/* <Web3Button /> */}

            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
      {/* <Web3Modal config={config} /> */}
    </header>
  );
};

export default Header;
