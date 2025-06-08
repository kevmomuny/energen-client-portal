# JULES INSTRUCTIONS: Energen Client Portal

**Project:** Energen Client Portal - Customer-Facing Web Application
**Repository:** `C:\Dev\energen-client-portal`
**Technology Stack:** React 19 + TypeScript + Vite + Tailwind CSS
**Priority:** HIGH - Direct revenue impact through improved customer experience

## 🎯 PROJECT MISSION

Create a modern, professional client portal that allows Energen's customers to:
- View their generator service schedules and history
- Request maintenance appointments
- Access compliance certificates and reports  
- Track service ticket status
- Download NFPA 110 and CARB compliance documentation
- Manage contact information and site details

## 🏗️ ARCHITECTURE REQUIREMENTS

### **Technology Foundation**
- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite for ultra-fast development
- **Styling:** Tailwind CSS with Energen brand system
- **Routing:** React Router DOM v7
- **API Integration:** Axios for Zoho Catalyst backend connectivity
- **Authentication:** JWT token-based with Zoho CRM integration

### **Shared Infrastructure** 
**CRITICAL:** Reuse components from your Sales Platform implementation:
- Copy `shared/` directory from `energen-web-suite`
- Adapt API services for client-facing functionality
- Maintain consistent Energen branding and design system

## 📱 CORE FEATURES TO IMPLEMENT

### **1. Customer Dashboard (Priority 1)**
```
/dashboard
- Service schedule overview
- Recent maintenance history
- Compliance status indicators
- Quick actions (request service, view reports)
```

### **2. Service Management (Priority 1)**
```
/services
- Upcoming scheduled maintenance
- Service history with photos and notes
- Request new service appointments
- Emergency service contact information
```

### **3. Compliance Center (Priority 2)**
```
/compliance
- NFPA 110 certificates download
- CARB permit status
- Inspection reports and photos
- Compliance calendar and reminders
```

### **4. Reports & Documentation (Priority 2)**
```
/reports
- Maintenance reports by date range
- Equipment performance analytics
- Cost summaries and invoicing
- PDF export functionality
```

### **5. Account Management (Priority 3)**
```
/account
- Contact information updates
- Site and equipment details
- User preferences and notifications
- Security settings
```

## 🔌 BACKEND INTEGRATION

### **API Endpoints to Connect**
Base URL: `https://mobile-bid-tool-888909920.development.catalystserverless.com/server/`

**Key Services:**
- `/zoho-sync-manager` - Customer data and service history
- `/compliance-validator` - NFPA/CARB compliance status
- `/proposal-generator` - Service quotes and estimates
- `/analytics-dashboard` - Performance metrics and reports

### **Authentication Flow**
1. Customer login via email/password
2. JWT token generation through Zoho CRM lookup
3. Role-based access (customers see only their data)
4. Session management with refresh tokens

## 📋 DEVELOPMENT PHASES

### **Phase 1: Foundation (Week 1)**
- [ ] Initialize React 19 + TypeScript + Vite project
- [ ] Set up Tailwind CSS with Energen brand tokens
- [ ] Create basic routing structure
- [ ] Implement authentication components
- [ ] Connect to Zoho Catalyst for user verification

### **Phase 2: Core Features (Week 2)**  
- [ ] Build customer dashboard with service overview
- [ ] Implement service history and scheduling
- [ ] Create compliance certificate viewer
- [ ] Add basic report generation

### **Phase 3: Enhancement (Week 3)**
- [ ] Advanced filtering and search
- [ ] PDF export functionality  
- [ ] Mobile responsive optimization
- [ ] Performance optimization and testing

## 🎨 UI/UX REQUIREMENTS

### **Design System**
- **Primary Colors:** Energen blue (#1E40AF), success green (#059669)
- **Typography:** Inter for body text, Termina for headings
- **Layout:** Clean, professional, mobile-first responsive
- **Components:** Card-based layout, clear CTAs, intuitive navigation

### **User Experience Priorities**
1. **Simplicity:** Easy navigation for non-technical users
2. **Clarity:** Clear service status and next steps
3. **Trust:** Professional appearance reflecting Energen's expertise
4. **Efficiency:** Quick access to most-needed information

## 📁 PROJECT STRUCTURE

```
energen-client-portal/
├── public/
│   ├── index.html
│   └── energen-favicon.ico
├── src/
│   ├── components/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── services/
│   │   ├── compliance/
│   │   └── shared/           # From energen-web-suite
│   ├── pages/
│   │   ├── DashboardPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── CompliancePage.tsx
│   │   ├── ReportsPage.tsx
│   │   └── AccountPage.tsx
│   ├── services/
│   │   ├── authService.ts
│   │   ├── customerService.ts
│   │   └── complianceService.ts
│   ├── hooks/
│   ├── utils/
│   └── App.tsx
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 SUCCESS METRICS

### **Technical Targets**
- **Performance:** Page load < 2 seconds
- **Accessibility:** WCAG 2.1 AA compliance
- **Mobile:** Responsive on all device sizes
- **Browser:** Support Chrome, Firefox, Safari, Edge

### **Business Impact**
- **Customer Satisfaction:** Reduce support calls by 40%
- **Efficiency:** Self-service appointment scheduling
- **Retention:** Improved customer experience and transparency
- **Revenue:** Enable online service upselling

## 💼 DELIVERABLES

### **Code Deliverables**
1. **Complete React Application** with all core features
2. **Responsive UI Components** following Energen brand system  
3. **API Integration** with live Zoho Catalyst backend
4. **Authentication System** with role-based access
5. **Documentation** for future maintenance and updates

### **Deployment Preparation**
1. **Production Build** optimized for deployment
2. **Environment Configuration** for staging/production
3. **CI/CD Integration** with GitHub Actions
4. **Security Audit** and performance optimization

## 📞 SUPPORT & COMMUNICATION

### **Progress Reporting**
- **Daily Updates:** Commit progress to feature branches
- **Weekly Demo:** Working features deployed to staging
- **Blockers:** Immediate communication via this instruction file

### **Quality Standards**
- **TypeScript:** Strict mode, no `any` types
- **Testing:** Component tests for critical functionality  
- **Code Review:** Self-documented, clean, maintainable code
- **Performance:** Lighthouse scores > 90 for all metrics

---

**🎯 PRIORITY FOCUS:** Start with customer dashboard and service management. These provide immediate value and establish the foundation for all other features.

**🚀 SUCCESS INDICATOR:** When customers can log in, view their service history, and request appointments through a professional, mobile-friendly interface.

**📞 NEED HELP?** Update this file with questions or blockers, and check for responses from the main development team.