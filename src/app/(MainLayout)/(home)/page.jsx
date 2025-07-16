'use client'

import React, { useState } from 'react'
import Banner from '@/app/component/home/Banner'
import Features from '@/app/component/home/Features'
import Join from '@/app/component/home/Join'
import Stats from '@/app/component/home/Stats'
import { IoMdPlay } from 'react-icons/io'
import { Modal, Input, Button } from 'antd'

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [feedback, setFeedback] = useState('')

  const showModal = () => setIsModalOpen(true)
  const handleOk = () => {
    console.log('Feedback submitted:', feedback)
    setIsModalOpen(false)
    setFeedback('')
  }
  const handleCancel = () => setIsModalOpen(false)

  return (
    <div>
      <Banner />
      <Stats />
      <Features />
      <Join />

      {/* Feedback Button */}
      <div className="fixed top-96 right-4">
        <button
          onClick={showModal}
          className="bg-[#679046] text-white px-4 py-2 md:py-3 rounded-md text-sm font-medium w-[100px] md:w-auto relative z-10"
        >
          Feedback!!!
        </button>
        <IoMdPlay
          size={40}
          className="text-[#679046] rotate-180 absolute top-4 md:top-6 right-4 z-0"
        />
      </div>

      {/* Ant Design Modal */}
      <Modal
        title="We value your feedback"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <Input.TextArea
          rows={4}
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </Modal>
    </div>
  )
}

export default HomePage
