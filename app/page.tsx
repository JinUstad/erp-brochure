'use client'

import { Download, Mail, Phone, Globe, Zap, Shield, Users, CheckCircle2, BarChart3, Lock, Cloud, Bell, QrCode, LayoutDashboard, Banknote, UserCheck, ClipboardList, Calendar, BookOpen, FileText, Files, PenTool, FileBadge, PlayCircle, Settings, Clock, Wallet, Box } from 'lucide-react'
import { useState } from 'react'

export default function BrochurePage() {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    // Page 1: Cover
    <div key="cover" className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 flex flex-col items-center justify-center text-white p-5 md:p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="relative z-10 text-center max-w-3xl">
        <div className="mb-6">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-8">
            Complete Digital Solution
          </div>
        </div>
        <h1 className="text-2xl md:text-4xl md:text-6xl font-bold mb-4">SKORA ERP</h1>
        <h2 className="text-3xl font-light mb-8">Complete Digital School Management Solution</h2>
        <p className="text-xl mb-12 opacity-90 font-light">Developed & Maintained by DevforDevs</p>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5 md:p-8 mb-8">
          <p className="text-lg italic">"Empowering Educational Institutions Through Smart Digital Transformation"</p>
        </div>
        <p className="text-lg opacity-90">Transforming Schools into Smart Digital Campuses</p>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>,

    // Page 2: About DevforDevs
    <div key="about-company" className="min-h-screen bg-white p-6 md:p-12 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">About DevforDevs</h1>
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <p className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
            DevforDevs is an educational technology company specializing in developing modern ERP solutions, websites, mobile applications, and digital platforms for schools, colleges, coaching institutes, and businesses.
          </p>
          <p className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
            Our goal is to simplify school administration through secure, scalable, and user-friendly technology that enhances communication between administrators, teachers, parents, and students.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              { icon: '🎯', title: 'School ERP', desc: 'Complete management system' },
              { icon: '🌐', title: 'Websites', desc: 'Responsive school portals' },
              { icon: '📱', title: 'Mobile Apps', desc: 'iOS & Android solutions' },
              { icon: '⚙️', title: 'Custom Software', desc: 'Tailored solutions' },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg">
                <div className="text-2xl md:text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // Page 3: About SKORA ERP
    <div key="about-skora" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6 md:p-12 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">About SKORA ERP</h1>
        <div className="space-y-6">
          <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg border border-blue-100">
            <p className="text-2xl font-semibold text-slate-900 mb-4">All-in-One School Management Platform</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              SKORA ERP is a complete cloud-based School Management System designed to digitize every operation of a school.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              The system enables seamless collaboration between administrators, teachers, parents, and students while reducing paperwork and improving operational efficiency.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { value: '10+', label: 'Schools' },
              { value: '20+', label: 'Teachers' },
              { value: '250+', label: 'Students' },
              { value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-4 rounded-lg text-center shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // Page 4: Complete Solution Overview
    <div key="solution" className="min-h-screen bg-white p-6 md:p-12 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 text-center">Complete Solution</h1>
        <p className="text-xl text-slate-600 text-center mb-12">Five Integrated Platforms</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: '🌐', title: 'School Website', desc: 'Modern responsive website', color: 'blue' },
            { icon: '🖥️', title: 'Admin Panel', desc: 'Complete operational control', color: 'purple' },
            { icon: '👨‍🏫', title: 'Teacher Portal', desc: 'Web-based teaching hub', color: 'green' },
            { icon: '📱', title: 'Teacher Mobile App', desc: 'On-the-go management', color: 'orange' },
            { icon: '👨‍👩‍👧', title: 'Parent Mobile App', desc: 'Real-time school updates', color: 'pink' },
          ].map((item, i) => {
            const colorMap = {
              blue: 'from-blue-50 to-blue-100 border-blue-300',
              purple: 'from-purple-50 to-purple-100 border-purple-300',
              green: 'from-green-50 to-green-100 border-green-300',
              orange: 'from-orange-50 to-orange-100 border-orange-300',
              pink: 'from-pink-50 to-pink-100 border-pink-300',
            }
            return (
              <div key={i} className={`bg-gradient-to-br ${colorMap[item.color as keyof typeof colorMap]} border rounded-xl p-5 md:p-8 hover:shadow-lg transition`}>
                <div className="text-3xl md:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-700">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>,

    // Page 5: Admin Panel Features
    <div key="admin-panel" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-12 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">School Admin Panel</h1>
        <p className="text-xl text-slate-600 mb-8">Complete Control Over School Operations</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <LayoutDashboard className="w-8 h-8" />, title: 'Dashboard', desc: 'Overview of metrics' },
            { icon: <Users className="w-8 h-8" />, title: 'Students', desc: 'Student management' },
            { icon: <FileText className="w-8 h-8" />, title: 'Transfer Certificate', desc: 'Generate TCs' },
            { icon: <ClipboardList className="w-8 h-8" />, title: 'Form Builder', desc: 'Custom forms' },
            { icon: <UserCheck className="w-8 h-8" />, title: 'Teachers', desc: 'Staff management' },
            { icon: <Calendar className="w-8 h-8" />, title: 'Teacher Attendance', desc: 'Staff attendance' },
            { icon: <Banknote className="w-8 h-8" />, title: 'Payroll', desc: 'Salary processing' },
            { icon: <BookOpen className="w-8 h-8" />, title: 'Syllabus', desc: 'Curriculum plans' },
            { icon: <Clock className="w-8 h-8" />, title: 'Timetable', desc: 'Class schedules' },
            { icon: <FileBadge className="w-8 h-8" />, title: 'Report Cards', desc: 'Performance reports' },
            { icon: <Wallet className="w-8 h-8" />, title: 'Fees', desc: 'Fee collections' },
            { icon: <Bell className="w-8 h-8" />, title: 'Announcements', desc: 'School notices' },
            { icon: <Phone className="w-8 h-8" />, title: 'Leads & Inquiries', desc: 'Admissions tracking' },
            { icon: <BarChart3 className="w-8 h-8" />, title: 'Reports', desc: 'Analytics & insights' },
            { icon: <Settings className="w-8 h-8" />, title: 'Basics and Extras', desc: 'System config' },
            { icon: <Box className="w-8 h-8" />, title: 'Inventory', desc: 'Asset management' },
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition">
              <div className="text-blue-600 mb-3 flex justify-center">{item.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Page 6: Teacher Portal Features
    <div key="teacher-portal" className="min-h-screen bg-white p-6 md:p-12 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">Teacher Web Portal</h1>
        <p className="text-xl text-slate-600 mb-8">Manage Daily Academic Activities from Any Computer</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <LayoutDashboard className="w-8 h-8" />, title: 'Dashboard', desc: 'Quick overview of activities' },
            { icon: <Users className="w-8 h-8" />, title: 'My Students', desc: 'Complete student info' },
            { icon: <Banknote className="w-8 h-8" />, title: 'Fees', desc: 'Manage fee collections' },
            { icon: <UserCheck className="w-8 h-8" />, title: 'My Attendance', desc: 'Track your attendance' },
            { icon: <ClipboardList className="w-8 h-8" />, title: 'Attendance', desc: 'Mark student attendance' },
            { icon: <Calendar className="w-8 h-8" />, title: 'Timetable', desc: 'View schedule and classes' },
            { icon: <BookOpen className="w-8 h-8" />, title: 'Syllabus', desc: 'Manage curriculum' },
            { icon: <FileText className="w-8 h-8" />, title: 'Homework', desc: 'Assign homework' },
            { icon: <Files className="w-8 h-8" />, title: 'Worksheets', desc: 'Create worksheets' },
            { icon: <PenTool className="w-8 h-8" />, title: 'Exams', desc: 'Record exam marks' },
            { icon: <FileBadge className="w-8 h-8" />, title: 'Report Cards', desc: 'Generate report cards' },
            { icon: <BarChart3 className="w-8 h-8" />, title: 'Reports', desc: 'View academic reports' },
            { icon: <PlayCircle className="w-8 h-8" />, title: 'Tutorial', desc: 'Training materials' },
            { icon: <Settings className="w-8 h-8" />, title: 'Settings', desc: 'Manage preferences' },
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition">
              <div className="text-blue-600 mb-3 flex justify-center">{item.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Page 7: Mobile Apps
    <div key="mobile-apps" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-12 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Mobile Applications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">📱 Teacher Mobile App</h2>
            <p className="text-slate-600 mb-4">Teachers manage daily tasks directly from smartphones</p>
            <div className="space-y-2">
              {['Attendance Marking', 'Geofencing Check-In', 'Homework Assignment', 'Marks Entry', 'Notifications', 'Salary Details'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">👨‍👩‍👧 Parent Mobile App</h2>
            <p className="text-slate-600 mb-4">Parents stay connected with school in real-time</p>
            <div className="space-y-2">
              {['Child Attendance', 'Homework Tracking', 'Report Cards', 'Fee Details', 'Timetable', 'Notices'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Page 8: Smart Features
    <div key="features" className="min-h-screen bg-white p-6 md:p-12 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Smart Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: '☁️', title: 'Cloud Based', desc: 'Access from anywhere' },
            { icon: '🔔', title: 'Push Notifications', desc: 'Real-time updates' },
            { icon: '🔐', title: 'QR Attendance', desc: 'Quick check-in' },
            { icon: '📍', title: 'Geofencing', desc: 'Location tracking' },
            { icon: '📄', title: 'Auto Report Cards', desc: 'Generated instantly' },
            { icon: '📊', title: 'CSV/PDF Export', desc: 'Multiple formats' },
            { icon: '🌙', title: 'Dark Mode', desc: 'Easy on eyes' },
            { icon: '🔄', title: 'Real-Time Sync', desc: 'Instant updates' },
            { icon: '🆕', title: 'Auto Updates', desc: 'Always current' },
          ].map((feature, i) => (
            <div key={i} className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg text-center hover:shadow-lg transition">
              <div className="text-2xl md:text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Page 9: Security
    <div key="security" className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 text-white p-6 md:p-12 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">Security & Reliability</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Lock className="w-8 h-8" />, title: 'JWT Authentication', desc: 'Secure token-based access' },
            { icon: <Shield className="w-8 h-8" />, title: 'HTTPS Encryption', desc: 'Protected data transmission' },
            { icon: <Cloud className="w-8 h-8" />, title: 'Secure Database', desc: 'Enterprise-grade security' },
            { icon: <CheckCircle2 className="w-8 h-8" />, title: 'Daily Backup', desc: 'Data protection' },
            { icon: <Users className="w-8 h-8" />, title: 'Role-Based Access', desc: 'Granular permissions' },
            { icon: <BarChart3 className="w-8 h-8" />, title: 'Audit Logs', desc: 'Complete activity tracking' },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
              <div className="text-blue-300 mb-3">{item.icon}</div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-blue-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Page 10: Benefits
    <div key="benefits" className="min-h-screen bg-white p-6 md:p-12 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Key Benefits</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Reduce Paperwork', 'Faster Administration', 'Better Parent Communication', 'Digital Attendance',
            'Faster Fee Collection', 'Professional Report Cards', 'Secure Data', 'Accessible Anywhere',
            'Automatic Updates', 'Technical Support 24/7', 'Scalable System', 'Easy Integration'
          ].map((benefit, i) => (
            <div key={i} className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">✓</div>
              <span className="text-lg text-slate-900 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Page 11: Pricing
    <div key="pricing" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-12 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Pricing</h1>
        <div className="bg-white rounded-2xl shadow-xl p-5 md:p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Complete School ERP Package</h2>
            <div className="text-3xl md:text-5xl font-bold text-blue-600 mt-4">₹18,000</div>
            <p className="text-slate-600 mt-2">One-time setup & installation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'School Website', 'Admin Panel', 'Teacher Portal', 'Teacher Mobile App',
              'Parent Mobile App', 'Initial Setup', 'Installation', 'Training',
              'Technical Support', 'Software Updates', '1 Year Warranty', 'Free Updates'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // Page 12: Annual Subscription
    <div key="subscription" className="min-h-screen bg-white p-6 md:p-12 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Annual Subscription</h1>
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-5 md:p-8 rounded-xl mb-8 border border-blue-200">
          <p className="text-xl text-slate-900 font-semibold text-center mb-2">₹80 Per Student / Year</p>
          <p className="text-slate-600 text-center">Starting from Next Academic Session</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-6 py-4 text-left font-bold">Number of Students</th>
                <th className="px-6 py-4 text-right font-bold">Annual Fee</th>
              </tr>
            </thead>
            <tbody>
              {[
                { students: 100, fee: '₹8,000' },
                { students: 250, fee: '₹20,000' },
                { students: 500, fee: '₹40,000' },
                { students: 750, fee: '₹60,000' },
                { students: 1000, fee: '₹80,000' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="px-6 py-4 text-slate-900 font-medium">{row.students} Students</td>
                  <td className="px-6 py-4 text-right text-slate-900 font-bold text-lg">{row.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>,

    // Page 13: Optional Services
    <div key="optional-services" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-12 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Optional Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'QR Attendance', desc: 'Quick and accurate attendance marking' },
            { title: 'UDISE Integration', desc: 'Government compliance & reporting' },
            { title: 'Payroll Automation', desc: 'Automated salary processing' },
            { title: 'Data Migration', desc: 'Smooth transfer from existing system' },
            { title: 'Custom Modules', desc: 'Tailored features for your school' },
            { title: 'Custom Android Apps', desc: 'Branded mobile applications' },
            { title: 'Priority Support', desc: '24/7 dedicated support team' },
            { title: 'API Integration', desc: 'Connect with other systems' },
          ].map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Page 14: Why Choose DevforDevs
    <div key="why-choose" className="min-h-screen bg-white p-6 md:p-12 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Why Choose DevforDevs?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Affordable Pricing', 'Complete School ERP', 'Modern Technology', 'Secure Cloud Platform',
            'Mobile & Web Access', 'Fast Deployment', 'Regular Updates', 'Dedicated Technical Support',
            'Custom Features Available', 'Scalable for All Schools', '10+ Years Experience', '24/7 Support'
          ].map((reason, i) => (
            <div key={i} className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <span className="text-slate-900 font-semibold">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Page 15: Contact
    <div key="contact" className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 md:p-12 flex flex-col justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl mb-12 opacity-90">Ready to transform your school? Contact us today!</p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-white/20 mb-8">
          <h2 className="text-3xl font-bold text-white mb-8">DevforDevs</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <Globe className="w-6 h-6" />
              <a href="https://www.devfordevs.in" className="text-lg hover:underline">www.devfordevs.in</a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Mail className="w-6 h-6" />
              <a href="mailto:support.devfordevs@gmail.com" className="text-lg hover:underline">support.devfordevs@gmail.com</a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Phone className="w-6 h-6" />
              <a href="tel:8512889586" className="text-lg hover:underline">+91 8512889586</a>
            </div>
          </div>
        </div>

        <div className="text-sm opacity-75">
          <p className="mb-2">School ERP Solutions | Website Development</p>
          <p className="mb-4">Mobile Applications | Custom Software Development</p>
          <p>© 2024 DevforDevs. All rights reserved.</p>
        </div>
      </div>
    </div>,
  ]

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Main Content */}
      <div className="bg-white">
        {pages[currentPage]}
      </div>

      {/* Navigation and Controls */}
      <div className="sticky bottom-0 bg-white border-t border-slate-200 px-8 py-4 flex items-center justify-center shadow-lg">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg disabled:opacity-50 hover:bg-slate-300 transition"
          >
            ← Previous
          </button>
          <span className="px-4 py-2 bg-blue-100 text-blue-900 rounded-lg font-semibold">
            Page {currentPage + 1} of {pages.length}
          </span>
          <button
            onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))}
            disabled={currentPage === pages.length - 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 hover:bg-blue-700 transition"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}
