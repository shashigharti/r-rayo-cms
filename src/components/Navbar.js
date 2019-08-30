import styled from "styled-components";

export const Navbar = styled.div`
  /*----------------------------------------
   Navbar
------------------------------------------*/
  .header-search-wrapper {
    position: relative;

    display: inline-block;

    width: -webkit-calc(100% - 600px);
    width: -moz-calc(100% - 600px);
    width: calc(100% - 600px);
    height: 40px;
    margin: 10px auto 0 275px;

    -webkit-transition: 0.3s ease all;
    -moz-transition: 0.3s ease all;
    -o-transition: 0.3s ease all;
    transition: 0.3s ease all;

    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .header-search-wrapper i {
    font-size: 24px;
    line-height: 32px !important;

    position: absolute;
    top: 6px;
    left: 24px;

    -webkit-transition: color 200ms ease;
    -moz-transition: color 200ms ease;
    -o-transition: color 200ms ease;
    transition: color 200ms ease;
  }

  .nav-collapsed .header-search-wrapper {
    margin: 10px auto 0 100px;
  }

  input.header-search-input {
    font-size: 16px !important;
    font-weight: 400;

    display: block;

    width: 87% !important;
    height: 24px !important;
    padding: 8px 8px 8px 72px !important;

    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;

    border: none;
    border-radius: 3px;
    outline: none;
    background: rgba(255, 255, 255, 0.3) !important;

    -webkit-appearance: textfield;
    -moz-appearance: textfield;
  }
  input.header-search-input:hover {
    background: rgba(255, 255, 255, 0.5) !important;
  }
  input.header-search-input:focus {
    color: #333 !important;
    border-bottom: none !important;
    background: #fff !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }

  .header-search-wrapper-focus i {
    color: #444;
  }

  .header-search-input::-webkit-input-placeholder {
    font-size: 16px;
    font-weight: 400;

    color: #fff;
  }

  .header-search-input::-moz-placeholder {
    font-size: 16px;
    font-weight: 400;

    color: #fff;
  }

  .header-search-input:-ms-input-placeholder {
    font-size: 16px;
    font-weight: 400;

    color: #fff;
  }

  .header-search-input:focus::-webkit-input-placeholder {
    font-size: 16px;
    font-weight: 400;

    color: #333;
  }

  .header-search-input:focus::-moz-placeholder {
    font-size: 16px;
    font-weight: 400;

    color: #333;
  }

  .header-search-input:focus::placeholder {
    font-size: 16px;
    font-weight: 400;

    color: #333;
  }

  .header-search-input:focus:-ms-input-placeholder {
    font-size: 16px;
    font-weight: 400;

    color: #333;
  }

  .header-search-input::-webkit-input-placeholder {
    font-size: 16px;
    font-weight: 400;

    color: #fff;
  }

  .header-search-input::-moz-placeholder {
    font-size: 16px;
    font-weight: 400;

    color: #fff;
  }

  .header-search-input::placeholder {
    font-size: 16px;
    font-weight: 400;

    color: #fff;
  }

  nav.display-none.search-sm .nav-wrapper form .input-field input.search-box-sm:not(:focus) {
    color: #fff;
  }
  .navbar--theme {
    background: #6b4994;
  }
  @media only screen and (max-width: 600px) {
    .nav-wrapper .dropdown-content {
      left: 0 !important;

      width: 100% !important;
    }
    .notification-button i {
      font-size: 29px;

      position: relative;
      top: 12px;
    }
    .search-button i {
      position: relative;
      top: 6px;

      height: 0;
    }
    .search-sm-close {
      position: absolute !important;
      top: 12px !important;
    }
    .search-sm-icon {
      position: absolute !important;
      top: 14px !important;
    }
  }

  // Notification
  .navbar .toggle-fullscreen,
  .navbar .notification-button {
    line-height: 1;
  }

  .notification-badge {
    font-family: 'Muli', sans-serif;
    position: relative;
    top: -20px;
    right: 5px;
    margin: 0 -0.8em;
    padding: 2px 5px;
    color: #fff;
    border-radius: 50%;
    background-color: #e53e9b;
    -webkit-box-shadow: 0 0 10px 0 #e53e9b;
    box-shadow: 0 0 10px 0 #e53e9b;
  }
  #notifications-dropdown h5 {
    font-size: 1rem;
    font-weight: 500;

    text-transform: capitalize;
  }

  #notifications-dropdown li {
    font-size: 1rem;

    padding: 8px 16px;
  }
  #notifications-dropdown li > a {
    font-size: 1.1rem;
    font-weight: 300;

    padding: 0;
  }
  #notifications-dropdown li > a > span {
    font-size: 1.2rem;

    position: relative;
    top: 4px;

    display: inline-block;

    margin-right: 5px;
  }
  #notifications-dropdown li > time {
    font-size: 0.8rem;
    font-weight: 400;

    margin-left: 38px;
  }
  #notifications-dropdown li.divider {
    padding: 0;
  }
`;
