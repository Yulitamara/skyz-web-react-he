import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
// import Login from "./pages/Login";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
// Sales
import Sales from "./pages/products/sales/Sales";
import LeadManagement from "./pages/products/sales/LeadManagement";
import OpportunityManagement from "./pages/products/sales/OpportunityManagement";
import SalesManagement from "./pages/products/sales/SalesManagement";
import ContactManagement from "./pages/products/sales/ContactManagement";
import MeetingsManagement from "./pages/products/sales/MeetingsManagement";
import PerformanceManagement from "./pages/products/sales/PerformanceManagement";
import SkyzSalesCloud from "./pages/products/sales/SkyzSalesCloud";
import SkyzSalesMobile from "./pages/products/sales/SkyzSalesMobile";
import SalesWorkflow from "./pages/products/sales/SalesWorkflow";
import EmailIntegration from "./pages/products/sales/EmailIntegration";
import InformationSharing from "./pages/products/sales/InformationSharing";
import CalendarSharing from "./pages/products/sales/CalendarSharing";
import SocialSharing from "./pages/products/sales/SocialSharing";
import ForecastSales from "./pages/products/sales/ForecastSales";
import ReportsAndDashboards from "./pages/products/sales/ReportsAndDashboards";

// Marketing
import Marketing from "./pages/products/marketing/Marketing";
import CampaignOptimization from "./pages/products/marketing/CampaignOptimization";
import CustomerClubs from "./pages/products/marketing/CustomerClubs";
import CustomizableInformationAnalysis from "./pages/products/marketing/CustomizableInformationAnalysis";
import DatabaseManagement from "./pages/products/marketing/DatabaseManagement";
import EmailCampaignManagement from "./pages/products/marketing/EmailCampaignManagement";
import FieldBasedMarketingManagement from "./pages/products/marketing/FieldBasedMarketingManagement";
import GenerateCustomerDetails from "./pages/products/marketing/GenerateCustomerDetails";
import InformationSharingMarketing from "./pages/products/marketing/InformationSharingMarketing";
import MarketingAutomation from "./pages/products/marketing/MarketingAutomation";
import MarketingControl from "./pages/products/marketing/MarketingControl";
import MaximizingNewCustomers from "./pages/products/marketing/MaximizingNewCustomers";
import MobileCampaignManagement from "./pages/products/marketing/MobileCampaignManagement";
import ReportsAndDashboardsMarketing from "./pages/products/marketing/ReportsAndDashboardsMarketing";
import SocialCampaignManagement from "./pages/products/marketing/SocialCampaignManagement";
import SocialSharingMarketing from "./pages/products/marketing/SocialSharingMarketing";

// Srvice
import Service from "./pages/products/service/Service";
import CustomerServiceCallsMgmt from "./pages/products/service/CustomerServiceCallsMgmt";
import CustomerServiceControl from "./pages/products/service/CustomerServiceControl";
import CustomerServiceEventsMgmt from "./pages/products/service/CustomerServiceEventsMgmt";
import CustomerServiceInformationMgmt from "./pages/products/service/CustomerServiceInformationMgmt";
import CustomerServicePerformanceMgmt from "./pages/products/service/CustomerServicePerformanceMgmt";
import CustomerServiceWorkflow from "./pages/products/service/CustomerServiceWorkflow";
import EmailIntegrationService from "./pages/products/service/EmailIntegrationService";
import FieldBasedServiceMgmt from "./pages/products/service/FieldBasedServiceMgmt";
import ReportsAndDashboardsService from "./pages/products/service/ReportsAndDashboardsService";
import ShareCalendars from "./pages/products/service/ShareCalendars";
import SharingKnowledge from "./pages/products/service/SharingKnowledge";
import SkyzServiceCloud from "./pages/products/service/SkyzServiceCloud";
import SkyzServiceMobile from "./pages/products/service/SkyzServiceMobile";
import SLA from "./pages/products/service/SLA";
import SocialCustomerService from "./pages/products/service/SocialCustomerService";
import TasksManagement from "./pages/products/service/TasksManagement";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import OpenBlog from "./pages/OpenBlog";

