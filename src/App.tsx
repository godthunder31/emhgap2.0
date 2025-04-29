import React from 'react';
import { IonApp, setupIonicReact } from '@ionic/react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import LoginPage from './pages/LoginPage';
import AssesseeDetails from './pages/AssesseeDetails';
import AssessorDetails from './pages/AssessorDetails';
import NurseAssesseeDetails from './pages/NurseAssesseeDetails';
import NurseCheckPage from './pages/NurseCheckPage';
import NurseLoginPage from './pages/NurseLoginPage';
import Index from './pages/index'; 
import Index2 from './pages/index2'; 
import VersionPrompt from './pages/VersionPrompt';
import ModulesPage from './pages/ModulesPage';
import FullModules from './pages/FullModules';
import ChildAdolescentPage from './pages/ChildAdolescentPage';
import ShVerChildAdolescentPage from './pages/ShVerChildAdolescentPage';
import ShVerSubstanceUsePage from './pages/ShVerSubstanceUsePage';
import DisordersDueToSubstanceUsePage from './pages/DisordersDueToSubstanceUsePage';
import DescriptionC from './pages/DescriptionC';
import AssessmentC from './pages/AssessmentC';
import ManagementC from './pages/ManagementC';
import CDAFollowUp from './pages/CDAFollowUp';
import Table1AgeSelectionC from './pages/Table1AgeSelectionC';
import DescriptionDDSU from './pages/DescriptionDDSU';
import CDAProtocolsPage1 from './pages/CDAProtocolsPage1';
import CDAProtocol1Page1 from './pages/CDAProtocol1Page1';
import CDAProtocol1Page2 from './pages/CDAProtocol1Page2';
import CDAProtocol1Page3 from './pages/CDAProtocol1Page3';
import CDAProtocol1Page5 from './pages/CDAProtocol1Page5';
import CDAProtocol1Page6 from './pages/CDAProtocol1Page6';
import CDAProtocol1Page7 from './pages/CDAProtocol1Page7';
import CDAProtocol1Page8 from './pages/CDAProtocol1Page8';
import CDAProtocolsPage2 from './pages/CDAProtocolsPage2';
import CDAProtocolsPage3 from './pages/CDAProtocolsPage3';
import CDAProtocolsPage4 from './pages/CDAProtocolsPage4';
import CDAProtocolsPage5 from './pages/CDAProtocolsPage5';
import CDAProtocolsPage6 from './pages/CDAProtocolsPage6';
import ManagementS from './pages/ManagementS';
import SpecialPopulationsSubstanceUse from './pages/SUSpecialPopulations';
import ClinicalTipPage from './pages/SUClinicalTip';
import SUAdolescentsPage from './pages/SUAdolescents';
import SUWomen from './pages/SUWomen';
import SUWomenAlcohol from './pages/SUWomenAlcohol';
import ShVerSUAssessmentPage from './pages/ShVerSUAssessment';
import ShVerCADAssessment from './pages/ShVerCADAssessment';
import ShVerSUBox1 from './pages/ShVerSUBox1';
import ShVerCADTable from './pages/ShVerCADTable1';
import ShVerSUFollowup from './pages/ShVerSUFollowup';
import ShVErSuBox1Alcohol from './pages/ShVerSUBox1Alcohol';
import ShVerSUBox1Benzodiazepines from './pages/ShVerSUBox1Benzodiazepines';
import ShVerSUBox1Opioids from './pages/ShVerSUBox1Opioids';
import ShVerSUBox1Tobacco from './pages/ShVerSUBox1Tobacco';
import ShVerSUBox1Stimulants from './pages/ShVerSUBox1Stimulants';
import ShVerSUBox1Khat from './pages/ShVerSUBox1Khat';
import ShVerSUBox1Cannabis from './pages/ShVerSUBox1Cannabis';
import ShVerSUBox1Tramadol from './pages/ShVerSUBox1Tramadol';
import ShVerSUBox1VolatileSolvents from './pages/ShVerSUBox1VolatileSolvents';
import ShVerSUBox1Hallucinogens from './pages/ShVerSUBox1Hallucinogens';
import ShVerSUBox1Mdma from './pages/ShVerSUBox1Mdma';
import ShVerCADTable1Infants from './pages/ShVerCADTable1Infants';
import ShVerCADTable1MiddleAge from './pages/ShVerCADTable1MiddleAge';
import ShVerCADTable1Adolescents from './pages/ShVerCADTable1Adolescents';
import ShVerCADTable1AllAges from './pages/ShVerCADTable1AllAges';
import Home from './pages/Home';
import AssessStep1C from './pages/AssessStep1C';
import AssessStep1Pg1Continue from './pages/AssessStep1Pg1Continue';
import AssessStep1Pg2 from './pages/AssessStep1Pg2';
import AssessStep1Pg3 from './pages/AssessStep1Pg3';
import AssessStep1End from './pages/AssessStep1End';
import AssessStep2Pg1 from './pages/AssessStep2Pg1';
import AssessStep2Pg2 from './pages/AssessStep2Pg2';
import AssessStep2Pg2Yes from './pages/AssessStep2Pg2Yes';
import AssessStep2Pg2No from './pages/AssessStep2Pg2No';
import AssessStep2Pg3 from './pages/AssessStep2Pg3';
import AssessStep2EndYes from './pages/AssessStep2EndYes';
import AssessStep2EndNo from './pages/AssessStep2EndNo';
import AssessStep3Pg1 from './pages/AssessStep3Pg1';
import AssessStep3Pg1No from './pages/AssessStep3Pg1No';
import AssessStep3Pg2Yes from './pages/AssessStep3Pg2Yes';
import AssessStep3Pg2No from './pages/AssessStep3Pg2No';
import AssessStep3Pg2 from './pages/AssessStep3Pg2';
import AssessStep4Pg1 from './pages/AssessStep4Pg1';
import AssessStep4Pg2 from './pages/AssessStep4Pg2';
import AssessStep4Pg2Yes from './pages/AssessStep4Pg2Yes';
import AssessStep4Pg2No from './pages/AssessStep4Pg2No';
import AssessStep4Pg3 from './pages/AssessStep4Pg3';
import AssessStep4Pg3Yes from './pages/AssessStep4Pg3Yes';
import AssessStep4Pg3No from './pages/AssessStep4Pg3No';
import AssessStep4Pg4 from './pages/AssessStep4Pg4';
import AssessStep4Pg5 from './pages/AssessStep4Pg5';
import AssessStep4Pg6 from './pages/AssessStep4Pg6';
import AssessStep4Pg7 from './pages/AssessStep4Pg7';
import AssessStep4Pg7Yes from './pages/AssessStep4Pg7Yes';
import AssessStep4Pg7No from './pages/AssessStep4Pg7No';
import AssessStep5Pg1 from './pages/AssessStep5Pg1';
import AssessStep5Pg1Yes from './pages/AssessStep5Pg1Yes';
import AssessStep6Pg1 from './pages/AssessStep6Pg1';
import AssessStep6Pg1Yes from './pages/AssessStep6Pg1Yes';
import AssessStep6Pg2 from './pages/AssessStep6Pg2';
import AssessStep6Pge2Yes from './pages/AssessStep6Pge2Yes';
import AssessStep6Pg3No from './pages/AssessStep6Pg3No';
import AssessStep6Pg4 from './pages/AssessStep6Pg4';
import AssessStep7Pg1 from './pages/AssessStep7Pg1';
import AssessStep7Pg2 from './pages/AssessStep7Pg2';
import AssessStep7Pg1No from './pages/AssessStep7Pg1No';
import AssessStep7Pg2Yes from './pages/AssessStep7Pg2Yes';
import SubAssessment from './pages/SubAssessment';
import SubAssessStep1Pg1 from './pages/SubAssessStep1Pg1';
import SubAssessStep1Pg2 from './pages/SubAssessStep1Pg2';
import SubAssessStep2Pg1 from './pages/SubAssessStep2Pg1';
import SubAssessStep2Pg2 from './pages/SubAssessStep2Pg2';
import SubAssessStep2Pg2Yes from './pages/SubAssessStep2Pg2Yes';
import SubAssessStep2Pg2No from './pages/SubAssessStep2Pg2No';
import SubAssessStep3Pg1 from './pages/SubAssessStep3Pg1';
import SubAssessStep3Pg1Yes from './pages/SubAssessStep3Pg1Yes';



