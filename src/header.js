// header project web-component
import navbar from "./template/navbar";
import { DEFAULT_IMG, TAG_NAME } from "./constants";

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    this.headerJson = JSON.parse(this.getAttribute("response"));
    this.cdn = this.getAttribute("cdn");
    shadow.innerHTML = navbar.call(this);

    // register all the events
    // events.openHamMenu.call(shadow);
    // events.toggleDropdown.call(shadow);

    this.attachedListener(this.shadowRoot);
  }

  attachedListener(root) {
    console.log( root.querySelector("#hamburger"))
    console.log(root.querySelector("#navbarSupportedContent"))
   
    root.querySelector("#hamburger").addEventListener("click", () => {
      this._showMenu = !this._showMenu
      if(this._showMenu){
        root.querySelector("#navbarSupportedContent").style.display = "flex";
      }
      else{
        root.querySelector("#navbarSupportedContent").style.display = "none";
      }
    })
  }

  getDashboard() {
    return this.headerJson["DASHBOARD"]
      ? `
          <li key="dashboard"><a href='${this.headerJson["DASHBOARD"].Dashboard}' style="line-height: 50px; color: white">Dashboard</a></li>
        `
      : ``;
  }

  getJobPost() {
    var jPString = "";
    Object.keys(this.headerJson["JOBPOSTING"] || {}).map((val) => {
      jPString += `<a href='${this.headerJson["JOBPOSTING"][val]}'>
      ${val === "Screening" ? "Manage Screening " : val} </a>`;
    });

    return jPString
      ? `<li >
          <div class="dropdown">
            <a href='#'>Post Job</a>
            <div class="dropdown-content"  >
                ${jPString}
            </div>
          </diV>
           </li>`
      : "";
  }

  getSearch() {
    var searchString = "";
    Object.keys(this.headerJson["SEARCH"] || {}).map((val) => {
      searchString += `<a href='${this.headerJson["SEARCH"][val]}'>${val}</a>`;
    });

    return searchString
      ? `<li >
            <div class="dropdown">
             <a href='#'>Search</a>
             <div class="dropdown-content">
                 ${searchString}
             </div>
             </div>
            </li>`
      : "";
  }

  getFolders() {
    var folderString = "";
    Object.keys(this.headerJson["FOLDER"] || {}).map((val) => {
      folderString += `<a href='${this.headerJson["FOLDER"][val]}'>${val}</a>`;
    });

    return folderString
      ? `<li >
            <div class="dropdown">
             <a href='#'>Folders</a>
             <div class="dropdown-content">
                 ${folderString}
             </div>
             </div>
            </li>`
      : "";
  }

  getReports() {
    var reportString = "";
    Object.keys(this.headerJson["REPORTS"] || {}).map((val) => {
      reportString += `<a href='${this.headerJson["REPORTS"][val]}'>${val}</a>`;
    });

    return reportString
      ? `<li >
            <div class="dropdown">
             <a href='#'>Reports</a>
             <div class="dropdown-content"  >
                 ${reportString}
             </div>
             </div>
            </li>`
      : "";
  }

  getCss() {
    var cssString = "";
    Object.keys(this.headerJson["CSS"] || {}).map((val) => {
      cssString += `<li><a href='${this.headerJson["CSS"][val]}'>${val}</a></li>`;
    });

    return cssString
      ? `<li >
             <a href='#'>CSS</a>
             <ul class="dropdown"  >
                 ${cssString}
             </ul>
            </li>`
      : "";
  }

  getUserManagement() {
    var umString = "";
    Object.keys(this.headerJson["USERMANAGEMENT"] || {}).map((val) => {
      umString += `
      <a href='${this.headerJson["USERMANAGEMENT"][val]}'>${val}</a>
      `;
    });

    return umString ? umString : "";
  }

  getExtraUrls() {
    var urlString = "";
    Object.keys(this.headerJson["EXTRA"] || {}).map((val, index) => {
      if (
        val !== "IMAGE" &&
        val !== "LOGIN" &&
        val !== "LAST_LOGIN" &&
        val !== "NAME" &&
        val !== "LOGO_NONTRANS" &&
        val !== "REC_PROFILE" &&
        val !== "LOGO_TRANS" &&
        val !== "Get resume database access" &&
        val !== "Buy more job posting credits" &&
        val !== "May i help you"
      )
        urlString += `
        <a target="_blank" href='${this.headerJson["EXTRA"][val]}'>${val}</a>
        `;
    });

    return urlString ? urlString : "";
  }

  getLogout() {
   return `
    <a class="logout_url" href=" ${
      (this.headerJson["LOGOUT"] &&
        this.headerJson["LOGOUT"]["Logout"]) ||
      ""
    }">Logout</a>                
`
  }

  getImage() {
    return this.headerJson["EXTRA"] && this.headerJson["EXTRA"]["IMAGE"]
      ? this.headerJson["EXTRA"]["IMAGE"]
      : this.cdn + DEFAULT_IMG;
  }

  getUserExtraData() {
    return `
    <div class="profile_info">
    <div class="profile_photo">
      <img src="${this.getImage()}" />
    </div>
    <div class="profile_name_details">
      <span class="profile_name">${this.headerJson["EXTRA"]["NAME"]}</span>
      <span class="profile_username">${this.headerJson["EXTRA"]["LOGIN"]}</span>
    </div>
  </div>
        `;
  }

  getUserProfile() {
    return `
    <div class="profile_photo_menu">
      <div class="dropdown">
        <div class="profile_info">
          <div class="profile_photo">
            <img src="${this.getImage()}" />
          </div>
        </div>
        <div class="dropdown-content dropdown-right">
          <div class="dropdown_group">
            ${this.getUserExtraData()}
          </div>
          <div class="dropdown_group">
          ${this.getUserManagement()}
          </div>
          <div class="dropdown_group">
          ${this.getExtraUrls()}
          </div>
          <div class="dropdown_group">
          ${this.getLogout()}
          </div>
        </div>
        </div>
        </div>`
  }
}

customElements.define(TAG_NAME, Header);
