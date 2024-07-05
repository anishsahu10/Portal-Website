import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Information from './components/Information';
import Homepage from './components/Homepage';
import HeadReg from './components/RegistrationPages/HeadReg';
import ManageReg from './components/RegistrationPages/ManagementReg';
import RecruiteReg from './components/RegistrationPages/RecruiterReg';
import HeadLogin from './components/LoginForms/HeadLogin';
import ManagementLogin from './components/LoginForms/ManagementLogin';
import RecruiterLogin from './components/LoginForms/RecruiterLogin';
import CandidateReg from './components/RegistrationPages/CandidateReg';
import CandidateLogin from './components/LoginForms/CandidateLogin';
import ClientReg from './components/RegistrationPages/ClientReg';
import ClientLogin from './components/LoginForms/ClientLogin';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import ResponsiveDrawer from './components/Pages/Dashboard';
// import CandidatePage from './components/Pages/Candidate';
// import ClientPage from './components/Pages/Client';
import HeafPage from './components/Pages/Admin'
import ManagementPage from './components/Pages/Manager';
// import RecruiterPage from './components/Pages/Recruiter';
import Search, { Searchbar } from './components/Search';
import List from './components/List';
import JobCreation from './components/Pages/jobcreation';
import Admin from './components/Pages/Admin';
import AdminEditJobs from './components/Users/Admin/AdminEditJobs';
import AdminRecruitmentStats from './components/Users/Admin/AdminRecruitementStats';
import AdminManageUsers from './components/Users/Admin/AdminManageUsers';
import AdminJobCreation from './components/Users/Admin/AdminJobCreation';
import AdminPage from './components/Users/Admin/AdminPage';
import AdminProfile from './components/Users/Admin/AdminProfile';
import ManagerEditJobs from './components/Users/Manager/ManagerEditJobs';
import ManagerJobCreation from './components/Users/Manager/ManagerJobCreation';
import ManagerRecruitmentStats from './components/Users/Manager/ManagerRecruitmentStats';
import ManagerManageUsers from './components/Users/Manager/ManagerManageUser';
import ManagerProfile from './components/Users/Manager/ManagerProfile';
import ManagerPage from './components/Users/Manager/ManagerPage';
import ClientPage from './components/Users/Client/ClientPage';
import ClientRecruitmentStats from './components/Users/Client/ClientRecruitmentStats';
import ClientProfile from './components/Users/Client/ClientProfile';
import ClientOpenJobs from './components/Users/Client/ClientOpenJobs';
import ClientCloseJobs from './components/Users/Client/ClientCloseJobs';
import ClientJobCreation from './components/Users/Client/ClientJobCreation';
import CandidateEditJobs from './components/Users/Candidate/CandidateJob';
import CandidateRecruitmentStats from './components/Users/Candidate/CandidateRecruitmentStats';
import CandidatePage from './components/Users/Candidate/CandidatePage';
import CandidateJob from './components/Users/Candidate/CandidateApplyJobs';
import CandidateProfile from './components/Users/Candidate/CandidateProfile';
import RecruiterJobCreation from './components/Users/Recruiter/RecruiterJobCreation';
import RecruiterEditJobs from './components/Users/Recruiter/RecruiterEditJobs';
import RecruiterRecruitmentStats from './components/Users/Recruiter/RecruiterRecruitmentStats';
import RecruiterProfile from './components/Users/Recruiter/RecruiterProfile';
import RecruiterManageUsers from './components/Users/Recruiter/RecruiterManageUser';
import RecruiterPage from './components/Users/Recruiter/RecruiterPage';
import AdminJob from './components/Users/Admin/AdminJob';
import ClientJob from './components/Users/Client/ClientJob';

import AdminAddUser from './components/Users/Admin/AdminAddUser';
import AdminUser from './components/Users/Admin/AdminUser';
import AdminStats from './components/Users/Admin/AdminStats';
import ManagerAddUser from './components/Users/Manager/ManagerAddUser';
import ManagerUser from './components/Users/Manager/ManagerUser';
import CandidateApplyJob from './components/Users/Candidate/CandidateJob';
import Applicant from './components/Pages/Appicant';
import ClientApplicant from './components/Users/Client/Appicant';
import AdminApplicant from './components/Users/Admin/Appicant';
import RecruiterUser from './components/Users/Recruiter/RecruiterUser';
import RecruiterAddUser from './components/Users/Recruiter/RecruiterAddUser';


