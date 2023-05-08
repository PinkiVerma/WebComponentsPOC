// exporting the navbar template
function navbar() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <style>
        .navigation {
          position: relative;
          display: flex;
          align-items: center;
          height: 50px;
          width: 100%;
          padding: 0.5rem 0rem;
          background-color: #683793;;
          color: black;
          box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
        }
        
        .brand-name {
          text-decoration: none;
          color: black;
          font-size: 1.3rem;
        }
      
        .logo{
          height: 30px;
          width: 120px;
        }
        
        .profile_photo_menu {
          margin-left: auto;
        }
        
        .navigation-menu ul {
          display: flex;
          padding: 0;
        }
        
        .navigation-menu li {
          list-style-type: none;
          margin: 0 1rem;
        }
        
        .navigation-menu li>a {
          text-decoration: none;
          display: block;
          width: 100%;
          color: white;
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,"sans-serif";
        }
        
        .dropdown > a{
          color: white;
          line-height: 50px;
          text-decoration: none;
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,"sans-serif";
        }

        .nav-item{
          display: flex
        }
        
        @media screen and (max-width: 550px) {
        
          .navigation-menu ul {
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            height: calc(100vh - 60px);
            background-color: white;
            border-top: 1px solid black;
            display: none;
          }
        
          .navigation-menu li {
            text-align: center;
            margin: 0;
          }
        
          .navigation-menu li a {
            color: black;
            width: 100%;
            padding: 1.5rem 0;
          }
        
          .navigation-menu li:hover {
            background-color: #eee;
          }
        
          .navigation-menu.expanded ul {
            display: block;
          }
        }
      
        .profile_info {
          padding: 4px 16px 4px 16px;
          display: flex;
          align-items: center;
        }
      
        .profile_info .no_profile_photo {
          width: 40px;
          height: 40px;
        }
        
        .no_profile_photo {
          width: 30px;
          border: 1px solid #1d1e1f;
          height: 30px;
          display: inline-block;
          vertical-align: middle;
          background-color: #fff;
          position: relative;
          border-radius: 50%;
        }
        
        .profile_photo img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          border: 2px solid #fff;
        }
      
        .profile_photo img:hover {
          box-shadow: 0px 0px 6px white;
        }
        
        .round_img.no_profile_photo {
          width: 40px;
          height: 40px;
        }
        
        .profile_info .no_profile_photo_icon {
          width: 18px;
          height: 18px;
          top: 10px;
          left: 10px;
        }
        
        .no_profile_photo_icon {
          /* background: url("./images/ic_user_black.svg"); */
          display: inline-block;
          width: 14px;
          position: absolute;
          top: 7px;
          left: 7px;
          height: 14px;
          background-size: 100%;
          background-repeat: no-repeat;
          vertical-align: middle;
          content: "";
        }
      
        .profile_name_details {
          margin-left: 10px;
          width: max-content;
        }
        
        .profile_name {
          display: block;
          color: #1d1e1f;
        }
        
        .profile_username {
          display: block;
          color: #8c8c8c;
          font-size: 0.8125rem;
          text-transform: uppercase;
        }
        
        
        /* Dropdown Button */
      .dropbtn {
          color: white;
          padding: 16px;
          font-size: 16px;
          border: none;
        }
        
        /* The container <div> - needed to position the dropdown content */
        .dropdown {
          position: relative;
          display: inline-block;
        }
        
        /* Dropdown Content (Hidden by Default) */
        .dropdown-content {
          background-color: #fff;
          border-radius: 3px;
          box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
          display: none;
          font-family: Source Sans Pro,sans-serif!important;
          /* left: 20px; */
          min-width: 200px;
          padding: 5px 0;
          position: absolute;
          text-align: left;
          top: 45px;
          z-index: 1;
          font-size: 14px;
        }
      
        .dropdown_group {
          padding: 10px 0;
          border-bottom: 1px solid #cdcdcd;
        }
      
        .dropdown_group:last-child {
          border-bottom: none;
        }
        
        
        /* Links inside the dropdown */
        .dropdown-content a {
          color: #454647;
          padding: 10px 16px;
          text-decoration: none;
          display: block;
        }
        
      
        /* Change color of dropdown links on hover */
        .dropdown-content a:hover {
          background-color:#e0e0e0;;
          font-weight: 600;
        }
        
        /* Show the dropdown menu on hover */
        .dropdown:hover .dropdown-content {display: block;}

        .navbar-light .navbar-toggler-icon {
          background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E);
      }
      
      .navbar-toggler-icon {
          background: no-repeat 50%;
          background-size: 100% 100%;
          content: "";
          display: inline-block;
          height: 1.5em;
          vertical-align: middle;
          width: 1.5em;
      }
      .navbar_collapser_icon {
          background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00IDdoMjJNNCAxNWgyMk00IDIzaDIyIi8+PC9zdmc+)!important;
          background-repeat: no-repeat;
      }

        @media screen and (min-width: 1200px) {

           #hamburger, #navbarSupportedContent{
            display : none !important
           }
        }

        * {
        --header-navbar-color: #683793;
        --profile-strip-color: #422b57;
      
        --dropdown-color: #2b163f;
      
        --badge-color: #749902;
      }
      
      .fixed-header {
        position: fixed;
        width: 100vw;
        top: 0px;
        z-index: 1000;
      }
      
      @media screen and (max-width: 768px) {
        #action-icon-header {
          width: 100vw;
          margin: 0;
          display: none;
          /* position: relative;
          top: 270px;
          left: unset; */
          text-align: left;
        }
      }
      
      .navbar {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 0px 20px 10px 20px;
      }
      
      .navbar .container,
      .navbar .container-fluid,
      .navbar .container-sm,
      .navbar .container-md,
      .navbar .container-lg,
      .navbar .container-xl {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
      }
      
      .navbar-brand {
        display: inline-block;
        padding-top: 0.3125rem;
        font-size: 1.25rem;
        line-height: inherit;
        white-space: nowrap;
      }
      .navbar-brand:hover,
      .navbar-brand:focus {
        text-decoration: none;
      }
      
      .navbar-nav {
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        background-color: #683793;
      }

      .navbar-nav li{
        display:flex;
        margin-left: 20px;
      }

      .navbar-nav .nav-link {
        padding-right: 0;
        padding-left: 0;
      }
      .navbar-nav .dropdown-menu {
        position: static;
        float: none;
      }
      
      .navbar-text {
        display: inline-block;
        padding-top: 0rem;
        padding-bottom: 0.5rem;
      }
      
      .navbar-collapse {
        flex-basis: 100%;
        flex-grow: 1;
        align-items: center;
      }
      
      .navbar-toggler {
        padding: 0.25rem 0.75rem;
        font-size: 1.25rem;
        line-height: 1;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: 0.25rem;
      }
      .navbar-toggler:hover,
      .navbar-toggler:focus {
        text-decoration: none;
      }
      
      @media (max-width: 575.98px) {
        .navbar-expand-sm > .container,
        .navbar-expand-sm > .container-fluid,
        .navbar-expand-sm > .container-sm,
        .navbar-expand-sm > .container-md,
        .navbar-expand-sm > .container-lg,
        .navbar-expand-sm > .container-xl {
          padding-right: 0;
          padding-left: 0;
        }
      }
      
      @media (min-width: 576px) {
        .navbar-expand-sm {
          flex-flow: row nowrap;
          justify-content: flex-start;
        }
        .navbar-expand-sm .navbar-nav {
          flex-direction: row;
        }
        .navbar-expand-sm .navbar-nav .dropdown-menu {
          position: absolute;
        }
        .navbar-expand-sm .navbar-nav .nav-link {
          padding-right: 0.5rem;
          padding-left: 0.5rem;
        }
        .navbar-expand-sm > .container,
        .navbar-expand-sm > .container-fluid,
        .navbar-expand-sm > .container-sm,
        .navbar-expand-sm > .container-md,
        .navbar-expand-sm > .container-lg,
        .navbar-expand-sm > .container-xl {
          flex-wrap: nowrap;
        }
        .navbar-expand-sm .navbar-collapse {
          display: flex !important;
          flex-basis: auto;
        }
        .navbar-expand-sm .navbar-toggler {
          display: none;
        }
      }
      
      @media (max-width: 767.98px) {
        .navbar-expand-md > .container,
        .navbar-expand-md > .container-fluid,
        .navbar-expand-md > .container-sm,
        .navbar-expand-md > .container-md,
        .navbar-expand-md > .container-lg,
        .navbar-expand-md > .container-xl {
          padding-right: 0;
          padding-left: 0;
        }
      }
      
      @media (min-width: 768px) {
        .navbar-expand-md {
          flex-flow: row nowrap;
          justify-content: flex-start;
        }
        .navbar-expand-md .navbar-nav {
          flex-direction: row;
        }
        .navbar-expand-md .navbar-nav .dropdown-menu {
          position: absolute;
        }
        .navbar-expand-md .navbar-nav .nav-link {
          padding-right: 0.5rem;
          padding-left: 0.5rem;
        }
        .navbar-expand-md > .container,
        .navbar-expand-md > .container-fluid,
        .navbar-expand-md > .container-sm,
        .navbar-expand-md > .container-md,
        .navbar-expand-md > .container-lg,
        .navbar-expand-md > .container-xl {
          flex-wrap: nowrap;
        }
        .navbar-expand-md .navbar-collapse {
          display: flex !important;
          flex-basis: auto;
        }
        .navbar-expand-md .navbar-toggler {
          display: none;
        }
      }
      
      @media (max-width: 991.98px) {
        .navbar-expand-lg > .container,
        .navbar-expand-lg > .container-fluid,
        .navbar-expand-lg > .container-sm,
        .navbar-expand-lg > .container-md,
        .navbar-expand-lg > .container-lg,
        .navbar-expand-lg > .container-xl {
          padding-right: 0;
          padding-left: 0;
        }
      }
      
      @media (min-width: 992px) {
        .navbar-expand-lg {
          flex-flow: row nowrap;
          justify-content: flex-start;
        }
        .navbar-expand-lg .navbar-nav {
          flex-direction: row;
        }
        .navbar-expand-lg .navbar-nav .dropdown-menu {
          position: absolute;
        }
        .navbar-expand-lg .navbar-nav .nav-link {
          padding-right: 0.5rem;
          padding-left: 0.5rem;
        }
        .navbar-expand-lg > .container,
        .navbar-expand-lg > .container-fluid,
        .navbar-expand-lg > .container-sm,
        .navbar-expand-lg > .container-md,
        .navbar-expand-lg > .container-lg,
        .navbar-expand-lg > .container-xl {
          flex-wrap: nowrap;
        }
        .navbar-expand-lg .navbar-collapse {
          display: flex !important;
          flex-basis: auto;
        }
        .navbar-expand-lg .navbar-toggler {
          display: none;
        }
      }
      
      @media (max-width: 1199.98px) {
        .navbar-expand-xl > .container,
        .navbar-expand-xl > .container-fluid,
        .navbar-expand-xl > .container-sm,
        .navbar-expand-xl > .container-md,
        .navbar-expand-xl > .container-lg,
        .navbar-expand-xl > .container-xl {
          padding-right: 0;
          padding-left: 0;
        }
      }
      
      @media (min-width: 1200px) {
        .navbar-expand-xl {
          flex-flow: row nowrap;
          justify-content: flex-start;
        }
        .navbar-expand-xl .navbar-nav {
          flex-direction: row;
        }
        .navbar-expand-xl .navbar-nav .dropdown-menu {
          position: absolute;
        }
        .navbar-expand-xl .navbar-nav .nav-link {
          padding-right: 0.5rem;
          padding-left: 0.5rem;
        }
        .navbar-expand-xl > .container,
        .navbar-expand-xl > .container-fluid,
        .navbar-expand-xl > .container-sm,
        .navbar-expand-xl > .container-md,
        .navbar-expand-xl > .container-lg,
        .navbar-expand-xl > .container-xl {
          flex-wrap: nowrap;
        }
        .navbar-expand-xl .navbar-collapse {
          display: flex !important;
          flex-basis: auto;
        }
        .navbar-expand-xl .navbar-toggler {
          display: none;
        }
      }
      
      .navbar-expand {
        flex-flow: row nowrap;
        justify-content: flex-start;
      }
      .navbar-expand > .container,
      .navbar-expand > .container-fluid,
      .navbar-expand > .container-sm,
      .navbar-expand > .container-md,
      .navbar-expand > .container-lg,
      .navbar-expand > .container-xl {
        padding-right: 0;
        padding-left: 0;
      }
      .navbar-expand .navbar-nav {
        flex-direction: row;
      }
      .navbar-expand .navbar-nav .dropdown-menu {
        position: absolute;
      }
      .navbar-expand .navbar-nav .nav-link {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
      }
      .navbar-expand > .container,
      .navbar-expand > .container-fluid,
      .navbar-expand > .container-sm,
      .navbar-expand > .container-md,
      .navbar-expand > .container-lg,
      .navbar-expand > .container-xl {
        flex-wrap: nowrap;
      }
      .navbar-expand .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
      }
      .navbar-expand .navbar-toggler {
        display: none;
      }
      
      .navbar-light .navbar-brand {
        color: rgba(0, 0, 0, 0.9);
      }
      .navbar-light .navbar-brand:hover,
      .navbar-light .navbar-brand:focus {
        color: rgba(0, 0, 0, 0.9);
      }
      
      .navbar-light .navbar-nav .nav-link {
        color: rgba(0, 0, 0, 0.5);
      }
      .navbar-light .navbar-nav .nav-link:hover,
      .navbar-light .navbar-nav .nav-link:focus {
        color: rgba(0, 0, 0, 0.7);
      }
      .navbar-light .navbar-nav .nav-link.disabled {
        color: rgba(0, 0, 0, 0.3);
      }
      
      .navbar-light .navbar-nav .show > .nav-link,
      .navbar-light .navbar-nav .active > .nav-link,
      .navbar-light .navbar-nav .nav-link.show,
      .navbar-light .navbar-nav .nav-link.active {
        color: rgba(0, 0, 0, 0.9);
      }
      
      .navbar-light .navbar-toggler {
        color: rgba(0, 0, 0, 0.5);
        border-color: rgba(0, 0, 0, 0.1);
      }
      
      .navbar-light .navbar-text {
        color: rgba(0, 0, 0, 0.5);
      }
      .navbar-light .navbar-text a {
        color: rgba(0, 0, 0, 0.9);
      }
      .navbar-light .navbar-text a:hover,
      .navbar-light .navbar-text a:focus {
        color: rgba(0, 0, 0, 0.9);
      }
      
      .navbar-dark .navbar-brand {
        color: #fff;
      }
      .navbar-dark .navbar-brand:hover,
      .navbar-dark .navbar-brand:focus {
        color: #fff;
      }
      
      .navbar-dark .navbar-nav .nav-link {
        color: rgba(255, 255, 255, 0.5);
      }
      .navbar-dark .navbar-nav .nav-link:hover,
      .navbar-dark .navbar-nav .nav-link:focus {
        color: rgba(255, 255, 255, 0.75);
      }
      .navbar-dark .navbar-nav .nav-link.disabled {
        color: rgba(255, 255, 255, 0.25);
      }
      
      .navbar-dark .navbar-nav .show > .nav-link,
      .navbar-dark .navbar-nav .active > .nav-link,
      .navbar-dark .navbar-nav .nav-link.show,
      .navbar-dark .navbar-nav .nav-link.active {
        color: #fff;
      }
      
      .navbar-dark .navbar-toggler {
        color: rgba(255, 255, 255, 0.5);
        border-color: rgba(255, 255, 255, 0.1);
      }
      
      .navbar-dark .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
      }
      
      .navbar-dark .navbar-text {
        color: rgba(255, 255, 255, 0.5);
      }
      .navbar-dark .navbar-text a {
        color: #fff;
      }
      .navbar-dark .navbar-text a:hover,
      .navbar-dark .navbar-text a:focus {
        color: #fff;
      }
      
      .logo {
        width: 120px;
        height: 30px;
      }
      
      .selected_item {
        display: inline-table;
        border: 1px solid #e2f0ff;
        margin: 10px 10px 0 0;
        border-collapse: separate;
        -webkit-border-radius: 40px;
        -moz-border-radius: 40px;
        border-radius: 40px;
        background-color: #e2f0ff;
        padding: 2px 5px 2px 10px;
      }
      
      .extra-icons {
        display: flex;
        padding-top: 10px;
      }
      
      .profile-nav {
        padding-left: 30px !important;
      }
      
      .marked_item {
        display: inline-table;
        border: transparent;
        margin: 10px 10px 0 0;
        border-collapse: separate;
        -webkit-border-radius: 40px;
        -moz-border-radius: 40px;
        border-radius: 40px;
        background-color: #e1f2db;
        padding: 2px 5px 2px 10px;
      }
      .mjp-plus {
        display: inline-block;
        margin-left: 13px;
        padding: 4px;
        cursor: pointer;
      }
      .ignored_item {
        display: inline-table;
        border: transparent;
        margin: 10px 10px 0 0;
        padding-top: 5px;
        border-collapse: separate;
        -webkit-border-radius: 40px;
        -moz-border-radius: 40px;
        border-radius: 40px;
        background-color: #efefef;
        padding: 2px 5px 2px 10px;
      }
      
      .mjp-star-empty {
        display: inline-block;
        padding: 4px;
        cursor: pointer;
      }
      
      .mjp-star {
        display: inline-block;
        padding: 4px;
        cursor: pointer;
      }
      
      .mjp-cancel-circled-1 {
        display: inline-block;
        margin-top: 3px;
        margin-left: 13px;
        padding: 3px;
        cursor: pointer;
      }
      
      .selected_item_text {
        padding: 3px;
        text-overflow: ellipsis;
        max-width: 250px;
        white-space: nowrap;
        overflow: hidden;
      }
      .navbar {
        /* background-color: #1d1e1f; */
        background-color: var(--header-navbar-color);
        position: fixed;
        height: 50px;
        padding: 10px 15px;
        flex-wrap: inherit;
      }
      
      .navbar_brand {
        padding: 0;
        margin: 0;
        font-size: larger;
        margin-left: 5px;
      }
      
      .new_notification_icon {
        background: url("./images/ic_new_notification_available.svg");
        display: inline-block;
        width: 28px;
        height: 28px;
        background-size: 90%;
        background-repeat: no-repeat;
        vertical-align: middle;
        content: "";
      }
      
      .navbar_toggler {
        padding: 0;
        margin-left: 23px;
      }
      
      .nav_link {
        color: #fff !important;
      }
      
      .nav_link:focus {
        outline: none;
        background-color: transparent;
      }

      /* iPads (portrait and landscape) ----------- */
      @media screen and (max-width: 1200px) {
        .dropdown_content {
          top: 0px;
          position: relative;
        }

        .navigation-menu {
          display: none ;
       }

       #hamburger{
        display : flex
       }

       
      #navbarSupportedContent{
        background-color: #683793;
        display:none
      }

      .nav_bar_collapse {
        position: absolute;
        top: 50px;
        z-index: 0;
        left: 0;
        background-color: rgb(29, 30, 31);
        width: 100%;
        padding: 0 0 20px 4px;
      }
      
      }
      
      @media only screen and (min-device-width: 1024px) and (max-device-width: 1200px) {
        .dropdown {
          padding-right: 50px !important;
        }
        #action-icon-header {
          transform: translateX(-50%);
        }
      
        .navbar-brand.navbar_brand {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      
      @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
        .nav_bar_collapse {
          position: absolute;
          top: 50px;
          left: 0;
          background-color: rgb(29, 30, 31);
          width: 100%;
          padding: 0 0 20px 4px;
        }
      
        .dropdown {
          padding-right: 15px !important;
        }

        .navbar-nav {
          display: flex;
          flex-direction: column;
          list-style: none;
          margin-bottom: 0;
          padding-left: 0;
          
      }
      
        .navbar_nav .dropdown:hover .dropdown_content {
          display: inline-block;
          right: unset;
        }
      
        #navbarDropdown {
          transform: translateX(-50%);
        }
      
        .navbar-brand.navbar_brand {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      
      /* Desktops and laptops ----------- */
      @media only screen and (min-width: 1024px) {
        .navbar {
          padding: 10px 20px 10px 20px;
        }
      
        .navbar_brand {
          margin-right: 70px;
        }
      }
      
      .nav_item:focus {
        background-color: transparent;
      }
      
      .navbar_nav .nav_item {
        padding: 0 20px;
      }
      
      .nav_item {
        display: block !important;
        position: relative !important;
        cursor: pointer;
        color: #fff !important;
        box-sizing: content-box !important;
      }
      
      .navbar_nav .nav_item {
        line-height: 50px;
      }
      
      .dropdown_content {
        font-family: "Source Sans Pro", sans-serif !important;
        display: none;
        position: absolute;
        left: 20px;
        padding: 5px 0;
        border-radius: 3px;
        top: 47px;
        min-width: 200px;
        background-color: white;
        text-align: left;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        z-index: 1;
      }
      
      .dropdown-right{
        right: 10px;
      }
    
      .dropdown_content.extra-drop-icons {
        right: 10px;
        left: unset;
      }
      
      .dropdown:hover .dropdown_content {
        display: block;
      }
      
      .dropdown {
        position: relative;
      }
      
      .dropdown_content a:not(.notme) {
        padding: 8px 16px;
        display: block;
      }
      
      .dropdown_content a:hover {
        background-color: #efefef;
        /* font-family: "SourceSansPro-SemiBold"; */
        font-weight: 600;
      }
      
      .dropdown_content a:hover .dropdown_item {
        letter-spacing: 0;
      }
      
      .dropdown .dropdown_content a:first-child {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
      }
      
      .dropdown .dropdown_content a:last-child {
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
      }
      
      .dropdown_item {
        padding-left: 0;
        position: relative;
        color: #454647;
        white-space: nowrap;
        letter-spacing: 0.235px;
      }
      
      .user {
        width: 50px;
        height: 50px;
        background: #fff;
        border: 1px #eee solid;
        overflow: hidden;
        cursor: pointer;
        border-radius: 50%;
        float: left;
      }
      
      .userlogout {
        line-height: 23px;
        cursor: pointer;
        background: #000;
        color: #fff;
        border: 1px #4d4d4d solid;
        text-align: center;
      }
      
      .mb_65 {
        margin-bottom: 65px !important;
      }
      
      .dropdown_User {
        margin-top: 50px;
      }
      
      a {
        text-decoration: none !important;
      }
      
      .no_notification {
        padding: 15px 20px;
        display: flex;
        align-items: center;
      }
      
      .no_notification_monster_logo {
        background: url("./images/ic_no_notification_monster.svg");
        display: inline-block;
        background-size: 100%;
        background-repeat: no-repeat;
        vertical-align: middle;
        content: "";
        width: 50px;
        height: 30px;
        margin-right: 10px;
      }
      
      .no_notification_text {
        color: #8c8c8c;
        font-weight: 600;
        font-size: 0.8125rem;
        text-transform: uppercase;
      }
      
      .profile_nav .dropdown_content {
        min-width: 250px;
      }
      
      .profile_nav .dropdown_content .dropdown_group {
        max-height: 260px;
        overflow: auto;
      }
      
      .notification_nav .nav_item {
        height: 50px;
        display: flex !important;
        align-items: center;
      }
      
      .profile_nav .nav_item {
        height: 50px;
        display: flex !important;
        align-items: center;
      }
      
      .dropdown_group {
        padding: 10px 0;
        border-bottom: 1px solid #cdcdcd;
      }
      
      .dropdown_content .dropdown_group:last-child {
        padding-bottom: 0;
      }
      
      .dropdown_group:last-child {
        border-bottom: none;
      }
      
      .logout {
        color: #ff5257 !important;
      }
      
      /* Profile Strip */
      
      strong {
        font-weight: bolder;
      }
      
      .profile-strip-heading a {
        color: white;
      }
      .profile-strip-heading {
        padding-left: 180px;
      }
      
      .profile-strip-heading h1 {
        text-transform: uppercase;
        line-height: 0px;
        font-size: 30px;
      }
      
      .profile-strip-heading p {
        font-size: 14px;
      }
      .profile-strip-actions {
        justify-self: right;
        padding-top: 10px;
      }
      
      .action-bar {
        display: flex;
      }
      
      .action-bar .icon-wrapper:hover {
        background-color: #2b163f;
        cursor: pointer;
      }
      
      .action-bar .icon-wrapper.active {
        background-color: #2b163f;
      }
      
      .action-bar .icon-wrapper {
        width: 20px;
        padding: 4px 9px;
        margin-right: 10px;
      }
      
      .action-bar .icon {
        width: 20px;
        height: 20px;
        position: relative;
      }
      
      .action-bar .icon label {
        background-color: var(--badge-color);
        width: 8px;
        height: 8px;
        font-size: 10px;
        border-radius: 100%;
        padding: 5px 10px;
        position: relative;
        bottom: 12px;
        left: 13px;
      }
      
      .profile-strip-help {
        text-align: center;
        margin-top: 5px;
        margin-left: -8px;
      }
      
      .profile-strip-help a,
      .profile-strip-help span {
        color: white;
        font-size: 14px;
        font-weight: 500;
        position: relative;
        margin-right: 12px;
      }
      
      .profile-strip-help a:nth-child(1):hover {
        background-color: white;
        color: black;
      }
      .profile-strip-help a:nth-child(1) div {
        position: absolute;
        width: 500px;
        text-align: left;
        background-color: white;
        padding: 10px;
        font-weight: 500;
        right: 0;
        z-index: 400;
        border: 1px solid lightgray;
        color: #000;
      }
      .profile-strip-help a:nth-child(1) div a {
        color: blue;
      }
      
      @media screen and (max-width: 768px) {
        .profile-strip {
          display: block;
          height: 300px;
          text-align: center;
          margin-top: 50px;
          margin-bottom: 30px;
        }
        .profile-strip .round_img {
          border-radius: 100%;
          top: 0;
          left: 0;
          position: relative;
          border: 0px solid var(--profile-strip-color);
        }
      
        .profile-strip-heading a {
          color: white;
        }
        .profile-strip-heading {
          padding-left: 0px;
        }
      
        .profile-strip-heading h1 {
          text-transform: uppercase;
          line-height: 0px;
          font-size: 30px;
        }
      
        .profile-strip-heading p {
          font-size: 14px;
          padding: 0 10px;
        }
        .profile-strip-actions {
          justify-self: right;
          padding-top: 10px;
        }
      
        .action-bar {
          display: flex;
          justify-content: center !important;
          align-items: center;
        }
      
        .action-bar .icon-wrapper:hover {
          background-color: #2b163f;
          cursor: pointer;
        }
      
        .action-bar .icon-wrapper.active {
          background-color: #2b163f;
        }
      
        .action-bar .icon-wrapper {
          width: 20px;
          padding: 4px;
          margin-right: 20px;
        }
      
        .action-bar .icon {
          width: 20px;
          height: 20px;
          position: relative;
        }
      
        .action-bar .icon label {
          background-color: var(--badge-color);
          width: 8px;
          height: 8px;
          font-size: 10px;
          border-radius: 100%;
          padding: 5px 10px;
          position: relative;
          bottom: 12px;
          left: 13px;
        }
      
        .profile-strip-help {
          text-align: center;
          margin-top: 5px;
          margin-left: -8px;
        }
      
        .profile-strip-help a,
        .profile-strip-help span {
          color: white;
          font-size: 14px;
          font-weight: 500;
          position: relative;
          margin-right: 12px;
        }
      
        .profile-strip-help a:nth-child(1):hover {
          background-color: white;
          color: black;
        }
        .profile-strip-help a:nth-child(1) div {
          position: absolute;
          width: 500px;
          text-align: left;
          background-color: white;
          padding: 10px;
          font-weight: 500;
          right: 0;
          z-index: 400;
          border: 1px solid lightgray;
          color: #000;
        }
        .profile-strip-help a:nth-child(1) div a {
          color: blue;
        }
      }
      
      @media screen and (min-width: 400px) and (max-width: 768px) {
        #navbarDropdown {
          /* padding-left: 15px; */
          transform: translateX(-50%);
        }
        .dropdown {
          padding-right: 20px !important;
        }
      }
      
      @media screen and (max-width: 400px) {
        #navbarDropdown {
          transform: translateX(calc(-50% + 20px));
        }
      }
      
      @media screen and (max-width: 768px) {
        .profile-strip .round_img {
          margin: 0 auto;
        }
      
        .navbar-brand.navbar_brand {
          position: absolute;
          left: calc(50% - 60px);
        }
      
        .profile-strip-help a:nth-child(1) div {
          position: absolute;
          width: 300px;
          padding: 10px;
          font-size: 80%;
          left: calc(50% - 150px);
          z-index: 400;
        }
      }
      
      @media screen and (max-width: 1200px) {
        navbar > div:nth-child(1) {
          z-index: 2;
        }
      
        #action-icon-header {
          width: 30px !important;
          margin: 0;
          display: none;
          position: relative !important;
          top: -20px !important;
          z-index: 3;
          /*top: -55px;
          left: 20px; */
        }
      
        .dropdown_content.extra-drop-icons {
          position: absolute !important;
          top: 47px !important;
          right: 30px !important;
        }
      }
      
      @media only screen and (min-device-width: 1000px) and (max-device-width: 1200px) {
        .navbar {
          padding: 0 !important;
        }
        #action-icon-header {
          position: fixed !important;
          top: -40px !important;
        }
      }   
      
      /* Smartphones (portrait and landscape) ----------- */
      @media only screen and (min-device-width: 320px) and (max-device-width: 1200px) {
        .nav_bar_collapse {
          position: absolute;
          top: 50px;
          z-index: 0;
          left: 0;
          background-color: rgb(29, 30, 31);
          width: 100%;
          padding: 0 0 20px 4px;
        }
      
        nav > div:nth-child(1) {
          z-index: 1000;
        }
      
        .dropdown_content {
          top: 0px !important;
          position: relative !important;
          width: 100%;
        }
      }
      
      
      #hamburger{
        cursor:pointer
      }
        </style>
        
    </head>
    <body>
  <nav class="navigation">
    <button
    class="navbar-toggler navbar_toggler"
    type="button"
  >
    <span id="hamburger" class="navbar-toggler-icon navbar_collapser_icon"></span>
    </button>

    <div class="collapse navbar-collapse nav_bar_collapse" id="navbarSupportedContent">
    <ul class="navbar-nav navbar_nav">
    ${this.getDashboard()}
    ${this.getJobPost()}
    ${this.getSearch()}
    ${this.getFolders()}
    ${this.getReports()}
    </ul>
    </div>

    <a
    class="brand-name"
    href="https://recruiter.foundit.in/v4/dashboard/ui"
    >
    <img
      src="https://media.foundit.in/recruiter_2015/india/images/logo_n.png"
      class="logo"
      alt=""
    />
    </a>
   
    <div class="navigation-menu">
    <ul>
      ${this.getDashboard()}
      ${this.getJobPost()}
      ${this.getSearch()}
      ${this.getFolders()}
      ${this.getReports()}
      </ul> 
    </div>
    ${this.getUserProfile()}
  </nav>
    
    </body>
    </html>
`;
}

export default navbar;
