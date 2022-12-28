import React from 'react';

import {
  Home as HomeView,
  Customers as CustomersView,
  HireUs as HireUsView,
  Faq as FaqView,
  Agency as AgencyView,
  Elearning as ElearningView,
  Enterprise as EnterpriseView,
  Service as ServiceView,
  WebBasic as WebBasicView,
  DesktopApp as DesktopAppView,
  Expo as ExpoView,
  Startup as StartupView,
  MobileApp as MobileAppView,
  JobListing as JobListingView,
  CloudHosting as CloudHostingView,
  Logistics as LogisticsView,
  Pricing as PricingView,
  About as AboutView,
  HelpCenter as HelpCenterView,
  HelpCenterArticle as HelpCenterArticleView,
  PortfolioPage as PortfolioPageView,
  PortfolioMasonry as PortfolioMasonryView,
  PortfolioGrid as PortfolioGridView,
  CompanyTerms as CompanyTermsView,
  AboutSideCover as AboutSideCoverView,
  PasswordResetCover as PasswordResetCoverView,
  PasswordResetSimple as PasswordResetSimpleView,
  SigninSimple as SigninSimpleView,
  SigninCover as SigninCoverView,
  SignupSimple as SignupSimpleView,
  SignupCover as SignupCoverView,
  AccountBilling as AccountBillingView,
  AccountGeneral as AccountGeneralView,
  AccountNotifications as AccountNotificationsView,
  AccountSecurity as AccountSecurityView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
  Messages as MessageView
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <ElearningView {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}) => <HomeView {...params} />,
  },
  {
    path: '/customers',
    renderer: (params = {}) => <CustomersView {...params} />,
  },
  {
    path: '/hire-us',
    renderer: (params = {}) => <HireUsView {...params} />,
  },
  {
    path: '/faq',
    renderer: (params = {}) => <FaqView {...params} />,
  },
  {
    path: '/overview',
    renderer: (params = {}) => <ElearningView {...params} />,
  },
  {
    path: '/enterprise',
    renderer: (params = {}) => <EnterpriseView {...params} />,
  },
  {
    path: '/service',
    renderer: (params = {}) => <ServiceView {...params} />,
  },
  {
    path: '/web-basic',
    renderer: (params = {}) => <WebBasicView {...params} />,
  },
  {
    path: '/desktop-app',
    renderer: (params = {}) => <DesktopAppView {...params} />,
  },
  {
    path: '/expo',
    renderer: (params = {}) => <ExpoView {...params} />,
  },
  {
    path: '/agency',
    renderer: (params = {}) => <AgencyView {...params} />,
  },
  {
    path: '/startup',
    renderer: (params = {}) => <StartupView {...params} />,
  },
  {
    path: '/mobile-app',
    renderer: (params = {}) => <MobileAppView {...params} />,
  },
  {
    path: '/job-listing',
    renderer: (params = {}) => <JobListingView {...params} />,
  },
  {
    path: '/cloud-hosting',
    renderer: (params = {}) => <CloudHostingView {...params} />,
  },
  {
    path: '/logistics',
    renderer: (params = {}) => <LogisticsView {...params} />,
  },
  {
    path: '/help-center',
    renderer: (params = {}) => <HelpCenterView {...params} />,
  },
  {
    path: '/help-center-article',
    renderer: (params = {}) => <HelpCenterArticleView {...params} />,
  },
  {
    path: '/portfolio-page',
    renderer: (params = {}) => <PortfolioPageView {...params} />,
  },
  {
    path: '/portfolio-masonry',
    renderer: (params = {}) => <PortfolioMasonryView {...params} />,
  },
  {
    path: '/portfolio-grid',
    renderer: (params = {}) => <PortfolioGridView {...params} />,
  },
  {
    path: '/company-terms',
    renderer: (params = {}) => <CompanyTermsView {...params} />,
  },
  {
    path: '/about',
    renderer: (params = {}) => <AboutView {...params} />,
  },
  {
    path: '/about-side-cover',
    renderer: (params = {}) => <AboutSideCoverView {...params} />,
  },
  {
    path: '/pricing',
    renderer: (params = {}) => <PricingView {...params} />,
  },
  {
    path: '/password-reset-cover',
    renderer: (params = {}) => <PasswordResetCoverView {...params} />,
  },
  {
    path: '/password-reset-simple',
    renderer: (params = {}) => <PasswordResetSimpleView {...params} />,
  },
  {
    path: '/signin-simple',
    renderer: (params = {}) => <SigninSimpleView {...params} />,
  },
  {
    path: '/signin-cover',
    renderer: (params = {}) => <SigninCoverView {...params} />,
  },
  {
    path: '/signup-simple',
    renderer: (params = {}) => <SignupSimpleView {...params} />,
  },
  {
    path: '/signup-cover',
    renderer: (params = {}) => <SignupCoverView {...params} />,
  },
  {
    path: '/account-billing',
    renderer: (params = {}) => <AccountBillingView {...params} />,
  },
  {
    path: '/account-general',
    renderer: (params = {}) => <AccountGeneralView {...params} />,
  },
  {
    path: '/account-notifications',
    renderer: (params = {}) => <AccountNotificationsView {...params} />,
  },
  {
    path: '/account-security',
    renderer: (params = {}) => <AccountSecurityView {...params} />,
  },
  {
    path: '/messages',
    renderer: (params = {}) => <MessageView {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}) => <NotFoundView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
];

export default routes;
