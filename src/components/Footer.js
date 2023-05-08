class FooterElm extends HTMLElement {
    constructor() {
      super();
  
      this._email = "";
      this._generalFeedback = "";
      this._comments = "";
      this._emailValidationError = "";
  
      const shadow = this.attachShadow({ mode: "open" });
      shadow.innerHTML = `
        <style>
        .footer {
          position: fixed;
          width: 100%;
          bottom: 0;
          background-color: #e0e0e0;
          /* remove when bgcolor added for body */
          overflow-x: hidden;
          left: 0;
        }
    
        .footer-text,
        .footer-text a {
          color: #333;
          text-align: center;
          font-family: Poppins, sans-serif;
        }
    
        .footer-text {
          background-color: #f1f1f1;
          font-size: 15px;
          margin-bottom: 0;
          padding-bottom: 10px;
          padding-top: 27px;
          width: 100%;
        }
    
        .footer-wrapper {
          color: #6c696e;
          font-family: Poppins, sans-serif;
          font-size: 80%;
          font-weight: inherit;
          line-height: 30px;
          /* margin-top: 5px; */
          padding-bottom: 100px;
          /* padding-left: 40px; */
          position: relative;
          text-align: center;
          text-decoration: none;
          width: 100vw;
          display: flex;
          justify-content: center;
        }
    
        .footer-wrapper .job-posting {
          color: #333;
          float: left;
          margin-left: 19px;
          margin-right: 50px;
          margin-top: 25px;
          text-align: left;
        }
    
        .footer-wrapper p {
          font-weight: 600;
        }
    
        .footer-wrapper .pt {
          color: #333;
        }
    
        a {
          text-decoration: none !important;
        }
    
        .footer-wrapper .contact-form {
          color: #333;
          float: left;
          margin-left: 58px;
          margin-top: 25px;
          text-align: left;
          width: 18%;
        }
    
        .footer-wrapper .form-email {
          border: 1px solid #d3d3d3;
          margin-bottom: 10px;
          padding: 11px;
          width: 100%;
        }
    
        .footer-wrapper .dropdown,
        .footer-wrapper .form-comment,
        .footer-wrapper .form-email {
          border: 1px solid #d3d3d3;
          margin-bottom: 10px;
          padding: 11px;
          width: 100%;
        }
    
        .footer-wrapper .dropdown {
          background-color: #fff;
        }
    
        .footer-wrapper select,
        .footer-wrapper textarea {
          color: #6c696e;
        }
    
        .dropdown {
          position: relative;
        }
    
        .footer-wrapper .form-comment {
          height: 70px;
        }
    
        
        .footer-wrapper .form-button {
          background: #683793;
          border: 1px solid #683793;
          color: #fff;
          margin-bottom: 20px;
          margin-top: 15px;
          padding: 14px;
          width: 100%;
        }
    
        .devicer {
          background-color: #fff;
          border-top: 1px solid #d3d3d3;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 1fr 5fr;
          /* margin-top: 30px; */
          padding: 0 20px;
          width: 100vw;
        }
    
        .devicer p:nth-child(2) {
          text-align: right;
        }
    
        .footer-mail {
          color: #333;
        }
    
        input {
          outline: none;
        }
    
        textarea {
          outline: none;
        }
    
        .form-comment {
          resize: vertical;
        }
    
        </style>
       
        <div class="footer">
         <div style="width: 100%; border: 1px solid lightgray">
           <footer class="footer-text">
             <a href="https://recruiter.foundit.in/v2/index.html">Home</a> |
             <a href="https://recruiter.foundit.in/v2/ecom/">Buy Job Postings</a> |
             <a href="https://recruiter.foundit.in/v2/ecom/">
               Buy Resume Database Access
             </a>
             |
             <a href="https://recruiter.foundit.in/branding-solutions.html" target="_blank">
               Advertise with Us
             </a>
           </footer>
         </div>
         <div class="footer-wrapper" style="height:100">
           <div class="job-posting">
             <p style="font-size: 16px">Job posting :</p>
             <a href="https://recruiter.foundit.in/v4/jobposting" class="pt">
               Post a Job
             </a>
             <br />
             <a href="https://recruiter.foundit.in/v4/managejobposting" class="pt">
               Manage Job posting
             </a>
             <br />
             <a href="https://recruiter.foundit.in/v4/screening" class="pt">
               Manage screening Questionnaries
             </a>
           </div>
           <div class="job-posting">
             <p style="font-size: 16px">Resume Search:</p>
             <a class="pt">Search</a>
             <br />
             <a href="https://recruiter.foundit.in/v2/resumedatabase/resume_search_v1.html?from=it" class="pt">
               IT Skill Search
             </a>
           </div>
           <div class="job-posting">
             <p style="font-size:16px">Account Settings:</p>
             <a href="https://recruiter.foundit.in/v2/accountsettings/change_password.html" class="pt">
               Change Password
             </a>
             <br />
             <a href="https://recruiter.foundit.in/v2/accountsettings/monster_shortcuts.html" class="pt">
               foundit Shortcuts
             </a>
             <br />
             <a href="https://recruiter.foundit.in/v2/accountsettings/modify_comp_profile.html" class="pt">
               Modify Company Profile
             </a>
             <br />
             <a href="https://recruiter.foundit.in/v2/accountsettings/manage_login_access.html" class="pt">
               Manage Login Access
             </a>
             <br />
             <a href="https://recruiter.foundit.in/v2/accountsettings/manage_user.html" class="pt">
               Manage User
             </a>
           </div>
           <div class="job-posting">
             <p style="font-size:16px">About Our Site:</p>
             <a href="https://www.foundit.in/info/contact-us" class="pt">
               Contact Us
             </a>
             <br />
             <a href="https://www.foundit.in/info/about-us" class="pt">
               About foundit
             </a>
             <br />
             <a href="https://www.foundit.in/info/security-center" class="pt">
               Security center
             </a>
             <br />
             <a href="https://www.foundit.in/info/privacy" class="pt">
               Privacy Commitment
             </a>
             <br />
             <a href="https://www.foundit.in/info/besafe" class="pt">
               Be safe
             </a>
             <br />
             <a href="https://www.foundit.in/info/terms-of-use" class="pt">
               Terms Of Use
             </a>
             <br />
             <a href="https://recruiter.foundit.in/v2/feedback.html" class="pt">
               Report a Bug
             </a>
             <br />
             <a href="https://recruiter.foundit.in/v2/do_and_donts.html" class="pt">
               Do's and Don'ts
             </a>
           </div>
           <div class="contact-form">
             <form id="footer-form">
               <p style="font-size:16px">Need to Talk</p>
               <span id="error-box"></span>
                
               <input type="email" class="form-email" name="email" placeholder="Email" value=""
                 style="display: block;
                     font-size: 13px;
                     font-family: Poppins, sans-serif;
                     width: 92%;" />
     
               <select class="dropdown" style="display: block;
                       font-size: 13px;
                       font-family: Poppins, sans-serif" name="generalFeedback" 
                 value={inputField.generalFeedback}>
                 <option id="General Feedback" key="General Feedback" value="General Feedback">General Feedback</option>
                 <option id="Problems with site" key="Problems with site" value="Problems with site">Problems with site
                 </option>
                 <option id="Request Information" key="Request Information" value="Request Information">Request Information
                 </option>
                 <option id="Report Abuse" key="Report Abuse" value="Report Abuse">Report Abuse</option>
                 <option id="Search Result Feedback" key="Search Result Feedback" value="Search Result Feedback">Search
                   Result Feedback</option>
               </select>
     
               <textarea class="form-comment" name="comments" placeholder="Comments" cols={30} rows={10} style="display: block;
                       font-size: 13px;
                       font-family: Poppins, sans-serif; width: 92%" onChange={inputsHandler} value={inputField.comments}></textarea>
               <button type="button" id="submit" class="form-button" style="display: block; cursor: pointer">
                 SUBMIT
               </button>
             </form>
           </div>
         </div>
         <div class="devicer" style="
                 font-size: 13px;
                 font-family: Poppins, sans-serif;
                 color: rgb(60, 55, 64)">
           <p class="bt"> © 2023 foundit - All Rights Reserved</p>
           <p class="ft">
             Toll Free No : | 1-800-4196666,Toll No.:+91-40-66116611
             or&nbsp;
             <a class="footer-mail">
               sales@foundit.in
             </a>
           </p>
         </div>
       </div>
        `;
    }
  
    connectedCallback() {
      const data = JSON.parse(this.getAttribute("data"));
      console.log(data);
      this.attachedListener(this.shadowRoot);
    }
  
    attachedListener(root) {
      let formData = {
        email: this._email,
        generalfeedback: this._generalFeedback,
        comments: this._comments,
      };
  
      root.querySelector("input").onchange = function () {
        this._email = this.value;
        formData.email = this.value;
      };
      root.querySelector("select").onchange = function () {
        this._generalFeedback = this.value;
        formData.generalfeedback = this.value;
      };
  
      root.querySelector("textarea").onchange = function () {

        this._comments = this.value;
        formData.comments = this.value;
      };
  
      root.querySelector("button").addEventListener("click", () => {

        //reset the validation error and  innerHTML of span(that shows error message)
        this._emailValidationError = "";
        root.querySelectorAll("span")[0].innerHTML = '';
  
        if (formData.email === "") {
          this._emailValidationError = "Email Address cannot be blank";
        } else if (
          !/^[[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
        ) {
          this._emailValidationError = "Email Address is invalid";
        }
  
        if (this._emailValidationError !== "") {
          root.querySelector("span").innerHTML = `
            <div
              class="infobox"
              style="
                margin-bottom:20px;
                display: block;
                background-color: rgb(255, 242, 242);
                border: 1px solid rgb(255, 0, 0);
                padding: 5px;
                width: 100%
              "
            >
              ${this._emailValidationError}
              <a
                style="
                  cursor: pointer;
                  color: blue;
                  text-decoration: underline
                "
                onclick='setEmailError("")'
              >
                Click Here
              </a>
            </div>
          `;
        }
        console.log(formData);
      });
    }
    update() {}
  }
  customElements.define("footer-tag", FooterElm);
  