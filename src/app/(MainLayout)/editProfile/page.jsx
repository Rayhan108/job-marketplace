"use client"

import { useForm } from "react-hook-form"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { FaRegUser } from "react-icons/fa"

export default function EditProfileForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm()

  const [dishPreviews, setDishPreviews] = useState([])
  const [submittedPhotos, setSubmittedPhotos] = useState([])
  const [profilePreview, setProfilePreview] = useState(null)
  const [photoError, setPhotoError] = useState("")

  const dishPhotosFiles = watch("dishPhotos")
  const profilePictureFile = watch("profilePicture")
  const uploadCvFile = watch("uploadCv")
  const fileInputRef = useRef(null)

  // Handle dish photo change with validation
  const handleDishPhotoChange = (e) => {
    const selectedFiles = Array.from(e.target.files)

    if (selectedFiles.length > 8) {
      setPhotoError("You can only upload up to 8 photos.")
      setValue("dishPhotos", []) // clear previous files
      setDishPreviews([])
    } else {
      setPhotoError("")
      setValue("dishPhotos", selectedFiles)

      const previews = selectedFiles.map((file) => URL.createObjectURL(file))
      setDishPreviews(previews)

      // Cleanup URLs
      return () => previews.forEach((url) => URL.revokeObjectURL(url))
    }
  }

  // Profile picture preview
  useEffect(() => {
    if (profilePictureFile && profilePictureFile[0]) {
      const file = profilePictureFile[0]
      const imageUrl = URL.createObjectURL(file)
      setProfilePreview(imageUrl)

      return () => URL.revokeObjectURL(imageUrl)
    } else {
      setProfilePreview(null)
    }
  }, [profilePictureFile])

  const onSubmit = (data) => {
    console.log("Form Data:", data)

    if (data.dishPhotos && data.dishPhotos.length > 0) {
      const postedImages = Array.from(data.dishPhotos).map((file) =>
        URL.createObjectURL(file)
      )
      setSubmittedPhotos(postedImages)
      setDishPreviews([]) // clear previews
    }
  }

  const yearsOfExperienceOptions = ["2 years", "3 years", "4 years", "5+ years", "10+ years"]
  const cityOptions = ["Select your city", "New York", "Los Angeles", "Chicago", "London", "Paris"]
  const currentPositionOptions = ["Sous-Chef", "Head Chef", "Pastry Chef", "Line Cook", "Commis Chef"]
  const experienceLevelOptions = ["Sous-Chef", "Junior Chef", "Senior Chef", "Executive Chef"]
  const culinarySpecialties = [
    "Moroccan Cuisine",
    "Asian Cuisine",
    "Italian Cuisine",
    "Fast Food",
    "French Cuisine",
    "French Cuisine",
    "Grills",
    "Seafood",
    "International Cuisine",
    "Pastry Shop",
    "Bakery",
    "Vegetarian Cuisine",
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white border border-[#B5B5B5] rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 max-w-4xl w-full">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full border-2 border-[#2047B8] overflow-hidden flex items-center justify-center mb-4">
            {profilePreview ? (
              <Image
                src={profilePreview}
                alt="Profile Preview"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            ) : (
              <FaRegUser size={30} className="text-[#2047B8]" />
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Edit My Profile</h1>
          <p className="text-sm text-gray-500 text-center">Keep your profile up to date to maximize your opportunity</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Profile Info */}
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ... existing input fields like name, city, position, etc. (unchanged) */}
          </div>

          {/* Culinary Specialties */}
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4 mt-8">Culinary Specialties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {culinarySpecialties.map((specialty) => (
              <div key={specialty} className="flex items-center">
                <input
                  type="checkbox"
                  id={specialty.replace(/\s/g, "")}
                  value={specialty}
                  {...register("culinarySpecialties")}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor={specialty.replace(/\s/g, "")} className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  {specialty}
                </label>
              </div>
            ))}
          </div>

          {/* Profile Picture */}
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4 mt-8">Profile Picture</h2>
          <div className="flex items-center space-x-4">
            <label htmlFor="profilePicture" className="cursor-pointer bg-[#F0F6FE] text-[#2A64C5] px-4 py-2 rounded-md text-sm font-medium ">
              Choose File
            </label>
            <input type="file" id="profilePicture" {...register("profilePicture")} className="sr-only" />
            <span className="text-sm text-gray-500">
              {profilePictureFile && profilePictureFile[0] ? profilePictureFile[0].name : "No File Chosen"}
            </span>
          </div>

          {/* Upload CV */}
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4 mt-8">Upload CV</h2>
          <div className="flex items-center space-x-4">
            <label htmlFor="uploadCv" className="cursor-pointer bg-[#EFFCF5] text-[#347659] px-4 py-2 rounded-md text-sm font-medium ">
              Choose File
            </label>
            <input type="file" id="uploadCv" {...register("uploadCv")} className="sr-only" />
            <span className="text-sm text-gray-500">
              {uploadCvFile && uploadCvFile[0] ? uploadCvFile[0].name : "No File Chosen"}
            </span>
          </div>

          {/* Dish Photos Section */}
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4 mt-8">Photos of your dishes</h2>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Your Photos</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
              {(submittedPhotos.length > 0 ? submittedPhotos : dishPreviews).map((src, index) => (
                <div key={index} className="relative w-full aspect-square rounded-md overflow-hidden border border-gray-200">
                  <Image src={src} alt={`Dish ${index + 1}`} fill style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>

            {submittedPhotos.length === 0 && (
              <>
                <div className="flex items-center space-x-4 mb-2">
                  <label htmlFor="dishPhotos" className="cursor-pointer bg-[#FEFBED] text-[#AE5924] px-4 py-2 rounded-xl text-sm font-medium">
                    Choose File
                  </label>
                  <input
                    type="file"
                    id="dishPhotos"
                    ref={fileInputRef}
                    multiple
                    disabled={dishPreviews.length >= 8}
                    onChange={handleDishPhotoChange}
                    className="sr-only"
                  />
                  <span className="text-sm text-gray-500">
                    {dishPreviews.length > 0
                      ? `${dishPreviews.length} file(s) chosen`
                      : "No File Chosen"}
                  </span>
                </div>
                {photoError && <p className="text-red-500 text-sm">{photoError}</p>}
                <p className="text-xs text-gray-500">You can add up to 8 photo(s)</p>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 pt-6">
            <button type="button" className="px-6 py-2 border border-[#E87B35] rounded-md text-[#E87B35] font-medium hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-[#E87B35] text-white rounded-md font-medium hover:bg-orange-600">
              Save Change
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