import AssessStep6Pg3 from './pages/AssessStep6Pg3';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';



/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App =() => (
  <IonApp>
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/AssesseeDetails" element={<AssesseeDetails />} />
      <Route path="/AssessorDetails" element={<AssessorDetails />} />
      <Route path="/NurseCheckPage" element={<NurseCheckPage />} />
      <Route path="/NurseAssesseeDetails" element={<NurseAssesseeDetails />} />
      <Route path="/NurseLoginPage" element={<NurseLoginPage />} />
      <Route path="/VersionPrompt" element={<VersionPrompt />} />
      <Route path="/index" element={<Index />} />
      <Route path="/index2" element={<Index2 />} />
      <Route path="/ModulesPage" element={<ModulesPage />} />
      <Route path="/FullModules" element={<FullModules />} />
      <Route path="/ChildAdolescentPage" element={<ChildAdolescentPage />} />
      <Route path="/DisordersDueToSubstanceUsePage" element={<DisordersDueToSubstanceUsePage />} />
      <Route path="/DescriptionC" element={<DescriptionC />} />
      <Route path="/AssessmentC" element={<AssessmentC />} />
      <Route path="/ManagementC" element={<ManagementC />} />
      <Route path="/CDAFollowUp" element={<CDAFollowUp />} />
      <Route path="/DescriptionDDSU" element={<DescriptionDDSU />} />
      <Route path="/CDAProtocolsPage1" element={<CDAProtocolsPage1 />} />
      <Route path="/CDAProtocol1Page1" element={<CDAProtocol1Page1 />} />
      <Route path="/CDAProtocol1Page2" element={<CDAProtocol1Page2 />} />
      <Route path="/CDAProtocol1Page3" element={<CDAProtocol1Page3 />} />
      <Route path="/CDAProtocol1Page5" element={<CDAProtocol1Page5 />} />
      <Route path="/CDAProtocol1Page6" element={<CDAProtocol1Page6 />} />
      <Route path="/CDAProtocol1Page7" element={<CDAProtocol1Page7 />} />
      <Route path="/CDAProtocol1Page8" element={<CDAProtocol1Page8 />} />
      <Route path="/CDAProtocolsPage2" element={<CDAProtocolsPage2 />} />
      <Route path="/CDAProtocolsPage3" element={<CDAProtocolsPage3 />} />
      <Route path="/CDAProtocolsPage4" element={<CDAProtocolsPage4 />} />
      <Route path="/CDAProtocolsPage5" element={<CDAProtocolsPage5 />} />
      <Route path="/CDAProtocolsPage6" element={<CDAProtocolsPage6 />} />
      <Route path="/ManagementS" element={<ManagementS />} />
      <Route path="/SUSpecialPopulations" element={<SpecialPopulationsSubstanceUse />} />
      <Route path="/SUClinicalTIp" element={<ClinicalTipPage />} />
      <Route path="/SUAdolescents" element={<SUAdolescentsPage />} />
      <Route path="/SUWomen" element={<SUWomen />} />
      <Route path="/SUWomenAlcohol" element={<SUWomenAlcohol />} />
      <Route path="/ShVerChildAdolescentPage" element={<ShVerChildAdolescentPage />} />
      <Route path="/CDAProtocolsPage5" element={<CDAProtocolsPage5 />} />
      <Route path="/ShVerCADAssessment" element={<ShVerCADAssessment />} />
      <Route path="/ShVerSUBox1" element={<ShVerSUBox1 />} />
      <Route path="/ShVerCADTable1" element={<ShVerCADTable />} />
      <Route path="/ShVerSUFollowup" element={<ShVerSUFollowup />} />
      <Route path="/Table1AgeSelectionC" element={<Table1AgeSelectionC />} />
      <Route path="/AssessStep1C" element={<AssessStep1C />} />
      <Route path="/AssessStep1Pg1Continue" element={<AssessStep1Pg1Continue />} />
      <Route path="/AssessStep1Pg2" element={<AssessStep1Pg2 />} />
      <Route path="/AssessStep2Pg1" element={<AssessStep2Pg1 />} />
      <Route path="/AssessStep2Pg2" element={<AssessStep2Pg2 />} />
      <Route path="/AssessStep2Pg2Yes" element={<AssessStep2Pg2Yes />} />
      <Route path="/AssessStep2Pg2No" element={<AssessStep2Pg2No />} />
      <Route path="/AssessStep2Pg3" element={<AssessStep2Pg3 />} />
      <Route path="/AssessStep3Pg1" element={<AssessStep3Pg1 />} />
      <Route path="/CDAProtocolsPage5" element={<CDAProtocolsPage5 />} />
      <Route path="/CDAProtocolsPage6" element={<CDAProtocolsPage6 />} />
      <Route path="/ManagementS" element={<ManagementS />} />
      <Route path="/SUSpecialPopulations" element={<SpecialPopulationsSubstanceUse />} />
      <Route path="/SUClinicalTIp" element={<ClinicalTipPage />} />
      <Route path="/SUAdolescents" element={<SUAdolescentsPage />} />
      <Route path="/SUWomen" element={<SUWomen />} />
      <Route path="/SUWomenAlcohol" element={<SUWomenAlcohol />} />
      <Route path="/ShVerChildAdolescentPage" element={<ShVerChildAdolescentPage />} />
      <Route path="/ShVerSubstanceUsePage" element={<ShVerSubstanceUsePage />} />
      <Route path="/ShVerSUAssessment" element={<ShVerSUAssessmentPage />} />
      <Route path="/ShVerCADAssessment" element={<ShVerCADAssessment />} />
      <Route path="/ShVerSUBox1" element={<ShVerSUBox1 />} />
      <Route path="/ShVerCADTable1" element={<ShVerCADTable />} />
      <Route path="/ShVerSUFollowup" element={<ShVerSUFollowup />} />
      <Route path="/Table1AgeSelectionC" element={<Table1AgeSelectionC />} />
      <Route path="/AssessStep1C" element={<AssessStep1C />} />
      <Route path="/AssessStep1Pg2" element={<AssessStep1Pg2 />} />
      <Route path="/AssessStep1Pg3" element={<AssessStep1Pg3 />} />
      <Route path="/AssessStep1End" element={<AssessStep1End />} />
      <Route path="/AssessStep2EndYes" element={<AssessStep2EndYes />} />
      <Route path="/AssessStep2EndNo" element={<AssessStep2EndNo />} />
      <Route path="/AssessStep2Pg3" element={<AssessStep2Pg3 />} />
      <Route path="/AssessStep3Pg1No" element={<AssessStep3Pg1No />} />
      <Route path="/AssessStep3Pg2Yes" element={<AssessStep3Pg2Yes />} />
      <Route path="/AssessStep3Pg2" element={<AssessStep3Pg2 />} />
      <Route path="/AssessStep3Pg2No" element={<AssessStep3Pg2No />} />
      <Route path="/AssessStep4Pg1" element={<AssessStep4Pg1 />} />
      <Route path="/AssessStep4Pg2" element={<AssessStep4Pg2 />} />
      <Route path="/AssessStep4Pg2Yes" element={<AssessStep4Pg2Yes />} />
      <Route path="/AssessStep4Pg2No" element={<AssessStep4Pg2No />} />
      <Route path="/AssessStep4Pg3" element={<AssessStep4Pg3 />} />
      <Route path="/AssessStep4Pg3Yes" element={<AssessStep4Pg3Yes />} />
      <Route path="/AssessStep4Pg3No" element={<AssessStep4Pg3No />} />
      <Route path="/AssessStep4Pg4" element={<AssessStep4Pg4 />} />
      <Route path="/AssessStep4Pg5" element={<AssessStep4Pg5 />} />
      <Route path="/AssessStep4Pg6" element={<AssessStep4Pg6 />} />
      <Route path="/AssessStep4Pg7" element={<AssessStep4Pg7 />} />
      <Route path="/AssessStep4Pg7Yes" element={<AssessStep4Pg7Yes />} />
      <Route path="/AssessStep4Pg7No" element={<AssessStep4Pg7No />} />
      <Route path="/AssessStep5Pg1" element={<AssessStep5Pg1 />} />
      <Route path="/AssessStep5Pg1Yes" element={<AssessStep5Pg1Yes />} />
      <Route path="/AssessStep6Pg1" element={<AssessStep6Pg1 />} />
      <Route path="/AssessStep6Pg1Yes" element={<AssessStep6Pg1Yes />} />
      <Route path="/AssessStep6Pg2" element={<AssessStep6Pg2 />} />
      <Route path="/AssessStep6Pge2Yes" element={<AssessStep6Pge2Yes />} />
      <Route path="/AssessStep6Pg3" element={<AssessStep6Pg3 />} />
      <Route path="/AssessStep6Pg3No" element={<AssessStep6Pg3No />} />
      <Route path="/AssessStep6Pg4" element={<AssessStep6Pg4 />} />
      <Route path="/AssessStep7Pg1" element={<AssessStep7Pg1 />} />
      <Route path="/AssessStep7Pg1No" element={<AssessStep7Pg1No />} />
      <Route path="/AssessStep7Pg2" element={<AssessStep7Pg2 />} />
      <Route path="/AssessStep7Pg2Yes" element={<AssessStep7Pg2Yes />} />
      <Route path="/SubAssessment" element={<SubAssessment />} />
      <Route path="/SubAssessStep1Pg1" element={<SubAssessStep1Pg1 />} />
      <Route path="/SubAssessStep1Pg2" element={<SubAssessStep1Pg2 />} />
      <Route path="/SubAssessStep2Pg1" element={<SubAssessStep2Pg1 />} />
      <Route path="/SubAssessStep2Pg2" element={<SubAssessStep2Pg2 />} />
      <Route path="/SubAssessStep2Pg2Yes" element={<SubAssessStep2Pg2Yes />} />
      <Route path="/SubAssessStep2Pg2No" element={<SubAssessStep2Pg2No />} />
      <Route path="/SubAssessStep3Pg1" element={<SubAssessStep3Pg1 />} />
      <Route path="/SubAssessStep3Pg1Yes" element={<SubAssessStep3Pg1Yes />} />


      <Route path="/questions/alcohol" element={<ShVErSuBox1Alcohol />} />
      <Route path="/questions/Benzodiazepines" element={<ShVerSUBox1Benzodiazepines />} />
      <Route path="/questions/Opioids" element={<ShVerSUBox1Opioids />} />
      <Route path="/questions/Tobacco" element={<ShVerSUBox1Tobacco />} />
      <Route path="/questions/stimulants" element={<ShVerSUBox1Stimulants />} />
      <Route path="/questions/Khat" element={<ShVerSUBox1Khat />} />
      <Route path="/questions/Cannabis" element={<ShVerSUBox1Cannabis />} />
      <Route path="/questions/Tramadol" element={<ShVerSUBox1Tramadol />} />
      <Route path="/questions/solvents" element={<ShVerSUBox1VolatileSolvents />} />
      <Route path="/questions/hallucinogens" element={<ShVerSUBox1Hallucinogens />} />
      <Route path="/questions/Mdma" element={<ShVerSUBox1Mdma />} />
      <Route path="/questions/infants" element={<ShVerCADTable1Infants />} />
      <Route path="/questions/middle" element={<ShVerCADTable1MiddleAge />} />
      <Route path="/questions/adolescents" element={<ShVerCADTable1Adolescents />} />
      <Route path="/questions/allages" element={<ShVerCADTable1AllAges />} />
      <Route path="/Home" element={<Home />} />
      
        <Route path="/" element={<Navigate to="/VersionPrompt" />} />
       <Route path="*" element={<Navigate to="/VersionPrompt" />} />
       </Routes>
       </BrowserRouter>
  </IonApp>
);
export default App;
