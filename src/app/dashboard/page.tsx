'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LogOut,
  Mail,
  Phone,
  Building,
  DollarSign,
  Calendar,
  MessageSquare,
  Users,
  RefreshCw,
  Search,
  Filter,
} from 'lucide-react';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  service: string;
  budget: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

export default function DashboardPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterService, setFilterService] = useState('');
  const router = useRouter();

  // Check authentication on component mount
  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (!isAuth) {
      router.push('/sign-in');
      return;
    }
    fetchSubmissions();
  }, [router]);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/submissions');
      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissions(result.data);
      } else {
        if (response.status === 401) {
          localStorage.removeItem('isAuthenticated');
          router.push('/sign-in');
          return;
        }
        setError(result.message || 'Failed to fetch submissions');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      // Call sign out API to clear httpOnly cookie
      await fetch('/api/auth/signout', {
        method: 'POST',
      });
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      // Clear local storage and redirect regardless of API call result
      localStorage.removeItem('isAuthenticated');
      router.push('/sign-in');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Filter submissions based on search and service filter
  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch = 
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesService = filterService === '' || submission.service === filterService;
    
    return matchesSearch && matchesService;
  });

  // Get unique services for filter dropdown
  const uniqueServices = Array.from(new Set(submissions.map(s => s.service)));

  if (loading) {
    return (
      <div className="min-h-screen bg-primary-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-primary-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-900">
                Vision Nectar Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={fetchSubmissions}
                className="flex items-center space-x-2 px-4 py-2 text-primary-600 hover:text-primary-800 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-primary-600">Total Submissions</p>
                <p className="text-2xl font-bold text-primary-900">{submissions.length}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-primary-600">This Month</p>
                <p className="text-2xl font-bold text-primary-900">
                  {submissions.filter(s => {
                    const submissionDate = new Date(s.createdAt);
                    const currentDate = new Date();
                    return submissionDate.getMonth() === currentDate.getMonth() &&
                           submissionDate.getFullYear() === currentDate.getFullYear();
                  }).length}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-primary-600">Today</p>
                <p className="text-2xl font-bold text-primary-900">
                  {submissions.filter(s => {
                    const submissionDate = new Date(s.createdAt);
                    const today = new Date();
                    return submissionDate.toDateString() === today.toDateString();
                  }).length}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
                <input
                  type="text"
                  placeholder="Search submissions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="sm:w-64">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
                <select
                  value={filterService}
                  onChange={(e) => setFilterService(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="">All Services</option>
                  {uniqueServices.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
          >
            {error}
          </motion.div>
        )}

        {/* Submissions List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-primary-100">
            <h2 className="text-lg font-semibold text-primary-900">
              Contact Submissions ({filteredSubmissions.length})
            </h2>
          </div>

          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-primary-300 mx-auto mb-4" />
              <p className="text-primary-600">
                {submissions.length === 0 ? 'No submissions yet' : 'No submissions match your search'}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-primary-100">
              {filteredSubmissions.map((submission, index) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 hover:bg-primary-25 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                    {/* Contact Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-primary-900">
                          {submission.name}
                        </h3>
                        <span className="text-sm text-primary-500">
                          {formatDate(submission.createdAt)}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-primary-400" />
                          <span className="text-sm text-primary-700">{submission.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4 text-primary-400" />
                          <span className="text-sm text-primary-700">{submission.company}</span>
                        </div>
                        {submission.phone && (
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-primary-400" />
                            <span className="text-sm text-primary-700">{submission.phone}</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4 text-primary-400" />
                          <span className="text-sm text-primary-700">{submission.budget}</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {submission.service}
                        </span>
                      </div>

                      <div className="flex items-start space-x-2">
                        <MessageSquare className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-primary-600 leading-relaxed">
                          {submission.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