function App() {
  const { i18n } = useTranslation();

  // Get the language direction from i18next
  const languageDirection = i18n.dir();

  // Define styles based on the language direction
  const containerStyles = {
    direction: languageDirection,
    // Add other styles as needed
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Router>
        <ScrollToTop />
        <Navbar onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="language-container" style={containerStyles}>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/אודות-skyzcrm/"
              element={<AboutUs />}
            />
            <Route path="/בלוג/" element={<Blogs />} />
            <Route path="/:url/" element={<OpenBlog />} />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/צור-קשר/"
              element={<Contact />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/אודות-skyzcrm/privacy-policy/"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/אודות-skyzcrm/terms-of-service/"
              element={<TermsOfService />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/אודות-skyzcrm/cookie-policy/"
              element={<CookiePolicy />}
            />
            {/* Sales */}
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/"
              element={<Sales />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/ניהול-לידים-4/"
              element={<LeadManagement />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/ניהול-הזדמנויות/"
              element={<OpportunityManagement />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/ניהול-מכירות/"
              element={<SalesManagement />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/ניהול-קשרים-מכירות/"
              element={<ContactManagement />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/ניהול-פגישות-מכירות/"
              element={<MeetingsManagement />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/ניהול-ביצועים-מכירות/"
              element={<PerformanceManagement />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/ענן-מכירות/"
              element={<SkyzSalesCloud />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/מובייל-מכירות/"
              element={<SkyzSalesMobile />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/שרשור-workflow-מכירות/"
              element={<SalesWorkflow />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/אינטגרציה-לדואר-אלקטרוני-מכירות/"
              element={<EmailIntegration />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/שיתוף-מידע-וקבצים-מכירות/"
              element={<InformationSharing />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/שיתוף-יומנים-מכירות/"
              element={<CalendarSharing />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/שיתוף-חברתי-מכירות/"
              element={<SocialSharing />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/תחזית-מכירות/"
              element={<ForecastSales />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzsales/דוחות-ודשבורד-מכירות/"
              element={<ReportsAndDashboards />}
            />

            {/* Marketing */}
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/"
              element={<Marketing />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/ניהול-קמפיין-אימיילים/"
              element={<EmailCampaignManagement />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/ניהול-קמפיין-מובייל/"
              element={<MobileCampaignManagement />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/ניהול-קמפיין-חברתי/"
              element={<SocialCampaignManagement />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/ניהול-מאגרי-מידע/"
              element={<DatabaseManagement />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/ניהול-מועדוני-לקוחות/"
              element={<CustomerClubs />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/אפיון-לקוחות-קיימים/"
              element={<GenerateCustomerDetails />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/ניתוח-מידע-להתאמה-אישית/"
              element={<CustomizableInformationAnalysis />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/שיתוף-מידע-שיווק/"
              element={<InformationSharingMarketing />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/שיתוף-חברתי-שיווק/"
              element={<SocialSharingMarketing />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/אופטימיזציית-קמפיינים-פרסומיים/"
              element={<CampaignOptimization />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/בקרת-שיווק-כוללת/"
              element={<MarketingControl />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/מקסום-לקוחות-חדשים/"
              element={<MaximizingNewCustomers />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/ניהול-שיווק-מהשטח/"
              element={<FieldBasedMarketingManagement />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/אוטומציה-של-תהליכים-בשיווק/"
              element={<MarketingAutomation />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/דוחות-ודשבורד-שיווק/"
              element={<ReportsAndDashboardsMarketing />}
            />

            {/* Service */}
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/"
              element={<Service />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/ניהול-קריאות-שירות/"
              element={<CustomerServiceCallsMgmt />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/ניהול-אירועי-שירות/"
              element={<CustomerServiceEventsMgmt />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/ניהול-משימות-שירות/"
              element={<TasksManagement />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/ניהול-חוזי-שירות-sla/"
              element={<SLA />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/ניהול-שירות-שטח/"
              element={<FieldBasedServiceMgmt />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/ניהול-ביצועי-שירות/"
              element={<CustomerServicePerformanceMgmt />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/שיתוף-מידע-וקבצים-שירות/"
              element={<CustomerServiceInformationMgmt />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/שיתוף-יומנים-שירות/"
              element={<ShareCalendars />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/שיתוף-יומנים-שירות/"
              element={<EmailIntegrationService />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/שיתוף-חברתי-שירות/"
              element={<SocialCustomerService />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/שיתוף-ידע-שירות/"
              element={<SharingKnowledge />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/טכנולוגיית-ענן/"
              element={<SkyzServiceCloud />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/מובייל-שירות/"
              element={<SkyzServiceMobile />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/שרשור-workflow-שירות/"
              element={<CustomerServiceWorkflow />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/אינטגרציה-לדואר-אלקטרוני-שירות/"
              element={<EmailIntegrationService />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/בקרת-שירות/"
              element={<CustomerServiceControl />}
            />
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/דוחות-ודשבורד-שירות/"
              element={<ReportsAndDashboardsService />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
