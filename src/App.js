import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
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
            <Route path="/about" element={<AboutUs />} />
            {/* <Route path="/blogs" element={<Blogs />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />

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
              path="/products/skyz-sales/reports-and-dashboards/"
              element={<ReportsAndDashboards />}
            />

            {/* Marketing */}
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzmarketing/"
              element={<Marketing />}
            />
            <Route
              path="/products/skyz-marketing/campaign-optimization/"
              element={<CampaignOptimization />}
            />
            <Route
              path="/products/skyz-marketing/customer-clubs/"
              element={<CustomerClubs />}
            />
            <Route
              path="/products/skyz-marketing/customizable-information-analysis/"
              element={<CustomizableInformationAnalysis />}
            />
            <Route
              path="/products/skyz-marketing/database-management/"
              element={<DatabaseManagement />}
            />
            <Route
              path="/products/skyz-marketing/email-campaign-management/"
              element={<EmailCampaignManagement />}
            />
            <Route
              path="/products/skyz-marketing/field-based-marketing-management/"
              element={<FieldBasedMarketingManagement />}
            />
            <Route
              path="/products/skyz-marketing/generate-customer-details/"
              element={<GenerateCustomerDetails />}
            />
            <Route
              path="/products/skyz-marketing/information-sharing/"
              element={<InformationSharingMarketing />}
            />
            <Route
              path="/products/skyz-marketing/marketing-automation/"
              element={<MarketingAutomation />}
            />
            <Route
              path="/products/skyz-marketing/marketing-control/"
              element={<MarketingControl />}
            />
            <Route
              path="/products/skyz-marketing/maximizing-new-customers/"
              element={<MaximizingNewCustomers />}
            />
            <Route
              path="/products/skyz-marketing/mobile-campaign-management/"
              element={<MobileCampaignManagement />}
            />
            <Route
              path="/products/skyz-marketing/reports-and-dashboards/"
              element={<ReportsAndDashboardsMarketing />}
            />
            <Route
              path="/products/skyz-marketing/social-campaign-management/"
              element={<SocialCampaignManagement />}
            />
            <Route
              path="/products/skyz-marketing/social-sharing/"
              element={<SocialSharingMarketing />}
            />

            {/* Service */}
            <Route
              path="/skyzcrm-ניהול-קשרי-לקוחות/skyzservice/"
              element={<Service />}
            />
            <Route
              path="/products/skyz-service/customer-service-calls-mgmt/"
              element={<CustomerServiceCallsMgmt />}
            />
            <Route
              path="/products/skyz-service/customer-service-control/"
              element={<CustomerServiceControl />}
            />
            <Route
              path="/products/skyz-service/customer-service-events-mgmt/"
              element={<CustomerServiceEventsMgmt />}
            />
            <Route
              path="/products/skyz-service/customer-service-information-mgmt/"
              element={<CustomerServiceInformationMgmt />}
            />
            <Route
              path="/products/skyz-service/customer-service-performance-mgmt/"
              element={<CustomerServicePerformanceMgmt />}
            />
            <Route
              path="/products/skyz-service/customer-service-workflow/"
              element={<CustomerServiceWorkflow />}
            />
            <Route
              path="/products/skyz-service/email-integration/"
              element={<EmailIntegrationService />}
            />
            <Route
              path="/products/skyz-service/field-based-service-mgmt/"
              element={<FieldBasedServiceMgmt />}
            />
            <Route
              path="/products/skyz-service/reports-and-dashboards/"
              element={<ReportsAndDashboardsService />}
            />
            <Route
              path="/products/skyz-service/share-calendars/"
              element={<ShareCalendars />}
            />
            <Route
              path="/products/skyz-service/sharing-knowledge/"
              element={<SharingKnowledge />}
            />
            <Route
              path="/products/skyz-service/skyz-service-cloud/"
              element={<SkyzServiceCloud />}
            />
            <Route
              path="/products/skyz-service/skyz-service-mobile/"
              element={<SkyzServiceMobile />}
            />
            <Route
              path="/products/skyz-service/service-level-agreement-sla/"
              element={<SLA />}
            />
            <Route
              path="/products/skyz-service/social-customer-service/"
              element={<SocialCustomerService />}
            />
            <Route
              path="/products/skyz-service/tasks-management/"
              element={<TasksManagement />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