const App = ()=>{

  const theme = {
    colors: {
      heading: "rgb(24,24,29)",
      text: "rgb(24,24,29)",
      white:"#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgba(98, 84, 243, 0.5)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/about' element={<Information />}/>
            <Route path='/' element={<Homepage />}/>
            <Route path='/admin' element={< AdminPage />}>
              <Route path='applicant' element={<AdminApplicant />}/>
              <Route path='stats' element={<AdminStats />}/>
              <Route path="jobs" element={<AdminJob />}>
                <Route path="" element={<AdminEditJobs/>}/>
                <Route path="addJob" element={<AdminJobCreation />} />
              </Route>
              <Route path="" element={<AdminJob />} />
              <Route path="user" element={<AdminUser/>} >
                <Route path="" element={<AdminManageUsers/>} />
                <Route path="add" element={<AdminAddUser/>} />
              </Route>
                <Route path="profile" element={<AdminProfile/>} />
            </Route>
            <Route path='/manager' element={<ManagerPage />}>
              <Route path="" element={<ManagerEditJobs />} />
              <Route path="jobcreation" element={<ManagerJobCreation />} />
              <Route path="recruitmentstats" element={<ManagerRecruitmentStats />} />
              <Route path="user" element={<ManagerUser/>} >
                <Route path="" element={<ManagerManageUsers/>} />
                <Route path="add" element={<ManagerAddUser/>} />
              </Route>

              <Route path="profile" element={<ManagerProfile/>} />
            </Route>
            <Route path='/client' element={<ClientPage />}>
              <Route path='applicant' element={<ClientApplicant />}/>
              <Route path="jobs" element={<ClientJob />} >
                <Route path="" element={<ClientOpenJobs/>}/>
                <Route path="closed" element={<ClientCloseJobs />} />
              </Route>
              <Route path="" element={<ClientJobCreation />} />
              <Route path="recruitmentstats" element={<ClientRecruitmentStats />} />
              <Route path="profile" element={<ClientProfile/>} />
            </Route>
            <Route path='/candidate' element={<CandidatePage />}>
              <Route path="" element={<CandidateJob />} />
              <Route path="job" element={<CandidateApplyJob />} />
              <Route path="recruitmentstats" element={<CandidateRecruitmentStats />} />
              <Route path="profile" element={<CandidateProfile/>} />
            </Route>
            <Route path='/recruiter' element={<RecruiterPage />}>
              <Route path="" element={<RecruiterEditJobs />} />
              <Route path="jobcreation" element={<RecruiterJobCreation />} />
              <Route path="user" element={<RecruiterUser/>} >
                <Route path="" element={<RecruiterManageUsers/>} />
                <Route path="add" element={<RecruiterAddUser/>} />
              </Route>
              <Route path="recruitmentstats" element={<RecruiterRecruitmentStats />} />
              <Route path='applicant' element={<Applicant />}/>
              <Route path="profile" element={<RecruiterProfile/>} />
            </Route>
            
            <Route path='/managementReg' element={<ManageReg />}/>
            <Route path='/recruiteReg' element={<RecruiteReg />}/>
            <Route path='/headReg' element={<HeadReg />}/>
            <Route path='/candidateReg' element={<CandidateReg />}/>
            <Route path='/clientReg' element={<ClientReg />}/>
            <Route path='/headLogin' element={<HeadLogin />}/>
            <Route path='/managementLogin' element={<ManagementLogin />}/>
            <Route path='/recruiterLogin' element={<RecruiterLogin />}/>
            <Route path='/candidateLogin' element={<CandidateLogin />}/>
            <Route path='/clientLogin' element={<ClientLogin />}/>
            <Route path='/managementPage' element={<ManagementPage />}/>
            <Route path='/candidatePage' element={<CandidatePage />}/>
            <Route path='/clientPage' element={<ClientPage />}/>
            <Route path='/adminPage' element={<AdminPage/>}/>
            <Route path='/recruiterPage' element={<RecruiterPage />}/>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>  
     
  );
};

export default App;