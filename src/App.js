import React, {useState} from "react";
import "./App.css";
import "../src/components/Footer";
import "./header";

function App() {
  const [headerAPIData, setHeaderAPIData] = useState(JSON.stringify({
    new_search_beta_customer: true,
    LOGOUT: { Logout: "https://recruiter.foundit.in/v2/logout.html" },
    SEARCH: {
      "IT Skills Search":
        "https://recruiter.foundit.in/v2/resumedatabase/resume_search_v1.html?from=it",
      "Search ": "https://recruiter.foundit.in/v4/recruiter/search-v1",
      "Manage Saved Search":
        "https://recruiter.foundit.in/v2/savesearch/manage_search.html",
      Search: "https://recruiter.foundit.in/v4/recruiter/search-v1",
    },
    EXTRA: {
      "Get resume database access":
        "https://recruiter.foundit.in/v2/ecom/#resume_access",
      IMAGE:
        "https://media.foundit.in/v2/js/common/recruiter/display_profile.html?tn=125&nm=11760210102022160845.png",
      LOGO_NONTRANS:
        "https://media.foundit.in/recruiter_2015/india/images/found_logo_n.png",
      "Buy more job posting credits":
        "https://recruiter.foundit.in/v2/ecom/index.html",
      REC_PROFILE: "https://recruiter.foundit.in/v2/recruiter_profile.html",
      Feedback: "https://recruiter.foundit.in/v2/feedback.html",
      "Do's and Don'ts": "https://recruiter.foundit.in/v2/do_and_donts.html",
      "May i help you":
        "https://recruiter.foundit.in/SelfHelp/#category=3&subcategory=47",
      LOGO_TRANS:
        "https://media.foundit.in/recruiter_2015/india/images/logo_n.png",
      LOGIN: "monsterinternaldtest",
      LAST_LOGIN: "17/03/2023",
      NAME: "Monstertest",
    },
    JOBPOSTING: {
      Screening: "https://recruiter.foundit.in/v4/screening",
      "Manage Job Postings": "https://recruiter.foundit.in/v4/managejobposting",
      "Post Job": "https://recruiter.foundit.in/v4/jobposting",
      "Create new screening": "https://recruiter.foundit.in/v4/screening/new",
    },
    REPORTS: {
      "Job Posting ":
        "https://recruiter.foundit.in/v2/usagereport/job_posting_usage.html",
      "Forward Resume":
        "https://recruiter.foundit.in/v2/usagereport/forward_resume_usage.html",
      "SMS Sent Report":
        "https://recruiter.foundit.in/v2/usagereport/sent_sms.html",
      "Download Excel Report":
        "https://recruiter.foundit.in/v2/usagereport/excel_download.html",
      Reports:
        "https://recruiter.foundit.in/v2/usagereport/job_posting_usage.html",
      "Email Sent Report":
        "https://recruiter.foundit.in/v2/usagereport/email_sent_usage.html",
      "Resume database":
        "https://recruiter.foundit.in/v2/usagereport/resume_database_usage.html",
      "Account Login":
        "https://recruiter.foundit.in/v2/usagereport/ac_login_usage_report.html",
    },
    DASHBOARD: { Dashboard: "https://recruiter.foundit.in/v4/dashboard/ui" },
    USERMANAGEMENT: {
      "Company Profile":
        "https://recruiter.foundit.in/v2/accountsettings/modify_comp_profile.html",
      "Manage Letters":
        "https://recruiter.foundit.in/v2/accountsettings/manage_letters.html",
      "Monster shortcuts":
        "https://recruiter.foundit.in/v2/accountsettings/monster_shortcuts.html",
      "foundit shortcuts":
        "https://recruiter.foundit.in/v2/accountsettings/monster_shortcuts.html",
      "Change Password":
        "https://recruiter.foundit.in/v2/accountsettings/change_password.html",
      "Update Your Contact Info":
        "https://recruiter.foundit.in/v2/accountsettings/update_information.html",
      "Manage Users":
        "https://recruiter.foundit.in/v2/accountsettings/manage_user.html",
      "Manage Login Access":
        "https://recruiter.foundit.in/v2/accountsettings/manage_login_access.html",
      "Verify Email & Mobile":
        "https://recruiter.foundit.in/v2/accountsettings/verification.html",
      "Portability Settings":
        "https://recruiter.foundit.in/v2/accountsettings/recruiter_profile_setting.html",
    },
    FOLDER: {
      "Manage Folders":
        "https://recruiter.foundit.in/v2/personalfolder/personal_folder.html",
      "Create a Personal Folder":
        "https://recruiter.foundit.in/v2/personalfolder/create_personal_folder.html",
      "My Favorite Profiles":
        "https://recruiter.foundit.in/v2/foldermanagement/index.html?folderID=26041027&prev=1&n=1",
      "My Commented Profiles":
        "https://recruiter.foundit.in/v2/foldermanagement/index.html?folderID=25319043&prev=1&n=1",
      "Personal Folders":
        "https://recruiter.foundit.in/v2/personalfolder/personal_folder.html",
      "My Viewed Profiles":
        "https://recruiter.foundit.in/v2/foldermanagement/index.html?folderID=25358081&prev=1&n=1",
    },
  }));
  return (
    <div className="App">
      <header-tag response={headerAPIData} />
      </div>
  );
}

export default App;
