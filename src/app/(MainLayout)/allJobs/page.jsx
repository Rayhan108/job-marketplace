"use client"

import { useState } from "react"

import { Search, SlidersHorizontal } from "lucide-react"


import { Input } from "antd"
import Pagination from "@/app/component/allJobs/pagination"
import JobCard from "@/app/component/allJobs/job-card"

export const jobListings = [
  {
    id: 1,
    title: "Head Chef Position - Luxury Resort",
    company: "Four Seasons Casablanca",
    location: "Casablanca",
    experience: "05 Years Exp.",
    description:
      "We are seeking an experienced head chef to lead our kitchen team in our luxury resort. The ideal candidate will have extensive experience in fine dining and team management.",
    requirements: [
      "Minimum 5 years as head chef",
      "Experience in luxury hospitality",
      "Strong leadership skills",
      "Culinary degree or equivalent",
    ],
    postedDate: "Jan 15, 2024",
    deadlineDate: "Feb 15, 2024",
    isNew: true,
    avatarUrl: "/placeholder.svg?height=40&width=40",
    avatarInitial: "K",
  },
  {
    id: 2,
    title: "Head Chef Position - Luxury Resort",
    company: "Four Seasons Casablanca",
    location: "Casablanca",
    experience: "05 Years Exp.",
    description:
      "We are seeking an experienced head chef to lead our kitchen team in our luxury resort. The ideal candidate will have extensive experience in fine dining and team management.",
    requirements: [
      "Minimum 5 years as head chef",
      "Experience in luxury hospitality",
      "Strong leadership skills",
      "Culinary degree or equivalent",
    ],
    postedDate: "Jan 15, 2024",
    deadlineDate: "Feb 15, 2024",
    isNew: true,
    avatarUrl: "/placeholder.svg?height=40&width=40",
    avatarInitial: "K",
  },
  {
    id: 3,
    title: "Head Chef Position - Luxury Resort",
    company: "Four Seasons Casablanca",
    location: "Casablanca",
    experience: "05 Years Exp.",
    description:
      "We are seeking an experienced head chef to lead our kitchen team in our luxury resort. The ideal candidate will have extensive experience in fine dining and team management.",
    requirements: [
      "Minimum 5 years as head chef",
      "Experience in luxury hospitality",
      "Strong leadership skills",
      "Culinary degree or equivalent",
    ],
    postedDate: "Jan 15, 2024",
    deadlineDate: "Feb 15, 2024",
    isNew: false,
    avatarUrl: "/placeholder.svg?height=40&width=40",
    avatarInitial: "K",
  },
  {
    id: 4,
    title: "Head Chef Position - Luxury Resort",
    company: "Four Seasons Casablanca",
    location: "Casablanca",
    experience: "05 Years Exp.",
    description:
      "We are seeking an experienced head chef to lead our kitchen team in our luxury resort. The ideal candidate will have extensive experience in fine dining and team management.",
    requirements: [
      "Minimum 5 years as head chef",
      "Experience in luxury hospitality",
      "Strong leadership skills",
      "Culinary degree or equivalent",
    ],
    postedDate: "Jan 15, 2024",
    deadlineDate: "Feb 15, 2024",
    isNew: false,
    avatarUrl: "/placeholder.svg?height=40&width=40",
    avatarInitial: "K",
  },
  {
    id: 5,
    title: "Head Chef Position - Luxury Resort",
    company: "Four Seasons Casablanca",
    location: "Casablanca",
    experience: "05 Years Exp.",
    description:
      "We are seeking an experienced head chef to lead our kitchen team in our luxury resort. The ideal candidate will have extensive experience in fine dining and team management.",
    requirements: [
      "Minimum 5 years as head chef",
      "Experience in luxury hospitality",
      "Strong leadership skills",
      "Culinary degree or equivalent",
    ],
    postedDate: "Jan 15, 2024",
    deadlineDate: "Feb 15, 2024",
    isNew: false,
    avatarUrl: "/placeholder.svg?height=40&width=40",
    avatarInitial: "K",
  },
  {
    id: 6,
    title: "Head Chef Position - Luxury Resort",
    company: "Four Seasons Casablanca",
    location: "Casablanca",
    experience: "05 Years Exp.",
    description:
      "We are seeking an experienced head chef to lead our kitchen team in our luxury resort. The ideal candidate will have extensive experience in fine dining and team management.",
    requirements: [
      "Minimum 5 years as head chef",
      "Experience in luxury hospitality",
      "Strong leadership skills",
      "Culinary degree or equivalent",
    ],
    postedDate: "Jan 15, 2024",
    deadlineDate: "Feb 15, 2024",
    isNew: false,
    avatarUrl: "/placeholder.svg?height=40&width=40",
    avatarInitial: "K",
  },
  {
    id: 7,
    title: "Head Chef Position - Luxury Resort",
    company: "Four Seasons Casablanca",
    location: "Casablanca",
    experience: "05 Years Exp.",
    description:
      "We are seeking an experienced head chef to lead our kitchen team in our luxury resort. The ideal candidate will have extensive experience in fine dining and team management.",
    requirements: [
      "Minimum 5 years as head chef",
      "Experience in luxury hospitality",
      "Strong leadership skills",
      "Culinary degree or equivalent",
    ],
    postedDate: "Jan 15, 2024",
    deadlineDate: "Feb 15, 2024",
    isNew: false,
    avatarUrl: "/placeholder.svg?height=40&width=40",
    avatarInitial: "K",
  },
  {
    id: 8,
    title: "Head Chef Position - Luxury Resort",
    company: "Four Seasons Casablanca",
    location: "Casablanca",
    experience: "05 Years Exp.",
    description:
      "We are seeking an experienced head chef to lead our kitchen team in our luxury resort. The ideal candidate will have extensive experience in fine dining and team management.",
    requirements: [
      "Minimum 5 years as head chef",
      "Experience in luxury hospitality",
      "Strong leadership skills",
      "Culinary degree or equivalent",
    ],
    postedDate: "Jan 15, 2024",
    deadlineDate: "Feb 15, 2024",
    isNew: false,
    avatarUrl: "/placeholder.svg?height=40&width=40",
    avatarInitial: "K",
  },
]













export default function JobDashboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 6 // Display 6 jobs per page

  const filteredJobs = jobListings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)
  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1 w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search here..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            // variant="outline"
            className="flex items-center space-x-2 px-4 py-2 border rounded-md bg-white hover:bg-gray-100"
          >
            <SlidersHorizontal className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}
